import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Classroom from './component/Classroom/Classroom';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/classroom',element:<Classroom></Classroom>},
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
