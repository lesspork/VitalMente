import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./historico.css";

const brainLogo =
  "https://www.nicepng.com/png/full/473-4738733_brain-icons-simple-brain-line-drawing.png";

const menuItems = [
  {
    icon: "",
    label: "Página Inicial",
  },
  {
    icon: "",
    label: "Explorar",
  },
  {
    icon: "",
    label: "Notificações",
  },
  {
    icon: "",
    label: "Histórico",
    active: true,
  },
  {
    icon: "",
    label: "Perfil",
  },
  {
    icon: "",
    label: "Mais",
  },
];

function App() {
  const navigate = useNavigate();

  /* =================================
     ESTADOS
  ================================= */

  const [showCreatePost, setShowCreatePost] = useState(false);

  const [postText, setPostText] = useState("");

  const [selectedFeeling, setSelectedFeeling] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  /* =================================
     ESTADOS DAS TRENDS
  ================================= */

  const [selectedTrend, setSelectedTrend] = useState(null);

  const [trendMenuPosition, setTrendMenuPosition] = useState({
    top: 0,
    left: 0,
  });

  /* =================================
     CLIQUE NO MENU
  ================================= */

  function handleMenuClick(label) {
    if (label === "Página Inicial") {
      navigate("/home");
      return;
    }

    if (label === "Explorar") {
      navigate("/explorar");
      return;
    }

    if (label === "Notificações") {
      navigate("/notificacoes");
      return;
    }

    if (label === "Histórico") {
      navigate("/historico");
      return;
    }

    if (label === "Perfil") {
      navigate("/editar-conta");
      return;
    }

    if (label === "Mais") {
      return;
    }
  }

  /* =================================
     ABRIR MODAL
  ================================= */

  function openCreatePost() {
    setShowCreatePost(true);
  }

  /* =================================
     FECHAR MODAL
  ================================= */

  function closeCreatePost() {
    setShowCreatePost(false);
  }

  /* =================================
     PUBLICAR
  ================================= */

  function handlePublish() {
    if (!postText.trim()) {
      return;
    }

    console.log("Publicação:", {
      text: postText,
      feeling: selectedFeeling,
      category: selectedCategory,
    });

    setPostText("");
    setSelectedFeeling("");
    setSelectedCategory("");

    closeCreatePost();
  }

  /* =================================
     ABRIR MENU DA TREND
  ================================= */

  function handleTrendClick(event, title) {
    const rect = event.currentTarget.getBoundingClientRect();

    const menuWidth = 310;
    const menuHeight = 390;

    let left = rect.right - menuWidth;
    let top = rect.bottom + 8;

    /*
      Impede o menu de sair
      pela esquerda
    */
    if (left < 10) {
      left = 10;
    }

    /*
      Impede o menu de sair
      pela direita
    */
    if (left + menuWidth > window.innerWidth - 10) {
      left = window.innerWidth - menuWidth - 10;
    }

    /*
      Se não houver espaço
      suficiente embaixo,
      abre para cima
    */
    if (top + menuHeight > window.innerHeight - 10) {
      top = rect.top - menuHeight - 8;
    }

    /*
      Impede o menu de sair
      pela parte superior
    */
    if (top < 10) {
      top = 10;
    }

    setTrendMenuPosition({
      top,
      left,
    });

    setSelectedTrend(title);
  }

  /* =================================
     FECHAR MENU DA TREND
  ================================= */

  function closeTrendMenu() {
    setSelectedTrend(null);
  }

  /* =================================
     CLIQUE EM OPÇÃO DA TREND
  ================================= */

  function handleTrendOption(option) {
    console.log("Trend:", selectedTrend);
    console.log("Opção selecionada:", option);

    setSelectedTrend(null);
  }

  return (
    <div className="app">

      {/* =================================
          SIDEBAR ESQUERDA
      ================================= */}

      <aside className="sidebar">

        <div className="sidebar-inner">

          {/* LOGO */}

          <div className="brand">

            <div className="brand-logo">

              <img
                src={brainLogo}
                alt="VitalMente"
              />

            </div>

            <span className="brand-name">
              VitalMente
            </span>

          </div>


          {/* MENU */}

          <nav className="menu">

            {menuItems.map((item) => (

              <button
                key={item.label}
                type="button"
                className={`menu-item ${
                  item.active ? "active" : ""
                }`}
                onClick={() =>
                  handleMenuClick(item.label)
                }
              >

                <span className="menu-icon">

                  {item.icon}

                  {item.label === "Notificações" && (
                    <span className="notification-badge">
                      1
                    </span>
                  )}

                </span>

                <span className="menu-label">
                  {item.label}
                </span>

              </button>

            ))}

          </nav>


          {/* CRIAR PUBLICAÇÃO */}

          <button
            type="button"
            className="create-button"
            onClick={openCreatePost}
          >

            <span>
              +
            </span>

            <strong>
              Criar publicação
            </strong>

          </button>


          {/* PERFIL */}

          <div className="sidebar-bottom">

            <div className="profile-area">

              <div className="profile-avatar">
                R
              </div>

              <div className="profile-info">

                <strong>
                  raffa
                </strong>

                <span>
                  @rafaelciros
                </span>

              </div>

              <button
                type="button"
                className="profile-more"
                onClick={() =>
                  navigate("/editar-conta")
                }
                aria-label="Abrir perfil"
              >

              </button>

            </div>

          </div>

        </div>

      </aside>


      {/* =================================
          CONTEÚDO CENTRAL
      ================================= */}

      <main className="main">

        {/* =================================
            HEADER COM BUSCA CENTRAL
        ================================= */}

        <header className="main-header">

          <div className="main-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Buscar no VitalMente"
            />

            <kbd>
              /
            </kbd>

          </div>


          <button
            type="button"
            className="mobile-more"
          >
            •••
          </button>

        </header>


        {/* =================================
            FEED
        ================================= */}

        <section className="empty-feed">

          <div className="empty-logo">

            <img
              src={brainLogo}
              alt="Brain"
            />

          </div>

          <span className="empty-label">
           HISTÓRICO
          </span>

          <h1>
            Nada no seu histórico.
          </h1>

          <p>
          Aqui aparecerão os conteúdos que
          você visualizar e as atividades
          realizadas no VitalMente.
          </p>

        </section>

      </main>


      {/* =================================
          SIDEBAR DIREITA
      ================================= */}

      <aside className="right-sidebar">

        <div className="right-inner">

          {/* =================================
              ASSUNTOS
          ================================= */}

          <section className="right-card">

            <div className="card-header">

              <h2>
                O que está acontecendo
              </h2>

            </div>


            <Trend
              category="Médicos · Assuntos do Momento"
              title="Drauzio Varella"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Alimentação · Assunto do Momento"
              title="Alimentação saudável"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Fisiculturismo · Assunto do Momento"
              title="Mr. Olympia 2026"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Saúde Mental · Assunto do Momento"
              title="Saúde mental"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Bem-estar · Assunto do Momento"
              title="Qualidade do sono"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Prevenção · Assunto do Momento"
              title="Prevenção de doenças"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Cardiologia · Assunto do Momento"
              title="Saúde do coração"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Exercícios · Assunto do Momento"
              title="Atividade física"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Vacinação · Assunto do Momento"
              title="Vacinas e prevenção"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Nutrição · Assunto do Momento"
              title="Alimentação e nutrição"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Neurologia · Assunto do Momento"
              title="Saúde do cérebro"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Tecnologia · Assunto do Momento"
              title="Tecnologia na saúde"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Medicina · Assunto do Momento"
              title="Prevenção e diagnóstico"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

            <Trend
              category="Bem-estar · Assunto do Momento"
              title="Hábitos saudáveis"
              posts="0 publicações"
              onClick={handleTrendClick}
            />

          </section>


          {/* =================================
              FOOTER
          ================================= */}

          <footer className="footer">

            <span>
              Termos
            </span>

            <span>
              Privacidade
            </span>

            <span>
              Cookies
            </span>

            <span>
              Acessibilidade
            </span>

            <span>
              Sobre
            </span>

            <div className="copyright">
              © 2026 VitalMente
            </div>

          </footer>

        </div>

      </aside>


      {/* =================================================
          MODAL - NOVA PUBLICAÇÃO
      ================================================= */}

      {showCreatePost && (

        <div
          className="create-post-overlay"
          onClick={closeCreatePost}
        >

          <div
            className="create-post-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* =================================
                CABEÇALHO
            ================================= */}

            <div className="create-post-header">

              <div className="create-post-title-area">

                <img
                  src={brainLogo}
                  alt="VitalMente"
                  className="create-post-logo"
                />

                <div>

                  <h2>
                    Nova publicação
                  </h2>

                  <p>
                    Compartilhe algo com a comunidade
                  </p>

                </div>

              </div>


              <button
                type="button"
                className="close-create-post"
                onClick={closeCreatePost}
                aria-label="Fechar"
              >
                ×
              </button>

            </div>


            {/* =================================
                USUÁRIO
            ================================= */}

            <div className="create-post-user">

              <div className="create-post-avatar">
                R
              </div>

              <div className="create-post-user-info">

                <strong>
                  raffa
                </strong>

                <span>
                  @rafaelciros
                </span>

              </div>

            </div>


            {/* =================================
                ÁREA DE TEXTO
            ================================= */}

            <div className="create-post-text-area">

              <textarea
                value={postText}
                onChange={(event) =>
                  setPostText(event.target.value)
                }
                maxLength={280}
                placeholder="Compartilhe seus pensamentos, experiências ou dicas sobre saúde e bem-estar..."
                autoFocus
              />

              <div className="character-counter">
                {postText.length}/280
              </div>

            </div>


            {/* =================================
                COMO VOCÊ ESTÁ?
            ================================= */}

            <div className="feeling-section">

              <div className="section-label">
                Como você está se sentindo?
              </div>

              <div className="feeling-options">

                <button
                  type="button"
                  className={
                    selectedFeeling === "Bem"
                      ? "feeling-option selected"
                      : "feeling-option"
                  }
                  onClick={() =>
                    setSelectedFeeling("Bem")
                  }
                >
                  Bem
                </button>

                <button
                  type="button"
                  className={
                    selectedFeeling === "Tranquilo"
                      ? "feeling-option selected"
                      : "feeling-option"
                  }
                  onClick={() =>
                    setSelectedFeeling("Tranquilo")
                  }
                >
                  Tranquilo
                </button>

                <button
                  type="button"
                  className={
                    selectedFeeling === "Ansioso"
                      ? "feeling-option selected"
                      : "feeling-option"
                  }
                  onClick={() =>
                    setSelectedFeeling("Ansioso")
                  }
                >
                  Ansioso
                </button>

                <button
                  type="button"
                  className={
                    selectedFeeling === "Cansado"
                      ? "feeling-option selected"
                      : "feeling-option"
                  }
                  onClick={() =>
                    setSelectedFeeling("Cansado")
                  }
                >
                  Cansado
                </button>

                <button
                  type="button"
                  className={
                    selectedFeeling === "Motivado"
                      ? "feeling-option selected"
                      : "feeling-option"
                  }
                  onClick={() =>
                    setSelectedFeeling("Motivado")
                  }
                >
                  Motivado
                </button>

              </div>

            </div>


            {/* =================================
                CATEGORIA
            ================================= */}

            <div className="category-section">

              <div className="section-label">
                Categoria
              </div>

              <div className="category-options">

                <button
                  type="button"
                  className={
                    selectedCategory === "Saúde mental"
                      ? "category-option selected"
                      : "category-option"
                  }
                  onClick={() =>
                    setSelectedCategory("Saúde mental")
                  }
                >
                  Saúde mental
                </button>

                <button
                  type="button"
                  className={
                    selectedCategory === "Exercícios"
                      ? "category-option selected"
                      : "category-option"
                  }
                  onClick={() =>
                    setSelectedCategory("Exercícios")
                  }
                >
                  Exercícios
                </button>

                <button
                  type="button"
                  className={
                    selectedCategory === "Nutrição"
                      ? "category-option selected"
                      : "category-option"
                  }
                  onClick={() =>
                    setSelectedCategory("Nutrição")
                  }
                >
                  Nutrição
                </button>

                <button
                  type="button"
                  className={
                    selectedCategory === "Sono"
                      ? "category-option selected"
                      : "category-option"
                  }
                  onClick={() =>
                    setSelectedCategory("Sono")
                  }
                >
                  Sono
                </button>

                <button
                  type="button"
                  className={
                    selectedCategory === "Bem-estar"
                      ? "category-option selected"
                      : "category-option"
                  }
                  onClick={() =>
                    setSelectedCategory("Bem-estar")
                  }
                >
                  Bem-estar
                </button>

              </div>

            </div>


            {/* =================================
                ADICIONAR IMAGEM
            ================================= */}

            <button
              type="button"
              className="add-image-button"
            >
              Adicionar imagem
            </button>


            {/* =================================
                RODAPÉ
            ================================= */}

            <div className="create-post-footer">

              <div className="visibility">

                <span className="visibility-title">
                  Visibilidade
                </span>

                <span className="visibility-value">
                  Público
                </span>

              </div>


              <button
                type="button"
                className="publish-button"
                disabled={!postText.trim()}
                onClick={handlePublish}
              >
                Publicar
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =================================================
          MENU DE OPÇÕES DA TREND
      ================================================= */}

      {selectedTrend && (

        <>

          {/* Fundo invisível para fechar */}

          <div
            className="trend-menu-backdrop"
            onClick={closeTrendMenu}
          />


          {/* MENU */}

          <div
            className="trend-options-menu"
            style={{
              top: `${trendMenuPosition.top}px`,
              left: `${trendMenuPosition.left}px`,
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              onClick={() =>
                handleTrendOption(
                  "O conteúdo associado não é relevante"
                )
              }
            >
              <span>
                O conteúdo associado não é relevante
              </span>
            </button>


            <button
              type="button"
              onClick={() =>
                handleTrendOption(
                  "Este assunto é spam"
                )
              }
            >
              <span>
                Este assunto é spam
              </span>
            </button>


            <button
              type="button"
              onClick={() =>
                handleTrendOption(
                  "Este assunto é abusivo ou nocivo"
                )
              }
            >
              <span>
                Este assunto é abusivo ou nocivo
              </span>
            </button>


            <button
              type="button"
              onClick={() =>
                handleTrendOption(
                  "Não me interessa"
                )
              }
            >
              <span>
                Não me interessa
              </span>
            </button>


            <button
              type="button"
              onClick={() =>
                handleTrendOption(
                  "Este assunto é uma duplicação"
                )
              }
            >
              <span>
                Este assunto é uma duplicação
              </span>
            </button>


            <button
              type="button"
              onClick={() =>
                handleTrendOption(
                  "Este assunto é prejudicial ou spam"
                )
              }
            >
              <span>
                Este assunto é prejudicial ou spam
              </span>
            </button>


            <button
              type="button"
              onClick={() =>
                handleTrendOption(
                  "Não quero ver este anúncio"
                )
              }
            >
              <span>
                Não quero ver este anúncio
              </span>
            </button>

          </div>

        </>

      )}

    </div>
  );
}


/* =================================
   TREND
================================= */

function Trend({
  category,
  title,
  posts,
  onClick,
}) {

  function handleClick(event) {
    onClick(event, title);
  }

  return (
    <div
      className="trend"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();

          onClick(event, title);
        }

      }}
    >

      <div className="trend-info">

        <span className="trend-category">
          {category}
        </span>

        <strong>
          {title}
        </strong>

        <span className="trend-posts">
          {posts}
        </span>

      </div>


      <button
        type="button"
        className="trend-more"
        onClick={(event) => {

          event.stopPropagation();

          onClick(event, title);

        }}
        aria-label={`Mais opções sobre ${title}`}
      >
        •••
      </button>

    </div>
  );
}


export default App;