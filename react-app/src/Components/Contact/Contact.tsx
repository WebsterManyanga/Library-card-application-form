import { useState } from "react"

export default function Contact() {

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function validatePhone(value: string) {
    const regex = /^[0-9\-\+]{9,15}$/;

    if (regex.test(value)) {
      setPhone('valid')
    } else {
      setPhone('invalid');
    }
  }

  function validateEmail(value: string) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (regex.test(value)) {
      setEmail('valid')
    } else {
      setEmail('invalid');
    }
  }


  return (
    <section className="user__contact">
      <h2 className="user__heading"><label htmlFor="phone">Contact Information</label></h2>
      <div className="user__input-label">
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          onInput={(e) => validatePhone((e.target as HTMLInputElement).value)}
        />
        <div className={`validity ${phone}`}></div>
        <label htmlFor="phone">Phone number</label>
      </div>
      <div className="user__input-label">
        <input 
          type="email"
          name="email" 
          id="email"
          required
          onInput={(e) => validateEmail((e.target as HTMLInputElement).value)}
        />  
        <div className={`validity ${email}`}></div>
        <label htmlFor="email">Email</label>
      </div>
    </section>

  )
}