import { TableBody } from "./TableBody"

export const Tabla = ({datos, deleteCar}) => {

  return (
    <div className="col-8">
        <h3 className="text-center text-white bg-info">Tabla</h3>
        <table className="table table-bordered">
            <thead>
                <tr className="table-info">
                    <th>Patente</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Nombre de Dueño</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th></th>                            
                </tr>                            
            </thead>

            <tbody>
                
                <TableBody datos={datos} deleteCar={deleteCar} />
                            
            </tbody>
        </table>

    </div>
  )
}
