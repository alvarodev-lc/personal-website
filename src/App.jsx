import Navbar from './components/Navbar/navbar'
import ProgressBar from './components/ProgressBar/progressbar';
import './App.min.css';
import './static/css/fontawesome/fontawesome.min.css'
import './static/css/bootstrap/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
          <ProgressBar progress="25"/>
          <ProgressBar progress="70"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
