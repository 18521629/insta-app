import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Explore from "../Explore/Explore";
import NoMatch from "../../Pages/404Page/404Page";
import NewHome from "../NewHome/NewHome";
import BraceletPage from "../BraceletPage/BraceletPage";
import NecklacesPage from "../NecklacesPage/NecklacesPage"
import RingPage from "../RingPage/RingPage"
import ForMenPage from "../ForMenPage/ForMenPage"
const Home = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/bra" component={BraceletPage}/>
        <Route path="/neck" component={NecklacesPage}/>
        <Route path="/ring" component={RingPage}/>
        <Route path="/men" component={ForMenPage}/>
      </Switch>
    </div>
  );
};

export default Home;
