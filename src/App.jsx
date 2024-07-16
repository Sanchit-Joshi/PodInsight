import { Component, useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Hero from "./components/Hero";


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      
      <div className="pt-5 lg:pt-[5.25rem] overflow-hidden">
       <Header />
       <Hero />
       {/* <Input /> */}
      </div>
      
      
      <ButtonGradient/>
    </div>
  );
};

export default App;

