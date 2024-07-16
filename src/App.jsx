import { Component, useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import InputLink from "./components/dummy/InputLink";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      
      <div className="pt-5 lg:pt-[5.25rem] overflow-hidden">
       <Header />
       <Hero />
       <InputLink />  
       <Footer/>
      </div>
      
       
      <ButtonGradient/>
    </div>
  );
};

export default App;

