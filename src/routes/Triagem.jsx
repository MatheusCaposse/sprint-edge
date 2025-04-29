import React, { useState } from 'react';
import '../styles/TriagemStyled.css';

const Triagem = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nascimento: '',
    cpf: '',
    plano: '',
    febre: '',
    vomito: '',
    pressao: '',
    dores: '',
    intensidadeDor: '',
    inicioDor: ''
  });

  const [ficha, setFicha] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFicha(formData);
  };

  return (
    <>
      <h2>Triagem rápida</h2>

      <form className="triagem" onSubmit={handleSubmit}>
        <label htmlFor="nome">* Digite o nome completo do paciente:</label>
        <input type="text" name="nome" placeholder="Nome" required value={formData.nome} onChange={handleChange} /> <br /><br />

        <label htmlFor="nascimento">* Data de nascimento do paciente:</label>
        <input type="date" name="nascimento" required value={formData.nascimento} onChange={handleChange} /><br /><br />

        <label htmlFor="cpf">* Digite o CPF do paciente:</label>
        <input type="text" name="cpf" maxLength="14" placeholder="000.000.000-00" required value={formData.cpf} onChange={handleChange} /><br /><br />

        <label htmlFor="plano">* Selecione seu plano de saúde:</label>
        <select name="plano" required value={formData.plano} onChange={handleChange}>
          <option value="">-- Selecione --</option>
          <option value="Afresp">Afresp</option>
          <option value="Amil">Amil</option>
          <option value="Unimed">Unimed</option>
          <option value="Bradesco">Bradesco</option>
        </select><br /><br />

        <label htmlFor="febre">* Sintomas de febre:</label>
        <select name="febre" required value={formData.febre} onChange={handleChange}>
          <option value="">-- Selecione --</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select><br /><br />

        <label htmlFor="vomito">* Sintomas de vômito:</label>
        <select name="vomito" required value={formData.vomito} onChange={handleChange}>
          <option value="">-- Selecione --</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select><br /><br />

        <label htmlFor="pressao">* Problemas com pressão:</label>
        <select name="pressao" required value={formData.pressao} onChange={handleChange}>
          <option value="">-- Selecione --</option>
          <option value="Não">Não</option>
          <option value="Alta">Pressão Alta</option>
          <option value="Baixa">Pressão Baixa</option>
        </select><br /><br />

        <label htmlFor="dores">* Dores no corpo:</label>
        <select name="dores" required value={formData.dores} onChange={handleChange}>
          <option value="">-- Selecione --</option>
          <option value="Não">Não</option>
          <option value="Cabeça">Cabeça</option>
          <option value="Garganta">Garganta</option>
          <option value="Braço ou mão">Braço ou mão</option>
          <option value="Peito">Peito</option>
          <option value="Costas">Costas</option>
          <option value="Barriga">Barriga</option>
          <option value="Partes Íntimas">Partes Íntimas</option>
          <option value="Perna">Perna</option>
          <option value="Pé">Pé</option>
        </select><br /><br />

        <label htmlFor="intensidadeDor">Intensidade da dor:</label>
        <select name="intensidadeDor" value={formData.intensidadeDor} onChange={handleChange}>
          <option value=""></option>
          <option value="Leve">Leve</option>
          <option value="Moderada">Moderada</option>
          <option value="Forte">Forte</option>
          <option value="Muito forte">Muito forte</option>
        </select><br /><br />

        <label htmlFor="inicioDor">* Data de início dos sintomas:</label>
        <input type="date" name="inicioDor" required value={formData.inicioDor} onChange={handleChange} /><br /><br />

        <button type="submit">Enviar</button>
      </form>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.421891524367!2d-46.6615093!3d-23.5522993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5831b56f76c7%3A0xc1c434e6ae0e8fa8!2sSabará%20Hospital%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1713029381345!5m2!1spt-BR!2sbr"></iframe>

      {ficha && (
        <div className="ficha">
          <h3>Ficha de Triagem</h3>
          <img src="/icon-ficha.png" alt="" />
          <p><strong>Nome:</strong> {ficha.nome}</p>
          <p><strong>Nascimento:</strong> {ficha.nascimento}</p>
          <p><strong>CPF:</strong> {ficha.cpf}</p>
          <p><strong>Plano:</strong> {ficha.plano}</p>
          <p><strong>Febre:</strong> {ficha.febre}</p>
          <p><strong>Vômito:</strong> {ficha.vomito}</p>
          <p><strong>Pressão:</strong> {ficha.pressao}</p>
          <p><strong>Dores:</strong> {ficha.dores}</p>
          <p><strong>Intensidade da dor:</strong> {ficha.intensidadeDor}</p>
          <p><strong>Início dos sintomas:</strong> {ficha.inicioDor}</p> <br />
          <hr/>
          <h3> Escaneie para ver a fila de espera</h3>
          <img src="qr-code.png" alt="" />
          <h3>219</h3>
        </div>
      )}
    </>
  );
};

export default Triagem;
