import { useState } from 'react'
import Layout from '../components/Layout'
import formStyles from '../styles/Form.module.css'

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
  address: '',
  apartment_number: '',
  issue_type: '',
  description: '',
}

const issueTypes = [
  'Välj typ av fel…',
  'VVS / Rör',
  'El',
  'Ventilation',
  'Fönster / Dörr',
  'Golv / Väggar / Tak',
  'Vitvaror',
  'Lås / Nycklar',
  'Gemensamma utrymmen',
  'Övrigt',
]

export default function FelanmalanPage() {
  const [loadingState, setLoadingState] = useState('start')
  const [data, setData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoadingState('loading')
    grecaptcha.ready(function () {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_reCAPTCHA_site_key, { action: 'submit' })
        .then(function (token) {
          fetch('/api/felanmalan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, ...data }),
          }).then(() => {
            setLoadingState('done')
            setTimeout(() => {
              setData(initialState)
              setLoadingState('start')
            }, 8000)
          })
        })
    })
  }

  const handleChange = (key) => (e) => setData((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <Layout title="Felanmälan">
      <div className="page-header">
        <h1>Felanmälan</h1>
        <p>Är något trasigt i din lägenhet? Fyll i formuläret så åtgärdar vi det så snart vi kan.</p>
      </div>

      <div className="section">
        <div className={formStyles.formWrap}>
          <form onSubmit={handleSubmit}>
            <div className={formStyles.formGrid}>

              <div className="form-group">
                <label htmlFor="firstname">Förnamn</label>
                <input required id="firstname" type="text" className="form-control" value={data.firstname} onChange={handleChange('firstname')} />
              </div>

              <div className="form-group">
                <label htmlFor="lastname">Efternamn</label>
                <input required id="lastname" type="text" className="form-control" value={data.lastname} onChange={handleChange('lastname')} />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-postadress</label>
                <input required id="email" type="email" className="form-control" value={data.email} onChange={handleChange('email')} />
              </div>

              <div className="form-group">
                <label htmlFor="phonenumber">Telefonnummer</label>
                <input required id="phonenumber" type="tel" className="form-control" value={data.phonenumber} onChange={handleChange('phonenumber')} />
              </div>

              <div className="form-group">
                <label htmlFor="address">Adress</label>
                <input required id="address" type="text" className="form-control" value={data.address} onChange={handleChange('address')} />
              </div>

              <div className="form-group">
                <label htmlFor="apartment_number">Lägenhetsnummer</label>
                <input required id="apartment_number" type="text" className="form-control" placeholder="t.ex. 1201" value={data.apartment_number} onChange={handleChange('apartment_number')} />
              </div>

              <div className={`form-group ${formStyles.fullWidth}`}>
                <label htmlFor="issue_type">Typ av fel</label>
                <select required id="issue_type" className="form-control" value={data.issue_type} onChange={handleChange('issue_type')}>
                  {issueTypes.map((t, i) => (
                    <option key={i} value={i === 0 ? '' : t} disabled={i === 0}>{t}</option>
                  ))}
                </select>
              </div>

              <div className={`form-group ${formStyles.fullWidth}`}>
                <label htmlFor="description">Beskriv felet</label>
                <textarea required id="description" className="form-control" rows={5} placeholder="Beskriv vad som är fel, var i lägenheten det är och när du märkte det." value={data.description} onChange={handleChange('description')} />
              </div>

            </div>

            <div className={formStyles.submitRow}>
              <button
                type="submit"
                className="btn-primary"
                disabled={loadingState === 'loading'}
              >
                {loadingState === 'loading' ? 'Skickar…' : loadingState === 'done' ? 'Skickat!' : 'Skicka felanmälan'}
              </button>
              {loadingState === 'done' && (
                <span className={formStyles.successMsg}>
                  Tack! Vi har tagit emot din felanmälan och återkommer så snart vi kan.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
