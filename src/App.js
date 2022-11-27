import './App.css';
import AllProdects from './components/AllProdects';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import AddNewProdect from './components/AddNewProdect';
import Erorr from './components/Erorr';
import UpData from './components/UpData';
import AllCatigory from './components/AllCatigory';

function App() {
  return (
    <div className="App h-screen ">
      <div className=' flex w-full '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AllProdects' element={<AllProdects />} />
          <Route path='/AllCatigory' element={<AllCatigory/>} />
          <Route path='/AddNewProdect' element={<AddNewProdect />} />
          <Route path='/Erorr' element={<Erorr />} />
          <Route path='/UpData' element={<UpData/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
