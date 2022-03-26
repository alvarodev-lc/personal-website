import Navbar from './components/Navbar/navbar'
import ProgressBar from './components/ProgressBar/progressbar';
import './App.css'
import './fontawesome.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProgressBar progress="25"/>
    </div>
  );
}

export default App;
