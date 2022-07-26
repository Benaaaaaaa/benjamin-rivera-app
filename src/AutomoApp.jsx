import { useEffect, useState } from "react"
import { Form } from "./components/Form"
import { Tabla } from "./components/Tabla"

const autos = () => {
    return JSON.parse(localStorage.getItem('Autos')) || []
}

export const AutomoApp = () => {

    const [valor, setValor] = useState(autos)

    const addCars = (nuevoRegistro) => {
        if (valor.filter(v => v.patente === nuevoRegistro.patente).length > 0)
            return alert('el registro ya exixte')
        setValor([nuevoRegistro,...valor])
    }

    useEffect(() => {
        localStorage.setItem('Autos', JSON.stringify(valor))
    }, [valor])

    const eliminarValor = (registro) => {
        setValor([...registro])
    }

    return (
        <div className="container">
            <div>
                <h1 className="text-center bg-primary m-3 p-4 text-white">Parque Automotriz</h1>
            </div>
            <div className="row mt-4">

                <Tabla datos={valor} deleteCar={eliminarValor}/>

                <Form addNewCar={addCars} />

            </div>

        </div>          
    )
    
}
