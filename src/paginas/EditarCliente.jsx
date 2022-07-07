import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//components
import Formulario from "../components/Formulario";

function EditarCliente() {
    const { id } = useParams();
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(false); 

    useEffect(() => {
        setCargando(!cargando);
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setCliente(resultado);
            } catch (error) {
                console.log(error);
            }
            setCargando(false);
        }
        obtenerClienteAPI();
    }, []);

    return (  
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
            <p className="mt-3">Utiliza este formulario para editar los datos del cliente:</p>
            {cliente?.nombre ? (
                <Formulario 
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : <p className="mt-3 font-bold text-red-500">Cliente no valido...</p>}
        </>
    );
}

export default EditarCliente;