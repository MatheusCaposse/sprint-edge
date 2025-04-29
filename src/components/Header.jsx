import React from 'react'
import '../styles/HeaderStyled.css'

const Header = () => {
  return (
    <>
        <header>
            <div className='info'>
                <a href=""><i className="bi bi-telephone-fill"></i> 11 3155-2800 | 11 3235-2800</a>  
                <a href=""><i className="bi bi-headset"></i> SAC</a>  
                <a href=""><i className="bi bi-file-earmark-arrow-down"></i> Cópia de Prontuário do Paciente  </a>
                <a href=""><i className="bi bi-hospital"></i> Planos de Saúde </a> 
            </div>
            
            <div className='redesSociais'>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            
        </header>
    </>
  )
}

export default Header