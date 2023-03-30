import './App.css';
import Home from './pages/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register/Register';

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
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
