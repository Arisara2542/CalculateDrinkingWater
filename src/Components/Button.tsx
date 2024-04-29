import "./Button.css"

export const Button = ({ handleChange , isCheck }) =>{
  return(
    <div >
      <input 
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked ={isCheck}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  )
}
