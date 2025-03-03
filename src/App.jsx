import './App.css'
import { useState } from 'react'; //1- importamos `useState` desde React.


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

export default App