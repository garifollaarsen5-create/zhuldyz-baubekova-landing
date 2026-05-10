import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { IconWA, IconArrow } from '../components/Icons.jsx'

const PURPOSES = [
  'Кредит на развитие бизнеса',
  'Покупка оборудования',
  'Пополнение оборотных средств',
  'Расширение бизнеса',
  'Привлечение инвестиций',
  'Подготовка к банку / разбор бизнеса',
  'Обучение специалистов',
  'Другое',
]

const RECIPIENTS = [
  { id: '77754492929', name: 'zhuldyz.baubekova', phone: '+7 775 449 29 29' },
  { id: '77472079300', name: 'business_qoldau.kz', phone: '+7 747 207 93 00' },
]

function formatPhone(v) {
  let d = v.replace(/\D/g, '')
  if (d.startsWith('8')) d = '7' + d.slice(1)
  if (!d.startsWith('7')) d = '7' + d
  d = d.slice(0, 11)
  let f = '+7'
  if (d.length > 1) f += ' ' + d.slice(1, 4)
  if (d.length >= 5) f += ' ' + d.slice(4, 7)
  if (d.length >= 8) f += ' ' + d.slice(7, 9)
  if (d.length >= 10) f += ' ' + d.slice(9, 11)
  return d.length <= 1 ? '+7 ' : f
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', city: '', activity: '', amount: '', purpose: '', recipient: '77754492929',
  })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(null)

  const upd = (k) => (e) => {
    const val = k === 'phone' ? formatPhone(e.target.value) : e.target.value
    setForm({ ...form, [k]: val })
    if (errors[k]) setErrors({ ...errors, [k]: '' })
  }

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Укажите имя'
    if (form.phone.replace(/\D/g, '').length < 11) e.phone = 'Введите корректный телефон'
    if (form.city.trim().length < 2) e.city = 'Укажите город'
    if (form.activity.trim().length < 2) e.activity = 'Укажите вид деятельности'
    if (!form.amount.trim()) e.amount = 'Укажите сумму'
    if (!form.purpose) e.purpose = 'Выберите цель'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) {
      setToast({ msg: 'Пожалуйста, заполните все поля корректно', err: true })
      setTimeout(() => setToast(null), 3500)
      return
    }
    const lines = [
      'Здравствуйте! Заявка с сайта Business Qoldau:',
      '',
      `👤 Имя: ${form.name}`,
      `📞 Телефон: ${form.phone}`,
      `🏙 Город: ${form.city}`,
      `💼 Вид деятельности: ${form.activity}`,
      `💰 Сумма финансирования: ${form.amount}`,
      `🎯 Цель: ${form.purpose}`,
    ]
    const text = encodeURIComponent(lines.join('\n'))
    setToast({ msg: 'Открываем WhatsApp с вашей заявкой…', err: false })
    setTimeout(() => setToast(null), 3500)
    window.open(`https://wa.me/${form.recipient}?text=${text}`, '_blank', 'noopener')
  }

  const inputCls = (hasErr) =>
    `w-full px-4 py-3.5 rounded-xl bg-white border-2 outline-none transition-all text-navy-900 font-medium
     placeholder:text-navy-300 focus:ring-4 focus:ring-navy-200/50
     ${hasErr ? 'border-red-400 focus:border-red-500' : 'border-navy-100 focus:border-navy-500'}`

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/40 to-white" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-3xl" />
      </div>

      <div className="container-x grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
        <Reveal>
          <span className="eyebrow-gold mb-4">Заявка на консультацию</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Хотите понять, может ли ваш бизнес <span className="grad-gold">получить финансирование?</span>
          </h2>
          <p className="mt-5 text-navy-700 text-lg leading-relaxed">
            Оставьте заявку — мы разберём ваш бизнес, оценим шансы, слабые места и возможные инструменты финансирования.
          </p>

          <div className="mt-8 rounded-3xl overflow-hidden shadow-card border border-navy-100 max-w-md">
            <img src="/consultation-photo.png" alt="Консультация" className="w-full h-auto" />
          </div>

          <div className="mt-7 grid gap-3">
            <div className="flex items-center gap-3 text-navy-700">
              <span className="w-9 h-9 rounded-full bg-navy-50 grid place-items-center text-navy-700"><IconWA width="18" height="18" /></span>
              <a href="https://wa.me/77754492929" target="_blank" rel="noopener" className="hover:text-navy-950 font-semibold">+7 775 449 29 29 · zhuldyz.baubekova</a>
            </div>
            <div className="flex items-center gap-3 text-navy-700">
              <span className="w-9 h-9 rounded-full bg-navy-50 grid place-items-center text-navy-700"><IconWA width="18" height="18" /></span>
              <a href="https://wa.me/77472079300" target="_blank" rel="noopener" className="hover:text-navy-950 font-semibold">+7 747 207 93 00 · business_qoldau.kz</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} noValidate
                className="card p-6 sm:p-8 lg:p-10 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="block text-sm font-semibold text-navy-700 mb-1.5">Имя <span className="text-red-500">*</span></span>
                <input value={form.name} onChange={upd('name')} placeholder="Ваше имя"
                       className={inputCls(errors.name)} />
                {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
              </label>
              <label className="block">
                <span className="block text-sm font-semibold text-navy-700 mb-1.5">Телефон <span className="text-red-500">*</span></span>
                <input value={form.phone} onChange={upd('phone')} onFocus={() => !form.phone && setForm({...form, phone: '+7 '})}
                       placeholder="+7 777 000 00 00" inputMode="tel"
                       className={inputCls(errors.phone)} />
                {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="block text-sm font-semibold text-navy-700 mb-1.5">Город <span className="text-red-500">*</span></span>
                <input value={form.city} onChange={upd('city')} placeholder="Алматы"
                       className={inputCls(errors.city)} />
                {errors.city && <span className="text-xs text-red-500 mt-1 block">{errors.city}</span>}
              </label>
              <label className="block">
                <span className="block text-sm font-semibold text-navy-700 mb-1.5">Вид деятельности <span className="text-red-500">*</span></span>
                <input value={form.activity} onChange={upd('activity')} placeholder="Например: оптовая торговля"
                       className={inputCls(errors.activity)} />
                {errors.activity && <span className="text-xs text-red-500 mt-1 block">{errors.activity}</span>}
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="block text-sm font-semibold text-navy-700 mb-1.5">Сумма финансирования <span className="text-red-500">*</span></span>
                <input value={form.amount} onChange={upd('amount')} placeholder="Например: 30 млн ₸"
                       className={inputCls(errors.amount)} />
                {errors.amount && <span className="text-xs text-red-500 mt-1 block">{errors.amount}</span>}
              </label>
              <label className="block">
                <span className="block text-sm font-semibold text-navy-700 mb-1.5">Цель финансирования <span className="text-red-500">*</span></span>
                <select value={form.purpose} onChange={upd('purpose')}
                        className={inputCls(errors.purpose) + ' appearance-none bg-white pr-10'}
                        style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none' stroke='%231f4582' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 1l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat:'no-repeat', backgroundPosition:'right 1rem center'}}>
                  <option value="" disabled hidden>Выберите цель</option>
                  {PURPOSES.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.purpose && <span className="text-xs text-red-500 mt-1 block">{errors.purpose}</span>}
              </label>
            </div>

            {/* Recipient picker */}
            <div className="rounded-2xl bg-navy-50/60 border border-dashed border-navy-200 p-4">
              <div className="text-sm font-bold text-navy-900 mb-2">Кому отправить заявку?</div>
              <div className="grid sm:grid-cols-2 gap-2">
                {RECIPIENTS.map((r) => (
                  <label key={r.id} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all
                    ${form.recipient === r.id ? 'bg-white shadow-soft ring-2 ring-navy-500/40' : 'hover:bg-white/70'}`}>
                    <input type="radio" name="recipient" value={r.id}
                           checked={form.recipient === r.id}
                           onChange={(e) => setForm({...form, recipient: e.target.value})}
                           className="accent-navy-700 w-4 h-4" />
                    <span className="text-sm">
                      <b className="text-navy-900 block">{r.name}</b>
                      <span className="text-navy-500">{r.phone}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-gold w-full text-base !py-4">
              Оставить заявку <IconArrow />
            </button>
            <p className="text-xs text-navy-500 text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Заявка автоматически отправится в WhatsApp.
            </p>
          </form>
        </Reveal>
      </div>

      {/* Toast */}
      <div role="status" aria-live="polite"
           className={`fixed left-1/2 top-6 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl border shadow-card font-semibold transition-all max-w-[90vw] text-center
             ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}
             ${toast?.err ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'}`}>
        {toast?.msg}
      </div>
    </section>
  )
}
