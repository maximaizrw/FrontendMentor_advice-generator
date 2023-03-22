import React, { useState, useEffect } from "react";
import DividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import DividerMobile from "../assets/images/pattern-divider-mobile.svg";
import IconDice from "../assets/images/icon-dice.svg";
import { useMediaQuery } from "react-responsive";

function RandomAdvice() {
  const [advice, setAdvice] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.log(error));
  }

  const handleClick = () => {
    fetchAdvice();
  }

  return (
    <div className="bg-neutral-darkGrayishBlue flex flex-col items-center justify-center gap-y-4 px-8 pt-8 pb-12 w-[400px] rounded-xl relative">
      <p className="text-primary-neonGreen text-xs tracking-[0.3em]">
        ADVICE #{advice.id}
      </p>
      <p className="text-primary-lightCyan text-lg text-center">
        "{advice.advice}"
      </p>

      {isMobile ? (
        <img src={DividerMobile} alt="divider" />
      ) : (
        <img src={DividerDesktop} alt="divider" />
      )}
      <button onClick={handleClick} className="bg-primary-neonGreen rounded-full p-4 absolute -bottom-6 hover:shadow-[0px_0px_20px_0.5px] hover:shadow-primary-neonGreen">
        <img src={IconDice} alt="Icono dado" />
      </button>
    </div>
  );
}

export default RandomAdvice;
