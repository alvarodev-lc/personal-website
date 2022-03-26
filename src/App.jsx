import Navbar from './components/Navbar/navbar'
import ProgressBar from './components/ProgressBar/progressbar';

import './App.min.css';
import './static/css/fontawesome/fontawesome.min.css'
import './static/css/bootstrap/bootstrap.min.css'

import pyicon from './static/images/python.png'
import jsicon from './static/images/js.png'
import javaicon from './static/images/java.png'
import htmlicon from './static/images/html.png'
import cssicon from './static/images/css.png'
import othersicon from './static/images/others.png'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* Technicall Skills card*/}
      <div className='container-fluid'>
        <div className='row justify-content-md-center'>
          <div className="col-3 card min-width-300">
            <div className="card-header">
              Programming languages
            </div>
            <div className="card-body">
              {/*Python*/}
              <div className='mb-3'>
                <img src={pyicon} alt="Python Icon" width="25" height="25"/>
                <span className="card-title">Python</span>
                <ProgressBar progress="80" background="linear-gradient(135deg, rgba(219,236,45,1) 10%, rgba(27,138,171,1) 77%)"/>
              </div>

              {/*HTML*/}
              <div className='mb-3'>
                <img src={htmlicon} alt="Html Icon" width="25" height="25"/>
                <span className="card-title">HTML</span>
                <ProgressBar progress="75" background="linear-gradient(135deg, rgba(255,162,0,1) 24%, rgba(255,255,255,1) 77%)"/>
              </div>

              {/*JavaScript*/}
              <div className='mb-3'>
                <img src={jsicon} alt="Js Icon" width="25" height="25"/>
                <span className="card-title">JavaScript</span>
                <ProgressBar progress="55" background="linear-gradient(135deg, rgba(249,255,0,1) 10%, rgba(255,255,255,1) 77%)"/>
              </div>

              {/*CSS*/}
              <div className='mb-3'>
                <img src={cssicon} alt="Css Icon" width="25" height="25"/>
                <span className="card-title">CSS</span>
                <ProgressBar progress="65" background="linear-gradient(135deg, rgba(0,206,255,1) 14%, rgba(255,255,255,1) 77%)"/>
              </div>

              {/*Java*/}
              <div className='mb-3'>
                <img src={javaicon} alt="Java Icon" width="25" height="25"/>
                <span className="card-title">Java</span>
                <ProgressBar progress="60" background="linear-gradient(135deg, rgba(255,162,0,1) 30%, rgba(255,64,0,1) 77%)"/>
              </div>

              {/* Others*/}
              <div className='mb-3'>
                <img src={othersicon} alt="C Icon" width="25" height="25"/>
                <span className="card-title">C, C++, C#</span>
                <ProgressBar progress="40" background="linear-gradient(135deg, rgba(167,115,9,1) 30%, rgba(199,185,157,1) 66%)"/>
              </div>
            </div>
          </div>
          <div className="col-3 card min-width-300 ms-5">
                <div className="card-header">
                  Technology and Framework knowledge
                </div>
              <div className="card-body">

              </div>
              </div>
        </div>
      </div>
      {/* For next card: PostgreSQL, MySQL, Git, Django, React, Docker*/}
    </div>
  );
}

export default App;
