import './App.css';
import Nav from 'react-bootstrap/Nav';
import Frames from './components/Frames/Frames.js'
import DateTime from './components/DateTime/DateTime.js'
import NameHeader from './components/NameHeader/NameHeader.js'
import BatteryLinks from './components/BatteryLinks/BatteryLinks.js'
import Footer from './components/Footer/Footer.js'
import ContentSec from './components/ContentSec/ContentSec.js'

export default function App() {
  return (
    <main>
      <Frames />
      <Nav className="navbar bg-transparent fixed-top">
        <NameHeader />
        <BatteryLinks />
      </Nav>
      <ContentSec />
      <DateTime />
      <Footer>
      </Footer>
    </main>
  );
}