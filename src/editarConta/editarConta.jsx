import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./editarConta.css";

function EditarConta() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("Seu nome");
  const [email, setEmail] = useState("seuemail@email.com");
  const [telefone, setTelefone] = useState("(00) 00000-0000");

  const [salvando, setSalvando] = useState(false);

  function handleSalvar() {
    setSalvando(true);

    setTimeout(() => {
      setSalvando(false);
    }, 800);
  }

  function handleVoltar() {
    navigate("/home");
  }

  return (
    <div className="account-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="account-header">

        <button
          type="button"
          className="back-button"
          onClick={handleVoltar}
          aria-label="Voltar"
        >
          ←
        </button>

        <div className="header-content">

          <span className="account-eyebrow">
            CONFIGURAÇÕES
          </span>

          <h1>
            Editar conta
          </h1>

          <p>
            Atualize suas informações pessoais e mantenha
            sua conta sempre atualizada.
          </p>

        </div>

      </header>


      {/* =========================================
          CONTEÚDO
      ========================================= */}

      <main className="account-content">

        {/* =========================================
            PERFIL
        ========================================= */}

        <section className="profile-card">

          <div className="profile-avatar-large">
            R
          </div>

          <div className="profile-details">

            <h2>
              Seu nome
            </h2>

            <p>
              Informações da sua conta
            </p>

            <button
              type="button"
              className="change-photo-button"
            >
              Alterar foto
            </button>

          </div>

        </section>


        {/* =========================================
            INFORMAÇÕES PESSOAIS
        ========================================= */}

        <section className="settings-card">

          <div className="section-heading">

            <span className="section-number">
              01
            </span>

            <div>

              <h2>
                Informações pessoais
              </h2>

              <p>
                Essas informações serão utilizadas para
                identificar sua conta.
              </p>

            </div>

          </div>


          <div className="form-grid">

            {/* NOME */}

            <div className="form-group">

              <label htmlFor="nome">
                Nome completo
              </label>

              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) =>
                  setNome(e.target.value)
                }
                placeholder="Digite seu nome"
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                E-mail
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="seuemail@email.com"
              />

            </div>


            {/* TELEFONE */}

            <div className="form-group">

              <label htmlFor="telefone">
                Telefone
              </label>

              <input
                id="telefone"
                type="tel"
                value={telefone}
                onChange={(e) =>
                  setTelefone(e.target.value)
                }
                placeholder="(00) 00000-0000"
              />

            </div>

          </div>

        </section>


        {/* =========================================
            SENHA
        ========================================= */}

        <section className="settings-card">

          <div className="section-heading">

            <span className="section-number">
              02
            </span>

            <div>

              <h2>
                Senha
              </h2>

              <p>
                Altere sua senha para manter sua conta segura.
              </p>

            </div>

          </div>

          <button
            type="button"
            className="secondary-button"
          >
            Alterar senha
          </button>

        </section>


        {/* =========================================
            AÇÕES
        ========================================= */}

        <section className="actions-card">

          <button
            type="button"
            className="cancel-button"
            onClick={handleVoltar}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="save-button"
            onClick={handleSalvar}
          >
            {salvando ? "Salvando..." : "Salvar alterações"}
          </button>

        </section>


        {/* =========================================
            SAIR
        ========================================= */}

        <section className="logout-card">

          <div>

            <h2>
              Sair da conta
            </h2>

            <p>
              Encerre sua sessão neste dispositivo.
            </p>

          </div>

          <button
            type="button"
            className="logout-button"
            onClick={() => navigate("/")}
          >
            Sair
          </button>

        </section>

      </main>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="account-footer">

        <strong>
          VitalMente
        </strong>

        <span>
          •
        </span>

        <span>
          Sua saúde começa pela sua mente.
        </span>

      </footer>

    </div>
  );
}

export default EditarConta;