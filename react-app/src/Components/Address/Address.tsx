import { useState } from "react"

export default function Address() {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  function validateStreet(value: string) {    
    if (value) {
      setStreet('valid');
    } else {
      setStreet('invalid');
    }
  }

  function validateCity(value: string) {
    const regex =/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/gi;
    
    if (regex.test(value)) {
      setCity('valid');
    } else {
      setCity('invalid');
    }
  }

  function validateZip(value: string) {
    const regex = /^\d{5}[-\s]?(?:\d{4})?$/gm;
    
    if (regex.test(value)) {
      setZip('valid');
    } else {
      setZip('invalid');
    }
  }

  return (
    <section className="user__address">
      <h2><label htmlFor="street">Address</label></h2>
      <div className="address__inputs">
        <div className="user__input-label">
          <input 
            type="text" 
            name="street" 
            id="street" 
            required
            onInput={(e) => {validateStreet((e.target as HTMLInputElement).value)}}
          />
          <div className={`validity ${street}`}></div>
          <label htmlFor="street">Street Address</label>  
        </div>
        <div className="user__input-label">
          <input 
            type="text" 
            name="city" 
            id="city" 
            required
            onInput={(e) => {validateCity((e.target as HTMLInputElement).value)}}
          />
          <div className={`validity ${city}`}></div>
    
          <label htmlFor="city">City</label>  
        </div>
        <div className="user__input-label">
          <input 
            type="text" 
            name="zip" 
            id="zip" 
            required
            onInput={(e) => {validateZip((e.target as HTMLInputElement).value)}}
            />
          <div className={`validity ${zip}`}></div>
          <label htmlFor="zip">Zip/Postal Code</label>    
        </div>
        <div className="user__input-label">
          <select name="country" id="country" required>
            <option value="US">United States</option>
            <option value="PL">Poland</option>
            <option value="CA">Canada</option>
          </select>
          <label htmlFor="country">Country</label>  
        </div>
      </div>
    </section>
  )
}