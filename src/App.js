import './App.css';
import FullName from './Profile/FullName';
import ProfilePhoto from './Profile/ProfilePhoto';
import Adress from './Profile/Address'
import Navbar from './Profile/Navbar'
import Footer from './Profile/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <FullName/>
      <br/>
      <ProfilePhoto/>
      <br/>
      <br/>
      <Adress/>
      <Footer/>
    </div>
  );
}

export default App;