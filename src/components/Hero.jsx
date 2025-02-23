import React from "react";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="sticky w-full h-screen mx-auto flex flex-col items-center">
            {/* 📌 Tekst */}
            <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mt-20 relative`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#915EFF]">Krzysztof</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I'm a Software Developer specializing in <span className="text-[#915EFF]">Full-Stack & Industrial Automation</span>.
                    </p>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I work with technologies like{" "}
                        <Typewriter
                            options={{
                                strings: ["Python", ".NET", "React", "Django"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: "natural",
                                pauseFor: 1000,
                            }}
                        />
                    </p>
                </div>
            </div>

            {/* Computer model */}
            <div className="w-full h-[400px] sm:h-[700px] flex justify-center sticky">
                <ComputersCanvas/>
            </div>

            {/* Scroll indicator */}
            <div className="bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div
                        className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{y: [0, 24, 0]}}
                            transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
