import { Link } from "react-router-dom";
import "./index.css";
import { Loader } from "react-loaders";
import Illustration from "../../assets/images/illustration.png";
import emailjs from '@emailjs/browser'
import Resume from "../../assets/Resume/Yash_Sindhwani.pdf";
import { saveAs } from "file-saver";
import { Button } from "reactstrap"

// const Home = () => {
//   const downloadResume = () => {
//     saveAs({ Resume }, "Resume.pdf");
//     console.log("Resume");
//   };
const Home = () => {
  const downloadResume = () => {
   
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Yash_Sindhwani.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log("Resume download triggered");
  };

 
  const downloadResumeWithFileSaver = async () => {
    try {
    
      const response = await fetch(Resume);
      const blob = await response.blob();
      
  
      saveAs(blob, "Yash_Sindhwani_Resume.pdf");
      console.log("Resume downloaded using file-saver");
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <p className="text">Hello, I'm</p>
          <h1 className="heading">Yash Sindhwani</h1>
          <p className="text">Full Stack Developer </p>
          {/* <p className="text">
            Certified java Developer @Coading Ninjas
          </p> */}
          <div className="btns">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <Button className='resume' onClick={downloadResume}>Download Resume</Button>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img className="right-logo" src={Illustration} alt="logo" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
