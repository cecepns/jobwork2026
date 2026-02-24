import { useState, useEffect } from 'react'
import { Clock, Wallet, TrendingUp, ClipboardList, FileText, CheckCircle, Banknote, Plus, Minus } from 'lucide-react'
import { getContent, CONTENT_KEYS } from './utils/api'
import heroVideo from './assets/video.mp4'

const navLinks = [
  { href: '#anasayfa', label: 'Accueil' },
  { href: '#hakkimizda', label: 'À propos' },
  { href: '#hizmetler', label: 'Services' },
  { href: '#referanslar', label: 'Références' },
  { href: '#iletisim', label: 'Contact' },
]

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Avantages de l'entreprise",
    items: [
      'Temps plein ou partiel',
      'Paiements le jour même',
      'Travaillez quand et où vous voulez',
      "Aucune expérience requise",
    ],
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Paiements quotidiens',
    items: [
      'Processus de paiement rapides',
      'Transferts sécurisés',
      'Tarification transparente',
      'Revenus réguliers',
    ],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Les meilleures opportunités de revenus',
    items: [
      'Rémunération compétitive',
      'Primes de performance',
      "Possibilités d'évolution",
      'Horaires flexibles',
    ],
  },
]

const tiers = [
  {
    name: 'Basique',
    range: '3 500 € - 30 000 €/mois',
    desc: 'Idéal pour bien démarrer',
    popular: false,
  },
  {
    name: 'Avancé',
    range: '5 000 € - 40 000 €/mois',
    desc: 'L’option la plus populaire',
    popular: true,
  },
  {
    name: 'Professionnel',
    range: '7 000 € - 100 000 €/mois',
    desc: 'Potentiel de gains maximal',
    popular: false,
  },
]

const stats = [
  { value: '8 102', label: 'Utilisateurs actifs' },
  { value: '120', label: 'Projets terminés' },
  { value: '57', label: 'Pays' },
  { value: '7/24', label: 'Support' },
]

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Inscrivez-vous et postulez",
    desc: "Remplissez le formulaire d'inscription rapide",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Envoyez vos documents',
    desc: 'Téléchargez les documents nécessaires',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Complétez les missions',
    desc: 'Terminez les tâches qui vous sont attribuées à temps',
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: 'Recevez votre paiement',
    desc: 'Vos gains sont versés sur votre compte',
  },
]

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Traducteur',
    quote:
      'Grâce aux horaires flexibles, je gère beaucoup mieux l’équilibre entre ma vie professionnelle et personnelle.',
  },
  {
    name: 'Zeynep Kaya',
    role: 'Opératrice de saisie de données',
    quote: 'Avec les paiements quotidiens, je peux planifier mon budget beaucoup plus facilement.',
  },
]

const faqs = [
  {
    q: 'Comment puis-je m’inscrire ?',
    a: 'Cliquez sur le bouton "Commencer maintenant" sur la page d’accueil pour créer un compte gratuit.',
  },
  {
    q: 'Quand les paiements sont-ils effectués ?',
    a: 'Pour les missions terminées, les paiements sont effectués le jour même ou dans les 24 heures sur votre compte.',
  },
  {
    q: "Ai-je besoin d'expérience ?",
    a: "Non, la plupart des missions ne nécessitent pas d'expérience. Du matériel de formation est fourni.",
  },
  {
    q: 'Combien puis-je gagner ?',
    a: 'Les gains dépendent de vos heures de travail et du type de missions. Utilisez le calculateur pour estimer vos revenus.',
  },
]

function App() {
  const [minPay, setMinPay] = useState(50)
  const [hours, setHours] = useState(8)
  const [days, setDays] = useState(30)
  const [result, setResult] = useState(1500)
  const [openFaq, setOpenFaq] = useState(null)
  const [waLink, setWaLink] = useState('https://wa.me/12032433763')

  useEffect(() => {
    getContent(CONTENT_KEYS.WA_LINK)
      .then((val) => {
        const url = typeof val === 'string' ? val : val?.url
        if (url) setWaLink(url)
      })
      .catch(() => {})
  }, [])

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
              Commencer maintenant
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
                Gagnez de l’argent en ligne en Belgique🇧🇪 — Horaires flexibles et paiements quotidiens
              </h1>
              <ul className="space-y-2 text-white/90 mb-8">
                <li className="flex items-center gap-2">• Vous n’êtes pas lié(e) aux horaires de bureau</li>
                <li className="flex items-center gap-2">• Travaillez de partout en France</li>
                <li className="flex items-center gap-2">• Paiements quotidiens en espèces</li>
              </ul>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition shadow-lg">
                Plus d’informations
              </button>
            </div>
            <div data-aos="fade-left" className="relative">
              <video
                src={heroVideo}
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
                controls
                autoPlay
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="hakkimizda" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Avec notre plateforme de travail en ligne, gagnez un revenu fiable avec des horaires flexibles, où que vous soyez.
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
              Combien pouvez-vous gagner par jour ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utilisez le calculateur ci-dessous pour estimer vos gains mensuels.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-blue-600 rounded-2xl p-8 sm:p-12 mb-12">
            <div className="grid sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Salaire journalier minimum (€)
                </label>
                <input
                  type="number"
                  value={minPay}
                  onChange={(e) => setMinPay(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border-0"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Heures</label>
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border-0"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Jours</label>
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
                  Calculer
                </button>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-4xl sm:text-5xl font-bold text-white">
                €{result.toLocaleString('fr-FR')}/mois
              </p>
              <p className="text-white/80 mt-2">Revenu mensuel estimé</p>
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
                    Populaire
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Commencez à travailler en ligne et à gagner de l’argent en quelques étapes simples.
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
              Ce que disent nos collaborateurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez l’expérience de milliers de personnes qui travaillent sur notre plateforme.
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
                <button className="text-blue-600 font-medium hover:underline">Lire la suite</button>
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
              Questions fréquentes
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
            Prêt(e) à commencer votre nouvelle carrière ?
          </h2>
          <p className="text-white/90 mb-8">
            Inscrivez-vous dès aujourd’hui et commencez à travailler en ligne avec des horaires flexibles.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Commencer maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="text-xl font-bold mb-4">İşwork2025</p>
              <p className="text-gray-400 text-sm">© 2025 İşwork. Tous droits réservés.</p>
            </div>
            <div>
              <p className="font-bold mb-4">Nos services</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Accueil</a></li>
                <li><a href="#" className="hover:text-white">À propos</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Entreprise</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white">Conditions d’utilisation</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Support</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        aria-label="Contactez-nous via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>Contactez-nous sur WhatsApp</span>
      </a>
    </div>
  )
}

export default App
