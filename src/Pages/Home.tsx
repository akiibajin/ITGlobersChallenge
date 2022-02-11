import ITGlobersButton from "../Components/ITGlobersButton"
import {Link} from 'react-router-dom'
import '../syles/Home.scss'
const Home:Function =():JSX.Element=>{
    return(
        <div className="buttons-container">
        <Link to="/form">
        <ITGlobersButton content="start" color="primary" className="start-button"/>
        </Link>
        </div>
    )
}

export default Home

//Ruta extra que renderiza un boton de inicio y lo lleva al formulario.