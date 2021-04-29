import React from "react"
import "./Styles.css"

const Input = ({title, value,handleChange}) => { //creamos un componente con 3 props
    return (
      <div className="input-box">
        <label className="input-label">{title}</label> {/*titulo que arrojara el conversor */}
        <input className="input-style" type="number" value={value} onChange={handleChange}/> {/*input el cual tendra como valor una prop y como evento otra*/}
      </div>
    )
  }

export default Input