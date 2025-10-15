import { BrButton } from '@govbr-ds/webcomponents-react';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
    const navigate = useNavigate();

    function handleLogin() {
    
    navigate('/');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BrButton emphasis="primary" density="large" onClick={handleLogin}>
        Entrar com Gov.br
      </BrButton>
    </div>
  )
}

