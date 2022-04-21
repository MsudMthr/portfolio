import React from "react";

import github from "../asset/icons/github-svgrepo-com.svg";
import instagram from "../asset/icons/instagram-svgrepo-com.svg";
import skype from "../asset/icons/skype-svgrepo-com.svg";
import linkedin from "../asset/icons/linkedin-svgrepo-com.svg";

const Contact = () => {
  return (
    <div className="h-screen dark:bg-slate-400 bg-slate-100 center" >
      <div className="center md:h-1/2 w-1/2 flex-wrap sm:gap-10 md:gap-14 max-w-xl " id="contact">
        
        <a target={"_blank"} rel="noreferrer" href="https://linkedin.com/in/msudmthr" className="contact ">
          <img src={linkedin} alt="linkedin" className="h-10 rounded-lg dark:shadow-2xl dark:shadow-sky-700" />
          <span className="font-bold text-blue-600">linkedin</span>
        </a>


        <a target={"_blank"} rel="noreferrer" href="https://github.com/MsudMthr" className="contact">
          <img src={github} alt="github" className="h-10 rounded-lg" />
          <span className="font-bold ">github</span>
        </a>


        <a target={"_blank"} rel="noreferrer" href="https://instagram.com/msud.mthr" className="contact">
          <img src={instagram} alt="instagram" className="h-10 rounded-lg" />
          <span className="font-bold text-pink-700">instagram</span>
        </a>


        <a target={"_blank"} rel="noreferrer" href="skype:Masoud Motahari" className="contact">
          <img src={skype} alt="skype" className="h-10 rounded-lg" />
          <span className="font-bold text-sky-400">skype</span>
        </a>


      </div>
    </div>
  );
};

export default Contact;
