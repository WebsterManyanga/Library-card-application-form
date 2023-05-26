import { useState } from "react"

export default function Name() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  function validate(value: string, changeState: (a: string) => void) {
    const regex = /^[a-z ,.'-]+$/i;
    if (regex.test(value)) {
      changeState('valid');
    } else {
      changeState('invalid');
    }
  }

  return (
    <section className="user__name">
      <h2 className="user__heading">
        <label htmlFor="first-name">Name</label>
      </h2>
      <div className="user__input-label">
        <input
          type="text" 
          id="first-name"
          name="first-name"
          required
          maxLength={20}
          onInput={(e) => validate((e.target as HTMLInputElement).value, setName)}
        />
        <div className={`validity ${name}`}></div>
      <label htmlFor="first-name">First Name</label>
      </div>
      <div className="user__input-label">
        <input
          type="text"
          id="last-name"
          name="last-name"
          required
          maxLength={20}
          onInput={(e) => validate((e.target as HTMLInputElement).value, setLastName)}
        />
        <div className={`validity ${lastName}`}></div>
      <label htmlFor="last-name">Last Name</label>  
      </div>
    </section>
  )
}