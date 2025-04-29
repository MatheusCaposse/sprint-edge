import React from 'react'
import '../styles/FooterStyled.css'


const Footer = () => {
  return (
    <>
      <footer>
      <div className="footer-column">
        <h3>Nossos Serviços</h3>
        <ul>
          <li>Alta Complexidade</li>
          <li>Ambulatório de Especialidades</li>
          <li>Apoio Diagnóstico</li>
          <li>Centro Cirúrgico</li>
          <li>Hospital Dia</li>
          <li>Internação</li>
          <li>Pronto-Socorro</li>
          <li>Terapia Intensiva</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Alta Complexidade</h3>
        <ul>
          <li>Aerodigestivo</li>
          <li>Cardiologia</li>
          <li>Nefrologia</li>
          <li>Neurologia</li>
          <li>Oncologia</li>
          <li>Reabilitação Intestinal</li>
          <li>Terapia Fetal e Neonatal</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Institucional</h3>
        <ul>
          <li>Canal LGPD</li>
          <li>Escritório de Inovação</li>
          <li>Fundação JLES</li>
          <li>Imprensa</li>
          <li>Instituto PENSI</li>
          <li>Programa de Compliance</li>
          <li>Programa de Voluntariado</li>
          <li>Quem Somos</li>
          <li>Trabalhe conosco</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Saúde Infantil</h3>
        <ul>
          <li>Doenças de A a Z</li>
          <li>Notícias</li>
          <li>Alimentação Infantil</li>
          <li>Curva de Crescimento</li>
          <li>Cálculo de IMC Infantil</li>
          <li>Calendário de Vacinação</li>
          <li>Calculadora de Jejum</li>
        </ul>
      </div>     
      </footer>
      <div className="footer-bottom">
        <p><img src="/quality.png" className='footer-img' /> Hospital Acreditado pela <br />
          Joint Commission International</p>
        <p>Copyright © 2024 Hospital Infantil Sabará - Todos os direitos reservados</p>
      </div>
    </>
  )
}

export default Footer