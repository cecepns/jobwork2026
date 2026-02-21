import { useState } from 'react'
import { Clock, Wallet, TrendingUp, ClipboardList, FileText, CheckCircle, Banknote, Plus, Minus } from 'lucide-react'

const navLinks = [
  { href: '#anasayfa', label: 'Anasayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#referanslar', label: 'Referanslar' },
  { href: '#iletisim', label: 'İletişim' },
]

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Şirket Avantajları',
    items: ['Tam zamanlı ve yarı zamanlı', 'Aynı gün ödemeler', 'İstediğiniz zaman ve yerde çalışın', 'Deneyim gerekmez'],
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Günlük Ödeme',
    items: ['Hızlı ödeme süreçleri', 'Güvenli transferler', 'Şeffaf ücretlendirme', 'Düzenli gelir akışı'],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'En İyi Gelir Fırsatları',
    items: ['Rekabetçi ücretler', 'Performans bonusları', 'Terfi imkanları', 'Esnek çalışma saatleri'],
  },
]

const tiers = [
  { name: 'Temel', range: '₺3.500 - ₺30.000/ay', desc: 'Başlangıç seviyesi için ideal', popular: false },
  { name: 'Gelişmiş', range: '₺5.000 - ₺40.000/ay', desc: 'En popüler seçenek', popular: true },
  { name: 'Profesyonel', range: '₺7.000 - ₺100.000/ay', desc: 'Maksimum kazanç potansiyeli', popular: false },
]

const stats = [
  { value: '8.102', label: 'Aktif Kullanıcı' },
  { value: '120', label: 'Tamamlanan Proje' },
  { value: '57', label: 'Ülke' },
  { value: '7/24', label: 'Destek' },
]

const steps = [
  { icon: <ClipboardList className="w-8 h-8" />, title: 'Kayıt Ol ve Başvur', desc: 'Hızlı kayıt formunu doldurun' },
  { icon: <FileText className="w-8 h-8" />, title: 'Belgelerinizi Gönderin', desc: 'Gerekli belgeleri yükleyin' },
  { icon: <CheckCircle className="w-8 h-8" />, title: 'Görevleri Tamamlayın', desc: 'Atanan işleri zamanında bitirin' },
  { icon: <Banknote className="w-8 h-8" />, title: 'Ödemenizi Alın', desc: 'Kazancınız hesabınıza aktarılır' },
]

const testimonials = [
  { name: 'Ahmet Yılmaz', role: 'Çevirmen', quote: 'Esnek çalışma saatleri sayesinde iş ve özel hayatımı dengeli yönetebiliyorum.' },
  { name: 'Zeynep Kaya', role: 'Veri Giriş Uzmanı', quote: 'Günlük ödemeler ile bütçemi çok daha iyi planlayabiliyorum.' },
]

const faqs = [
  { q: 'Nasıl kayıt olabilirim?', a: 'Anasayfadaki "Hemen Başla" butonuna tıklayarak ücretsiz hesap oluşturabilirsiniz.' },
  { q: 'Ödemeler ne zaman yapılır?', a: 'Tamamlanan görevler için ödemeler aynı gün veya 24 saat içinde hesabınıza aktarılır.' },
  { q: 'Deneyim gerekli mi?', a: 'Hayır, çoğu görev için deneyim gerekmez. Eğitim materyalleri sağlanır.' },
  { q: 'Ne kadar kazanabilirim?', a: 'Kazanç, çalışma saatlerinize ve görev türüne bağlıdır. Hesaplayıcı ile tahmini gelirinizi hesaplayabilirsiniz.' },
]

function App() {
  const [minPay, setMinPay] = useState(50)
  const [hours, setHours] = useState(8)
  const [days, setDays] = useState(30)
  const [result, setResult] = useState(1500)
  const [openFaq, setOpenFaq] = useState(null)

  const calculate = () => {
    setResult(minPay * (hours / 8) * days)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#anasayfa" className="text-xl font-bold text-blue-600">İşwork2025</a>
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 font-medium transition">
                  {link.label}
                </a>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
              Hemen Başla
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="anasayfa" className="relative pt-24 md:pt-44 min-h-screen pb-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Türkiye'de Online İş ile Para Kazanın — Esnek Saatler ve Günlük Ödemeler
              </h1>
              <ul className="space-y-2 text-white/90 mb-8">
                <li className="flex items-center gap-2">• Ofis saatlerine bağlı değilsiniz</li>
                <li className="flex items-center gap-2">• Türkiye'nin her yerinden çalışın</li>
                <li className="flex items-center gap-2">• Günlük nakit ödemeler</li>
              </ul>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition shadow-lg">
                Daha Fazla Bilgi
              </button>
            </div>
            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="İş birliği"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="hakkimizda" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Online çalışma platformumuz ile esnek saatlerde, istediğiniz yerden güvenilir gelir elde edin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-blue-600">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="hizmetler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Günde Ne Kadar Para Kazanabilirsiniz?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aşağıdaki hesaplayıcı ile tahmini aylık kazancınızı hesaplayın.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-blue-600 rounded-2xl p-8 sm:p-12 mb-12">
            <div className="grid sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Min. Günlük Ücret</label>
                <input
                  type="number"
                  value={minPay}
                  onChange={(e) => setMinPay(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border-0"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Saat</label>
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border-0"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Gün</label>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border-0"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={calculate}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Hesapla
                </button>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-4xl sm:text-5xl font-bold text-white">
                ₺{result.toLocaleString('tr-TR')}/ay
              </p>
              <p className="text-white/80 mt-2">Tahmini toplam kazanç</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  t.popular ? 'border-orange-500' : 'border-transparent'
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 right-6 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Popüler
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{t.range}</p>
                <p className="text-gray-600 mb-6">{t.desc}</p>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    t.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Hemen Başla
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <p className="text-4xl font-bold">{s.value}</p>
                <p className="text-white/80 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="referanslar" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Birkaç basit adımda online çalışmaya başlayın ve kazanmaya başlayın.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} data-aos="fade-up" data-aos-delay={i * 100} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Çalışanlarımız Ne Diyor?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platformumuzda çalışan binlerce kişinin deneyimlerini keşfedin.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <button className="text-blue-600 font-medium hover:underline">Devamını Oku</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="bg-white rounded-xl p-6 shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  <span className="text-blue-600">
                    {openFaq === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </span>
                </button>
                {openFaq === i && <p className="mt-4 text-gray-600">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Yeni Kariyerinize Başlamaya Hazır mısınız?
          </h2>
          <p className="text-white/90 mb-8">
            Bugün kayıt olun ve esnek saatlerde online çalışmaya başlayın.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Hemen Başla
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="text-xl font-bold mb-4">İşwork2025</p>
              <p className="text-gray-400 text-sm">© 2025 İşwork Tüm Hakları Saklıdır.</p>
            </div>
            <div>
              <p className="font-bold mb-4">Hizmetlerimiz</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Anasayfa</a></li>
                <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white">İletişim</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Şirket</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-white">Kullanım Koşulları</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Destek</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">SSS</a></li>
                <li><a href="#" className="hover:text-white">İletişim</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/12032433763"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        aria-label="WhatsApp ile Bize Ulaşın"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>WhatsApp ile Bize Ulaşın</span>
      </a>
    </div>
  )
}

export default App
