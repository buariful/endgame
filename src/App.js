import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Todo from './Pages/Todo/Todo';
import Complete from './Pages/Complete/Complete';
import Notfound from './Shared/Notfound';
import Shared from './Shared/Shared';
import Footer from './Shared/Footer';
import Calendar from './Pages/Calendar';

function App() {
  return (
    <div className="App">
      <Shared></Shared>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/complete-task' element={<Complete></Complete>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
