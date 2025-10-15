export function Header() {
  return (
    <header className="br-header">
      <div className="container-lg">
        <div className="header-top">
          <div className="header-logo">
            <img 
              src="https://barra.sistema.gov.br/v1/assets/govbr.webp" 
              alt="Logo NAF"
              style={{ maxHeight: '40px' }}
            />
            <span className="br-divider vertical mx-half mx-sm-1"></span>
            <div className="header-title-group">
              <div className="header-title">Receita Federal</div>
              <div className="header-subtitle">Núcleo de Apoio Contábil e Fiscal (NAF)</div>
            </div>
          </div>
          
          <div className="header-actions">
            <div className="header-login">
              <a href="/login" className="br-sign-in">
                <i className="fas fa-user"></i>
                <span className='ml-2'>Entrar com Gov.br</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}

