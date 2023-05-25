import './Main.css';

export default function Main() {
  return (
    <main className="application">
      <h1 className="application__title" id="header">Library Card Application htmlForm</h1>
      <form className="user">
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
              />
          <label htmlFor="first-name">First Name</label>
          </div>
          <div className="user__input-label">
            <input
              type="text"
              id="last-name"
              name="last-name"
              required
              maxLength={20}
            />
          <label htmlFor="last-name">Last Name</label>  
          </div>
        </section>
        <section className="user__sex">
          <h2 className="user__heading required">Sex</h2>
          <div className="user__radio-options">
            <div className="user__radio-option">
              <input 
                type="radio" 
                name="sex" 
                id="male" 
                required
              />
              <label htmlFor="male">Male</label>   
            </div>
            <div className="user__radio-option">
              <input
                type="radio" 
                name="sex" 
                id="female"
              /> 
              <label htmlFor="female">Female</label>              
            </div>
          </div>
        </section>
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
            />
          <label htmlFor="birthdate">Date</label>
          </div>
        </section>
        <section className="user__status">
          <h2 className="user__heading required">Status</h2>
          <div className="user__radio-options">
            <div className="user__radio-option">
              <input 
                type="radio" 
                name="status" 
                id="student" 
                required
                />
              <label htmlFor="student">Student</label>  
            </div>
            <div className="user__radio-option">
              <input type="radio" name="status" id="staff"/>
              <label htmlFor="staff">Staff</label>        
            </div>
          </div>
        </section>
        <section className="user__address">
          <h2><label htmlFor="street">Address</label></h2>
          <div className="address__inputs">
            <div className="user__input-label">
              <input type="text" name="street" id="street" required/>
              <label htmlFor="street">Street Address</label>  
            </div>
            <div className="user__input-label">
              <input type="text" name="city" id="city" required/>
              <label htmlFor="city">City</label>  
            </div>
            <div className="user__input-label">
              <input type="text" name="zip" id="zip" required/>
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
        <section className="user__contact">
          <h2 className="user__heading"><label htmlFor="phone">Contact InhtmlFormation</label></h2>
          <div className="user__input-label">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
            />
            <label htmlFor="phone">Phone number</label>
          </div>
          <div className="user__input-label">
            <input 
              type="email"
              name="email" 
              id="email"
              required
            />  
            <label htmlFor="email">Email</label>
          </div>
        </section>
        <section className="user__duration">
          <h2 className="required">What is the expected duration of the library card?</h2>
          <div className="user__duration-options">
            <div className="user__duration-option">
              <input 
                type="radio" 
                name="duration" 
                id="visit" 
                required
              />
              <label htmlFor="visit">Single visit</label>  
            </div>
            <div className="user__duration-option">
              <input 
                type="radio" 
                name="duration" 
                id="six-months"
              />
              <label htmlFor="six-months">6 months</label>  
            </div>
            <div className="user__duration-option">
              <input 
                type="radio" 
                name="duration" 
                id="twelve-months"
              />
              <label htmlFor="twelve-months">12 months</label>  
            </div>
            <div className="user__duration-option">
              <input 
                type="radio" 
                name="duration" 
                id="more-than-twelve"
              />
              <label htmlFor="more-than-twelve">More than 12 months</label>  
            </div>
          </div>
        </section>
        <section className="user__reason">
          <h2>
            <label htmlFor="reason">What's the reason htmlFor applying htmlFor a library card? Please specify.</label>
          </h2>
          <textarea name="reason" placeholder="Type here..."></textarea>  
        </section>
        <section className="user__marketing">
          <h2>
            <label>How did you hear about us?</label>
            <select name="marketing">
              <option value="">--Please choose an option</option>
              <option value="Search engine">Search engine(Google, Yahoo, etc)</option>
              <option value="Friend">Recommended by friend</option>
              <option value="Social media">Social Media</option>
              <option value="Blog">Blog or publication</option>
              <option value="Other">Other</option>
            </select>
          </h2>
        </section>
        <div className="agreement">
          <input type="checkbox" name="agreement" id="agreement" required/>  
          <label htmlFor="agreement">I understand the full responsibility htmlFor the use of this library card. I verify that the inhtmlFormation on this htmlForm is correct</label>
        </div>
        <div className="submit">
          <input 
            id="submit-btn"
            type="submit" 
            value="Submit"
          />
        </div>
      </form>
    </main>
  )
} 