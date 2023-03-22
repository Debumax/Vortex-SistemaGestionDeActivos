import '../stylos/Footer.css'

const Footer=()=>{
    return <>
            <footer className="footer-contenedor">
                <p className="pie">
                    Made with 
                    <span>
                        <img className="img-icon" src={require('../../src/img/favorito.png')} alt="fondo vortex"/>
                    </span>
                    for 
                    <a href="https://vortex-it.com/" className="a-lnk"> Vortex</a>
                    
                </p>
            </footer>
    </>
};
export default Footer;