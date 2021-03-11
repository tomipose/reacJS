import {useState, useEffect} from "react"

const Appfunc = () => {
    const [contador, setContador] = useState(0)

     useEffect(()=> console.log("componentDidMount"))

     return (
        <div>
             <button onClick = {() => setContador((contador) => contador + 1)}>Contar</button>
            <div>Funcion componente y Hook</div>
           contador : {contador}
        </div>
     )
}
export default Appfunc;