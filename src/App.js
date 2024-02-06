import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Login from './login';
import { useSetValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useSetValue();

  return (
    <div className="app">
      {!user?
      (<Login/>):(
        <div className='app__body'>
        <Router>
          <Sidebar/>
          <Routes>
             <Route path='/rooms/:roomId' element={<Chat/>}> </Route>
             <Route path='/' element={<Chat/>}> </Route>
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}
export default App;
