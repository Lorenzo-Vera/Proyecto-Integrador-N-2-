import './Alta.css'
const Alta = () => {
    return (
        <>
        <h1>Formulario</h1>
<p id='Texto'>Completa los datos del formulario.</p>
    <form action="" autocomplete="off">
    <input type="text" name="nombre" placeholder="Ingresa el nombre" class="campo" />
    <input type="number" name="precio" placeholder="Ingresa el precio" class="campo" />
    <input type="text" name="stock" placeholder="Ingresa el stock" class="campo" />
    <input type="text" name="marca" placeholder="Ingresa la marca" class="campo" />
    <input type="text" name="categoria" placeholder="Ingresa la categoria" class="campo"/>
    <input type="text" name="descripción corta" placeholder="Ingresa un texto" class="campo" />
    <input type="text" name="descripción larga" placeholder="Ingresa un texto" class="campo" /> 
    <input type="text" name="envío sin cargo" placeholder="Ingresa un envio sin cargo" class="campo" />
    <input type="date" name="edad" class="campo" />
    <input type="file" name="foto" class="campo" />
    <input type="submit" name="Enviar" value="Enviar" class="Enviar" />
    </form>
    </>
    )
    
}
export default Alta;