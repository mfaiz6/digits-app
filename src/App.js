import './App.css';
import Home from './pages/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
