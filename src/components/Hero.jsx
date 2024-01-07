import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import {
  shaq,
  bwmap,
  worldmap,
  mail,
  linkedIn,
  github,
  github1,
  instagram,
} from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{" "}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Shubham
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              {/* Crafting digital landscapes, <br className="sm:block hidden" />
              My code is the compass guiding users through intuitive and elegant
              journeys */}
              Building seamless experiences, layer by layer – where art and
              algorithm dance together
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=shubhu.damania00@gmail.com&su=Subject%20Line&body=Email%20body%20text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={mail}
                  alt="send"
                  className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-damania-1a1989209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedIn}
                  alt="send"
                  className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                />
              </a>

              <a
                href="https://github.com/Shubhu000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github1}
                  alt="send"
                  className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                />
              </a>

              <a
                href="https://www.instagram.com/shubham_damania0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="send"
                  className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                />
              </a>
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          >
            {" "}
          </div>

          <div></div>
        </div>

        {/* <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center scroll-bar"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div> */}

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          {/* <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="shubham"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
