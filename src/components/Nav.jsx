import { Link } from 'react-router-dom';
import React from 'react'
import '../styles/NavStyled.css'

const Nav = () => {
  return (
    <>
        <nav>
            <Link to="/"><img src="/logo-sabara.png" alt="" /></Link>
            <Link to="">Central de <br /> Agendamento</Link>
            <Link to="">Resultados de <br /> Exames</Link>
            <Link to="">Procure um <br /> médico</Link>
            <Link to="/triagem">Triagem Rapida</Link>
            <Link to="/contato">Contato</Link>
            <Link to="">Canal de Apoio aos Pais <br /> <p>011 94483-6237</p></Link>
            <Link to="/areamedico">Area do médico</Link>
            
            <div className='buscar'><a href=""><img className='icon' src="/lupa-icon.png"/></a></div>
        </nav>
      </>
  )
}
export default Nav