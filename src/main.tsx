import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage.tsx';
import { FormularioPage } from './pages/FormularioPage.tsx';
import { DashBoardPage } from './pages/DashBoardPage.tsx';
import '@govbr-ds/core/dist/core.min.css';
import {App} from './App.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/', 
        element: <FormularioPage />,
      },
      {
        path: '/dashboard',
        element: <DashBoardPage />,
      },
    ],
  },
  {
    path: '/login', 
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
