export default function Status() {
  return (
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
  )
}