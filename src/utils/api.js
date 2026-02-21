const API_BASE = 'https://api-inventory.isavralabel.com/raja-inc'

const getAuthHeaders = () => {
  const token = localStorage.getItem('admin_token')
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}

/**
 * Fetch content by key (public)
 * @param {string} key - Content key (e.g. 'wa_link_turkiye')
 * @returns {Promise<any>} Content value
 */
export async function getContent(key) {
  const res = await fetch(`${API_BASE}/api/content/${key}`)
  if (!res.ok) {
    if (res.status === 404) return null
    throw new Error(`API error: ${res.status}`)
  }
  return res.json()
}

/**
 * Update content by key (admin only, requires auth)
 * @param {string} key - Content key
 * @param {any} value - Content value (will be JSON stringified)
 */
export async function putContent(key, value) {
  const res = await fetch(`${API_BASE}/api/content/${key}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(value),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || err.error || `API error: ${res.status}`)
  }
  return res.json()
}

/**
 * Admin login
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ token: string }>}
 */
export async function login(email, password) {
  const res = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || err.error || 'Giriş başarısız')
  }
  const data = await res.json()
  return data
}

export const CONTENT_KEYS = {
  WA_LINK: 'wa_link_turkiye',
}
