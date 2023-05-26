export default function Duration() {
  return (
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
  )
}