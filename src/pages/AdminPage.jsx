import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LogOut, Save, MessageCircle } from 'lucide-react'
import { getContent, putContent, login, CONTENT_KEYS } from '../utils/api'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)

  const [waLink, setWaLink] = useState('')
  const [saveLoading, setSaveLoading] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    setIsLoggedIn(!!token)
    if (token) fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      setLoadError('')
      const value = await getContent(CONTENT_KEYS.WA_LINK)
      setWaLink(value?.url || value || '')
    } catch (e) {
      setLoadError(e.message || 'İçerik yüklenemedi')
      setWaLink('')
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')
    setLoginLoading(true)
    try {
      const data = await login(email, password)
      const token = data.token || data.accessToken || data.access_token
      // if (token) {
        localStorage.setItem('admin_token', token)
        setIsLoggedIn(true)
        fetchContent()
      // } else {
        setLoginError('Sunucudan token alınamadı')
      // }
    } catch (err) {
      setLoginError(err.message || 'Giriş başarısız')
    } finally {
      setLoginLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    setIsLoggedIn(false)
    setWaLink('')
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaveLoading(true)
    setSaveSuccess(false)
    try {
      const value = waLink.startsWith('http') ? { url: waLink } : { url: `https://wa.me/${waLink.replace(/\D/g, '')}` }
      await putContent(CONTENT_KEYS.WA_LINK, value)
      setSaveSuccess(true)
      setWaLink(value.url)
    } catch (err) {
      setLoadError(err.message || 'Kaydetme başarısız')
    } finally {
      setSaveLoading(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Girişi</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            {loginError && (
              <p className="text-red-600 text-sm">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loginLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">İçerik Yönetimi</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600"
          >
            <LogOut className="w-5 h-5" />
            Çıkış Yap
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">WhatsApp Bağlantısı</h2>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            Örn: <code className="bg-gray-100 px-1 rounded">https://wa.me/12032433763</code> veya sadece <code className="bg-gray-100 px-1 rounded">12032433763</code>
          </p>
          <form onSubmit={handleSave} className="space-y-4">
            <input
              type="text"
              value={waLink}
              onChange={(e) => setWaLink(e.target.value)}
              placeholder="https://wa.me/12032433763"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {loadError && <p className="text-red-600 text-sm">{loadError}</p>}
            {saveSuccess && <p className="text-green-600 text-sm">Kaydedildi!</p>}
            <button
              type="submit"
              disabled={saveLoading}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              {saveLoading ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:underline">← Ana sayfaya dön</Link>
        </p>
      </div>
    </div>
  )
}
