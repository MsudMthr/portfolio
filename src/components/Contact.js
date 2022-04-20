import React from "react";

import github from "../asset/icons/github-svgrepo-com.svg";
import instagram from "../asset/icons/instagram-svgrepo-com.svg";
import skype from "../asset/icons/skype-svgrepo-com.svg";
import linkedin from "../asset/icons/linkedin-svgrepo-com.svg";

const Contact = () => {
  return (
    <div className="h-screen bg-slate-100 center">
      <div className="center md:h-1/2 w-1/2 flex-wrap sm:gap-10 md:gap-14 max-w-xl ">
        <a href="https://linkedin.com/in/msudmthr" className="contact">
          <img src={linkedin} alt="linkedin" className="h-10 rounded-lg" />
          <span className="font-bold text-blue-600">linkedin</span>
        </a>
        <a href="https://github.com/MsudMthr" className="contact">
          <img src={github} alt="github" className="h-10 rounded-lg" />
          <span className="font-bold ">github</span>
        </a>
        <a href="https://instagram.com/msud.mthr" className="contact">
          <img src={instagram} alt="instagram" className="h-10 rounded-lg" />
          <span className="font-bold text-pink-700">instagram</span>
        </a>
        <a href="skype:Masoud Motahari" className="contact">
          <img src={skype} alt="skype" className="h-10 rounded-lg" />
          <span className="font-bold text-sky-400">skype</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
