import React, { useState } from 'react';
import '../styles/AreaMedicoStyled.css';

const AreaMedico = () => {
  const [chamados, setChamados] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  const handleChamarClick = async (id) => {
    setChamados(prevState => ({
      ...prevState,
      [id]: true,
    }));

    try {
      const response = await fetch('http://34.57.8.53:1884/acionar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id }) 
      });

      const data = await response.json();
      console.log('Resposta da VM:', data);
    } catch (error) {
      console.error('Erro ao chamar a VM:', error);
    }
  };

  return (
    <>
      <h2>Lista de espera: </h2>
      <div className="container-fila">
        <form className="grave">
          <h3>Nome: Thiago Almeida</h3>
          <p>Idade: 11</p>
          <p>CPF: 572.424.788-30</p>
          <p>sintomas: Dores de cabeça fortes</p>
          <p>Motivo: Suspeita de tumor</p>
          <p>Gravidade: Grave</p>
          <hr />
          <button type='button' className='chamar' onClick={() => handleChamarClick(1)}>
            {chamados[1] ? 'Chamado' : 'Chamar'}
          </button>
          <button>Concluido</button>
        </form>

        <form className="moderada">
          <h3>Nome: Ricardo Neves</h3>
          <p>Idade: 9</p>
          <p>CPF: 512.841.908-33</p>
          <p>sintomas: Dores no peito</p>
          <p>Motivo: N/A</p>
          <p>Gravidade: Moderada</p>
          <hr />
          <button type='button' className='chamar' onClick={() => handleChamarClick(2)}>
            {chamados[2] ? 'Chamado' : 'Chamar'}
          </button>
          <button>Concluido</button>
        </form>

        <form className="leve">
          <h3>Nome: Ana Clara</h3>
          <p>Idade: 10</p>
          <p>CPF: 401.909.575-33</p>
          <p>sintomas: Febre e dor de garganta</p>
          <p>Motivo: Bactéria</p>
          <p>Gravidade: Leve</p>
          <hr />
          <button type='button' className='chamar' onClick={() => handleChamarClick(3)}>
            {chamados[3] ? 'Chamado' : 'Chamar'}
          </button>
          <button>Concluido</button>
        </form>

        <form className="moderada">
          <h3>Nome: Antonio Nunes</h3>
          <p>Idade: 12</p>
          <p>CPF: 512.841.908-33</p>
          <p>sintomas: Machucado na perna</p>
          <p>Motivo: Cão com suspeita de raiva</p>
          <p>Gravidade: Moderada</p>
          <hr />
          <button type='button' className='chamar' onClick={() => handleChamarClick(4)}>
            {chamados[4] ? 'Chamado' : 'Chamar'}
          </button>
          <button>Concluido</button>
        </form>

        <form className="leve">
          <h3>Nome: Lorenzo</h3>
          <p>Idade: 13</p>
          <p>CPF: 542.334.708-50</p>
          <p>sintomas: Dores nas costas</p>
          <p>Motivo: Queda</p>
          <p>Gravidade: Leve</p>
          <hr />
          <button type='button' className='chamar' onClick={() => handleChamarClick(5)}>
            {chamados[5] ? 'Chamado' : 'Chamar'}
          </button>
          <button>Concluido</button>
        </form>

        <form className="leve">
          <h3>Nome: Valentina Chavier</h3>
          <p>Idade: 10</p>
          <p>CPF: 545.278.408-80</p>
          <p>sintomas: Febre forte</p>
          <p>Motivo: N/A</p>
          <p>Gravidade: Leve</p>
          <hr />
          <button type='button' className='chamar' onClick={() => handleChamarClick(6)}>
            {chamados[6] ? 'Chamado' : 'Chamar'}
          </button>
          <button>Concluido</button>
        </form>
      </div>
    </>
  );
};

export default AreaMedico;
