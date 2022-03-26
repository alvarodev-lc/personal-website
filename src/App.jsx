import Navbar from './components/Navbar/navbar'
import ProgressBar from './components/ProgressBar/progressbar';
import './App.min.css';
import './static/css/fontawesome/fontawesome.min.css'
import './static/css/bootstrap/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container-sm'>
        <ProgressBar progress="25"/>
        <ProgressBar progress="70"/>
      </div>
    </div>
  );
}

export default App;
