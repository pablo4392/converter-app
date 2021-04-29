import React, { useState } from "react";
import './Styles.css'
import Input from "./Input"

const Calculator = () => {
    //declaramos variables de estado que ocuparemos
    const [radians, setRadians] = useState("") //con esta manejaremos el input de radianes
    const [degrees, setDegrees] = useState("") //esta sera para manejar el input de grados
    const [title, setTitle] = useState("Calculator") //esta controlara el titulo cambiandolo de grados a radianes y viceversa dependiendo de la convesion que este mos realizando 
  
    //estas seran las funciones con las que operaremos
    const toRadian = (degrees) => { //esta sera la funcion que convierta grados a radianes
      return degrees * 0.01745; //tomamos la variable de estado de grados y la multiplicamos para transformar
    }
  
    const toDegrees = (radians) => { //esta sera la funcion que convierta radianes a grados
      return radians * 57.296 //tomamos la variable de estado de radianes y la multiplicamos para transformar
    }
  
    //estas seran las llamadas que realizaremos para interactuar con la interfaz
    const handleChangeDegrees = (event) => {
      const value = event.target.value; //de esta manera interactuamos con el input
  
      //estas fuciones permitiran la interacion entre los inputs
      setRadians(toRadian(value)); //setRadians transformara la variable de estado radians por medio de la funcion "toRadian"
      setDegrees(value); //
  
      //esta funcion solo cambiara el nombre del titulo 
      setTitle("Degrees -> Radians"); 
    }
  
    const handleChangeRadians = (event) => {
      const value = event.target.value // input donde operaremos
  
      setDegrees(toDegrees(value));
      setRadians(value); 
  
      //esta funcion cambia el nombre del titulo 
      setTitle("Radians -> Degrees");
    }
  
      return ( //estructura de lo que retornara
        <div className="converter">
          <h1 className="title">{title}</h1>
          {/*ocupamos nuestro componente input  y ocupamos las propiedades anteriormente designadas*/}
          <Input title="Degrees" value={degrees} handleChange={handleChangeDegrees} /> 
          <Input title="Radians" value={radians} handleChange={handleChangeRadians} />
        </div>
      )
    };  

export default Calculator;