import Navbar from '@components/Navbar/navbar';
import Footer from '@components/Footer/footer';

import vrportalsicon from '@images/projects/vr_portals/portals.png';
import vrportals_overview from '@images/projects/vr_portals/portals_overview.png';
import vrportals_gameplay_example_1 from '@images/projects/vr_portals/gameplay_example_1.png';
import vrportals_gameplay_example_2 from '@images/projects/vr_portals/gameplay_example_2.png';
import tfg_poster from '@images/thumbnails/tfg_poster.png';

const resetVideo = () => {
  document.getElementById("tfg-video").load();
};

const initVideo = () => {
  document.getElementById("tfg-video").volume = 0;
};

const PortalVR = () => {
  return (
    <div id="portal-vr">
      <Navbar />
      <div>
        <div className='container-fluid'>
          <div className='row' data-aos="fade-right" data-aos-duration="1500">
            <div className='col offset-md-2'>
              <img src={vrportalsicon} alt="VR Portals Icon" className='pb-2' width="120" height="105" />
              <a className='big-text ps-3' href='https://github.com/jesusmayor/VRPortalsUnity' target="_blank" rel="noreferrer">
                VR Portals
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col offset-md-2 pt-md-3 pb-100 max-w-70perc'>
              <div data-aos="fade-left" data-aos-duration="1500">
                <span className='normal-text'>
                  This was my final project before graduating as a software engineer. I wanted to explore how <a href='https://en.wikipedia.org/wiki/Non-Euclidean_geometry'
                    target={'#blank'}>non euclidean spaces</a> could be used to take advantage of the space on virtual reality applications.<br /><br />

                  One of the main problems of virtual reality, is the lack of space available by users. When immersed in the virtual world, most people forget
                  about the real enviroment and that can cause crashes that end up damaging the user or the technology they are using. The idea is to simulate
                  non euclidean enviroments using portals in virtual reality that are connected to each other.
                </span>
              </div>
              <div className='container'>
                <div className='row pt-5'>
                  <div className='col flex justify-content-center' data-aos="fade-right" data-aos-duration="1500">
                    <img src={vrportals_overview} alt="VRPortals Overview" className='pb-2' width="410" height="380" />
                  </div>
                </div>
              </div>
              <div className='pt-100' data-aos="fade-down" data-aos-duration="1500">
                <span className='normal-text'>
                  Users would see on portal 1 a reflection of portal's 2 view. This way, even if portals are on ceillings on walls, gravity is changed so that
                  the transition between portals is smooth. Each eye of the VR Headset is transported separately, this way users can peek through portals. With
                  these tools, I made an algorythm that procedurally generates labyrinths depending on the user's available space.<br /><br />

                  The main condition is that the user can't see a portal through another portal. This is to avoid performance issues, since the enviroment is
                  dynamically generated depending on how the player moves, removing sections the user can't see and rendering sections that the user is now
                  able to see.
                </span>
              </div>
              <div id="vr-portals-gameplay" className='row pt-5 ps-90 justify-content-center'>
                <div className='col' data-aos="fade-right" data-aos-duration="1500">
                  <img src={vrportals_gameplay_example_1} alt="VRPortals Gameplay1" className='pb-2 vr-portals-image' width="500" height="350" />
                </div>
                <div className='col' data-aos="fade-left" data-aos-duration="1500">
                  <img src={vrportals_gameplay_example_2} alt="VRPortals Gameplay2" className='pb-2 vr-portals-image' width="500" height="350" />
                </div>
              </div>
              <div className='pt-4' data-aos="fade-left" data-aos-duration="1500">
                <span className='normal-text'>
                  Here you can see a demo where the player experiments impossible 3D enviroments while exploring a procedurally generated maze on a 6x6 m room. If
                  you have virtual reality equipment and want to check it out for yourself, contact me!
                </span>
              </div>
              <div className='row justify-content-center pt-5' data-aos="fade-up" data-aos-duration="1500">
                <video id="tfg-video" className="w-85" controls poster={tfg_poster} width="740" height="580" onEnded={resetVideo} onLoadStart={initVideo}>
                  <source src="https://dl.dropboxusercontent.com/s/wyczrxzyww7fom1/TFG_Video.mp4?raw=1" />
                </video>
              </div>
              <div className='pt-100' data-aos="fade-up" data-aos-duration="1500">
                <span className='normal-text'>
                  Click <a href='https://www.linkedin.com/in/alvaro-lopez-b354321b8/overlay/1635464364542/single-media-viewer/' target="_blank" rel="noreferrer">here </a>
                  to know more about the project. Open source project on <a href='https://github.com/jesusmayor/VRPortalsUnity' target="_blank" rel="noreferrer">Github</a>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PortalVR;
