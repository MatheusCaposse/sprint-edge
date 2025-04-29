import React from 'react'
import '../styles/ContatoStyled.css'
import{ useState } from 'react';


const Contato = () => {
  return (
    <div>
      <form className='contato'>
        <h3>Contato</h3> <br /><br />
        <p>Email</p> <input className='email' type="email" placeholder='seuemail@aqui.com' required  /> <br /> <br />
        <p>Assunto</p> <input className='assunto' type="text" placeholder='Assunto' required  /> <br /><br />
        <p>Descriçao</p> <textarea className='description' type="text" required  /> <br /> <br />

        <button type="submit">Enviar</button>

      </form>

      <div className='div-banner' ><img className='bannerContato' src="/foto2.png" alt="" /> <img className='bannerContato' src="/foto3.png" alt="" /></div>

      <h2>Horarios de funcionamento</h2>
      
      <p className='sac'>O hospital Sabara possui horario de funcionamento 24h e  Serviço de Atendimento ao Cliente (SAC) do Hospital Sabará funciona de segunda a sexta-feira, 
        das 8h às 18h. O telefone para contato é (11) 3155-2873. </p>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.421891524367!2d-46.6615093!3d-23.5522993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5831b56f76c7%3A0xc1c434e6ae0e8fa8!2sSabará%20Hospital%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1713029381345!5m2!1spt-BR!2sbr"></iframe>

    </div>
  )
}

export default Contato