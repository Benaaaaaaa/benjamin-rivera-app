import { useState } from "react"

export const Form = ({addNewCar}) => {
    
    const initForm = {
        patente: '',
        marca: '',
        color: '',
        nombreDueno: '',
        telefono: '',
        direccion: ''
    }

    const [valoresForm, setValoresForm] = useState(initForm)

    const {patente, marca, color, nombreDueno, telefono, direccion} = valoresForm

    const inputChange = (event) =>{

        setValoresForm({
            ...valoresForm,
            [event.target.name]:event.target.value
        })
    }

    const clickEvent = (event) => {
        addNewCar(valoresForm)
    }



  return (
    <div className="col 3">
        <div className="card">
            <div className="card-header bg-info">
                <h3 className="text-center text-white">Formulario</h3>
            </div>

            <div className="card-body">
                <label>Patente de vehiculo :</label>
                <input
                    type="text"
                    className="form-control"
                    name="patente"
                    value={patente}
                    onChange={inputChange}
                />

                <label>Marca :</label>
                <input
                    type="text"
                    className="form-control"
                    name="marca"
                    value={marca}
                    onChange={inputChange}
                />

                <label>Color :</label>
                <input
                    type="text"
                    className="form-control"
                    name="color"
                    value={color}
                    onChange={inputChange}
                />

                <label>Nombre de dueño :</label>
                <input
                    type="text"
                    className="form-control"
                    name="nombreDueno"
                    value={nombreDueno}
                    onChange={inputChange}
                />

                <label>Telefono</label>
                <input
                    type="text"
                    className="form-control"
                    name="telefono"
                    value={telefono}
                    onChange={inputChange}
                />

                <label>Direccion</label>
                <input
                    type="text"
                    className="form-control"
                    name="direccion"
                    value={direccion}
                    onChange={inputChange}
                />
            </div>

            <div className="class-footer p-2 mx-2 ">
                <input type="button" onClick={clickEvent} className="btn btn-primary" value="Agregar"/>
            </div>

        </div>

    </div>
  )
}
