import '../css/Navegacion.css'
import Logo from '../Img/Inmopulse.png'
import { Link } from 'react-router-dom';
const Navegacion = () => {
    return (
    <header class="Encabezado">
    <figure>
        <Link to="/"><img src={Logo} alt="Inmopulse" class="Image" /></Link>
    </figure>
    <nav>
        <ul id="Menu">
        <Link to="/alta"><li>Alta</li></Link>
        <Link to="/contacto"><li>Contacto</li></Link>
        <Link to="/nosotros"><li>Nosotros</li></Link>
        <Link to="/carrito"><li>Carrito</li></Link>
        </ul>
    </nav>
</header>
    )
}
export default Navegacion;