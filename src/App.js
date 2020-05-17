import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Team from "./components/Team";
import List from "./components/List";
import Books from "./components/Books";
import AdvisoryBoard from "./components/AdvisoryBoard";
import Webinar from "./components/webinar";
import Internship from "./components/Internship";
import Award from "./components/Awards";
import Initiatives from "./components/Initiatives";
import SpecialLectures from "./components/SpecialLectures";
import Workshop from "./components/Workshop";
import Seminar from "./components/Seminar";
import OtherMembers from "./components/OtherMembers";
import Commitee from "./components/Commitee";
import Institute from "./components/Institute";
import Reports from "./components/Reports";
import Chapter from "./components/Chapter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/Team" exact component={Team} />
          <Route path="/Journals" exact component={List} />
          <Route path="/Books" exact component={Books} />
          <Route path="/AdvisoryBoard" exact component={AdvisoryBoard} />
          <Route path="/Webinar" exact component={Webinar} />
          <Route path="/Internship" exact component={Internship} />
          <Route path="/Award" exact component={Award} />
          <Route path="/Initiatives" exact component={Initiatives} />
          <Route path="/SpecialLectures" exact component={SpecialLectures} />
          <Route path="/Workshop" exact component={Workshop} />
          <Route path="/Seminar" exact component={Seminar} />
          <Route path="/OtherMembers" exact component={OtherMembers} />
          <Route path="/Commitee" exact component={Commitee} />
          <Route path="/Institute" exact component={Institute} />
          <Route path="/Reports" exact component={Reports} />
          <Route path="/Chapter" exact component={Chapter} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
