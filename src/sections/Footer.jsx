import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign, up } from "../assets/icons";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="max-container relative ">
      <motion.a
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        href="#home"
        className="flex flex-row items-start justify-center w-full absolute -top-32 max-sm:-top-[105px] "
      >
        <button className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] bg-coral-red rounded-full flex items-center justify-center cursor-pointer">
          <img className="w-15 h-19" src={up} alt="Up Arrow" />
        </button>
      </motion.a>
      <div className="flex flex-row flex-wrap items-start justify-between gap-20 max-lg:flex-col max-sm:mt-8 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start"
        >
          <a href="/">
            <img width={150} height={46} src={footerLogo} alt="Nike " />
          </a>
          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            This project is XenTech’s pride and proof of our web development
            skills. Using React and the best tools for animations and styling,
            we created a stunning and functional website.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div
                className="flex flex-row items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer"
                key={index}
              >
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                  <img width={24} height={24} src={icon.src} alt={icon.alt} />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap"
        >
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link} target={link.target} rel={link.rel}>
                      {" "}
                      {link.name}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-row max-sm:items-center justify-between max-sm:flex-col text-white-400 mt-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-1 font-montserrat justify-start items-center gap-2 cursor-pointer"
        >
          <img
            className="rounded-full m-0"
            width={20}
            height={20}
            src={copyrightSign}
            alt="copy right sign"
          />
          <p>Copyright. All rights reserved.</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-montserrat cursor-pointer max-sm:mt-1"
        >
          Terms & Conditions
        </motion.p>
      </div>

        <div className="flex flex-1 w-full text-white border-2 my-4" />          
        <div className="flex items-center justify-center text-center max-w-6xl mx-auto ">
        <div className="my-5 flex flex-row max-sm:flex-col items-center justify-between text-center leading-8 text-xl w-full text-white tracking-widest ">
          <a
            className="hover:underline font-bold hover:underline-offset-8 hover:text-coral-red "
            href="/"
          >
            Nike
          </a>{" "}
          - by -
          <a
            className="hover:underline font-bold leading-6 hover:underline-offset-8 hover:text-coral-red "
            target="_blank"
            rel="noopener noreferrer"
            href="https://xentech.netlify.app/"
          >
            XenTech ↗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
