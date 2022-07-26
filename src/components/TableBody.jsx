
export const TableBody = ({datos, deleteCar}) => {

    const eliminar = (car) =>{
        const confirm = window.confirm('Desea eliminar el Vehiculo de ' + car.nombreDueno)
        if (confirm){
            const nuevoArreglo = datos.filter(d => d.patente !== car.patente)
            deleteCar(nuevoArreglo)
        }
    }

    return (
        <>
            {datos.map((car) => (
                <tr key={car.patente}>
                    <td>{car.patente}</td>
                    <td>{car.marca}</td>
                    <td>{car.color}</td>
                    <td>{car.nombreDueno}</td>
                    <td>{car.telefono}</td>
                    <td>{car.direccion}</td>
                    <td><button className="btn btn-danger" onClick={()=>eliminar(car)}>Borrar</button></td>

                </tr>
            ))}        
        </>    
    )
}
