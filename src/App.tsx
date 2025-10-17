import { Outlet } from 'react-router-dom';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./App.css"; 

export function App() {
  return (
    <div className='app-container'>
      <Header />
      
    <main className='main-content'>
      <div className="container-lg pt-5 pb-5">
        <div className="br-grid">
        <div className="br-col-lg-1"></div>
        <div className="br-col-lg-10">
          <Outlet />
        </div>         
        <div className="br-col-lg-1"></div>
        </div>
      </div>
    </main>

      <Footer />
    </div>
  );
}


