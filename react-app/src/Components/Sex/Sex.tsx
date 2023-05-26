export default function Sex() {
  return (
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
  )
}