import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import More from "./Components/More";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollButton from "./Components/Scroll";
import Team from "./Components/Team";
import Navbar from "./Components/Navbar";
import SubscribeCard from "./Components/Form";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import BlueLine from './Components/Line';
import Half from "./Components/Bg";


function App() {
  const location = useLocation(); // Get the current location
  // Check if the current location matches any of the specified paths
  const isTeamRoute = location.pathname === "/team";
  const isAboutRoute = location.pathname === "/about";
  const isWorkRoute = location.pathname === "/work";
  const isSubscribeCard = location.pathname === "/form";
  const isCard = location.pathname === "/card";

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/team" element={<Team />,<Footer />} /> */}
        <Route path="/team" element={
          <>
        {/* <Navbar /> */}
        <Half />

            <Team />
            <Contact />

            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
        <Navbar />
            <Home />
            <About />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/work" element={
          <>
        <Navbar />

            <Work />
            <Footer />
          </>
        } />
        <Route path="/more" element={
          <>
        <Navbar />

            <More />
            <Footer />
          </>
        } />
        <Route path="/form" element={
          <>
        <Navbar />

            <SubscribeCard />
            <Footer />
          </>
        } />
        <Route path="/card" element={
          <>
        <Navbar />

            <Card />
            <Contact />

            <Footer />
          </>
        } />


        {/* <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/more" element={<More />} />
      <Route path="/form" element={<SubscribeCard />} /> */}

      </Routes>
      {/* Conditionally render components based on the route */}
      {!isTeamRoute && !isAboutRoute && !isWorkRoute && !isSubscribeCard && !isCard && (
         
        <>
        <Hero />
          <Home />
          <About />
          {/* <BlueLine /> */}
          <Work />
          <More />
          <Team />
          <Contact />
          {/* <SubscribeCard /> */}
          <Footer />
          <ScrollButton />
        </>
      )}
    </div>
  );
}

export default App;
