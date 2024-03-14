import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Help from "./components/help";
import Events from "./components/events";
import Profile from "./components/profile";
import OldMain from './components/Buildings/oldMain.jsx';
import Trivia from "./components/trivia";
import Upload from "./components/upload";
import Reviews from "./components/reviews";
import Alex from "./components/Buildings/Alex";
import Dorms from "./components/Buildings/Dorms";
import Library from './components/Buildings/Library.jsx';
import Music from "./components/Buildings/Music";
import Northwood from "./components/Buildings/Northwood";
import Rapp from "./components/Buildings/Rapp";
import SandE from "./components/Buildings/SandE";
import Sports from "./components/Buildings/Sports";
import Studentcenter from "./components/Buildings/Studentcenter";
import Register from './components/Register';
import Make from './components/make.jsx'
import Jumbo from "./components/jumbo.jsx"
import JumboAlex from './components/jumboAlex.jsx';
import JumboDorms from './components/jumboClarke.jsx';
import JumboLibrary from './components/jumboLibrary.jsx';
import JumboMusic from './components/jumboMusic.jsx';
import JumboNorthwood from './components/jumboNorthwood.jsx';
import JumboOldMain from './components/jumboOldMain.jsx';
import JumboAthletics from './components/jumboAthletics.jsx';
import JumboRapp from './components/jumboRapp.jsx';
import JumboStudentCenter from './components/jumboStudentCenter.jsx';
import JumboSandE from './components/jumboSandE.jsx';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/help' element={<Help />} />

        <Route path='/events' element={<Events />} />
        <Route path='/jumbo' element={<Jumbo />} />
        <Route path='/jumboAlex' element={<JumboAlex />} />
        <Route path='/jumboDorms' element={<JumboDorms />} />
        <Route path='/jumboLibrary' element={<JumboLibrary />} />
        <Route path='/jumboMusic' element={<JumboMusic />} />
        <Route path='/jumboNorthwood' element={<JumboNorthwood />} />
        <Route path='/jumboOldMain' element={<JumboOldMain />} />
        <Route path='/jumboAthletics' element={<JumboAthletics />} />
        <Route path='/jumboRapp' element={<JumboRapp />} />
        <Route path='/jumboStudentCenter' element={<JumboStudentCenter />} />
        <Route path='/jumboSandE' element={<JumboSandE />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/oldmain' element={<OldMain />} />

        <Route path='/trivia' element={<Trivia />} />

        <Route path='/upload' element={<Upload />} />

        <Route path='/reviews' element={<Reviews />} />
        <Route path='/register' element={<Register />} />
        <Route path='/make' element={<Make />} />


        <Route path='/Alex' element={<Alex />} />

        <Route path='/Dorms' element={<Dorms />} />

        <Route path='/Library' element={<Library />} />

        <Route path='/Music' element={<Music />} />

        <Route path='/Northwood' element={<Northwood />} />

        <Route path='/Rapp' element={<Rapp />} />

        <Route path='/SandE' element={<SandE />} />

        <Route path='/Sports' element={<Sports />} />

        <Route path='/Studentcenter' element={<Studentcenter />} />
      </Routes>
    </Router>
  );
};


export default App;