import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/thepeacedude", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
      SummarAiZ Websites <br className="max-md:hidden" />
        <span className="orange_gradient">With OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
      SummarAiZR, is an open-source GPT-4 AI article SummarAiZR that 
       transforms lengthy articles into clear and concise summaries
        <br />  
        Created by Gregory Kennedy. Thanks @jsmasterypro
      </h2>
    </header>
  );
};

export default Hero;