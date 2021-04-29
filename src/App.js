import React, {useState} from 'react'
import './App.css';
import './Styles.css'

const Converter = ({title, value,handleChange}) => { //creamos un componente con 3 props
  return (
    <div>
      <label className="input-label">{title}</label> {/*tutulo que arrojara el conversor*/}
      <input className="input-style" value={value} onChange={handleChange}/> {/*input el cual tendra como valor una prop y como evento otra*/}
    </div>
  )
}

const Calc = () => {
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
        <h1>{title}</h1>
        {/*ocupamos nuestro componente input  y ocupamos las propiedades anteriormente designadas*/}
        <Converter title="Degrees" value={degrees} handleChange={handleChangeDegrees} /> 
        <Converter title="Radians" value={radians} handleChange={handleChangeRadians} />
      </div>
    )
  };


function App() {
  return (
    <div className="App">
      <Calc />
    </div>
  );
}

export default App;
