import logo from './logo.svg';
import './App.css';
// import Navbar from './component/navbar/Navbar';
import HeaderSection from './pages/headerSection/HeaderSection';
import FirstSection from './pages/firstSection/FirstSection';
import SecondSection from './pages/secondSection/SecondSection';
import ThiredSection from './pages/thiredSection/ThiredSection';
import FourthSection from './pages/fourthSection/FourthSection';
import FifthSection from './pages/fifthSection/FifthSection';
import SixthSection from './pages/sixthSection/SixthSection';
import SeventhSection from './pages/sevnthSection/SeventhSection';
import SecondLastSection from './pages/secondLastSection/SecondLastSection';
import LastSection from './pages/lastSection/LastSection';
import FooterSection from './component/footerSection/FooterSection';


function App() {
  return (
    <div >
    {/* <Navbar/> */}
 
 <HeaderSection/>
<FirstSection/>
 <SecondSection/>
 <ThiredSection/>
  <FourthSection/>
 <FifthSection/>
 <SixthSection/>
 <SeventhSection/>
 <SecondLastSection/>
 <LastSection/>
 <FooterSection/> 
 
    </div>
  );
}

export default App;
