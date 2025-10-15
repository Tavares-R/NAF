import { Outlet } from 'react-router-dom';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./App.css"


export function App() {
  return (
    <div className='app-container'>
      <Header></Header>
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
    
  )
}



