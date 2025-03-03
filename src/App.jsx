import './App.css'
import { useState } from 'react'; //1- importamos `useState` desde React.

/*
function App() {
 //2.definimos varibles estado name y newname
const [name, setName]= useState("Sofía");// Nombre actual del profesor
const [newName, setNewName]= useState("");// Nuevo nombre profe ingresado por el usuario

return (
    //3. renderiza un título `<h2>` con el texto "Teacher Name" seguido del valor de `name`.
    //4. Renderiza una lista `<ul>` con tres elementos `<li>`
    //5. Utilizamos `setName` proporcionada por `useState` para actualizar el nombre del profesor cuando se haga clic en un elemento de la lista.
    <div>
        <h2>Teacher Name {name}</h2> 
        <ul>
            <li onClick={() => setName ("Data")}>Data</li>
            <li onClick={() => setName ("Reyes")}>Reyes</li>
            <li onClick={() => setName ("Yolanda")}>Yolanda</li>
        </ul>

    </div> 
    )
}

*/

//BONUS//
//1. Implementa una función `changeName` que se encargue de actualizar el nombre del profesor:
function App() {
        const [name, setName] = useState("");
        const [newName, setNewName] = useState("");
    function changeName (evento){  

        evento.preventDefault(); // evita que al enviar formulario se recargue navegador

//2. Verifica que `newName` no esté vacío antes de actualizar el nombre.
        if (newName !== "") {
            setName(newName); // Actualiza el nombre del profe
            setNewName(""); // Restablece newName a  una cadena vacía
        }
    }
        return (
            <div>
                <h1>Teacher Name: {name}</h1>
                <form onSubmit={changeName}> 
                    <input type="text" value={newName} onChange={(evento) => setNewName(evento.target.value)} placeholder="add a name"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    };   
        export default App;




//onSubmit: evento que se dispara cuando un formulario es enviado
//onChange: evento que se dispara cuando el valor de un elemento de formulario cambia. 
//El (evento) es el argumento de la función, que representa el evento que se ha producido. 
