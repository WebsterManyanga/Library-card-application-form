import Address from '../Address';
import Birthdate from '../Birthdate';
import Contact from '../Contact';
import Duration from '../Duration';
import Name from '../Name';
import Sex from '../Sex';
import Status from '../Status';
import './Main.css';

export default function Main() {
  return (
    <main className="application">
      <h1 className="application__title" id="header">Library Card Application Form</h1>
      <form className="user">
        <Name />
        <Sex />
        <Birthdate />
        <Status />
        <Address />
        <Contact />
        <Duration />
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