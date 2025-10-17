// src/components/Header.tsx

export function Header() {
  return (
    <>
      <header className="br-header" id="header">
        <div className="container-lg">

          {/* BARRA SUPERIOR (GOV.BR) */}
          <div className="header-top">
            <div className="header-logo">
              <a href="https://www.gov.br" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.ds.gov.br/assets/img/logo.svg" alt="logo gov.br" />
              </a>
              <span className="br-divider vertical mx-1"></span>
              <div className="header-sign">Ministério da Fazenda</div>
            </div>
            
            <div className="header-actions">
              <div className="header-links">

                <a className="br-button" href="#">Órgãos do Governo</a>
                <a className="br-button" href="#">Acesso à Informação</a>
                <a className="br-button" href="#">Legislação</a>
                <a className="br-button" href="#">Acessibilidade</a>
              </div>
              <div className="header-login">
                {/* O botão de sign-in */}
                <a href="/login" className="br-button primary sign-in small">
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <span> Entrar com gov.br</span>
                </a>
              </div>
            </div>
          </div>

          {/* BARRA INFERIOR (ÓRGÃO/SERVIÇO) */}
          <div className="header-bottom">
            <div className="header-menu">
              <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation">
                <i className="fas fa-bars"></i>
              </button>
              <div className="header-info">
                <a className="header-title" href="/">Receita Federal</a>
              </div>
            </div>
            <div className="header-search">
              <div className="br-input has-icon">
                <input id="search-input" type="text" placeholder="O que você procura?" />
                <button className="br-button circle" type="submit" aria-label="Pesquisar">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* GAVETA DO MENU */}
      <nav className="br-menu" id="main-navigation">
      </nav>
    </>
  );
}