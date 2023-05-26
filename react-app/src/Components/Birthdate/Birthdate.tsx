import { useState } from "react"

export default function Birthdate() {
  const [valid, setValid] = useState('');

  function validate(dobInput: string) {
    const dob = new Date(dobInput);
    const today = new Date();
    const age = (today.getFullYear() + today.getMonth() + today.getDate()) - (dob.getFullYear() + dob.getMonth() + dob.getDate());
    
    if (age >= 18 && age <= 100) {
      setValid('valid');
    } else {
      setValid('invalid');
    }
  }

  return (
    <section className="user__birthdate">
      <h2 className="user__heading">
        <label htmlFor="birthdate">Date of birth</label>
      </h2>
      <div className="user__input-label">
        <input
          name="birthdate"
          id="birthdate" 
          type="date"
          required
          onChange={(e) => validate((e.target as HTMLInputElement).value)}
        />
        <div className={`validity ${valid}`}></div>
      <label htmlFor="birthdate">Date</label>
      </div>
    </section>
  )

}