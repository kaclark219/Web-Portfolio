import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import portrait from "../assets/about-me-portrait.PNG";
import handheld_frame from "../assets/gameboy-frame.PNG";
import screen1 from "../assets/screen1.JPEG";
import screen2 from "../assets/screen2.jpg";
import screen3 from "../assets/screen3.JPG";
import screen4 from "../assets/screen4.jpg";
import screen5 from "../assets/screen5.jpg";
import screen6 from "../assets/screen6.jpg";
import screen7 from "../assets/screen7.jpg";

import "../style/style.css";

const screenImages = [screen1, screen2, screen3, screen4, screen5, screen6, screen7];

function About() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);

    const changeImage = (indexUpdater) => {
        setFade(true);
        setTimeout(() => {
            setCurrent(indexUpdater);
            setFade(false);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeImage((prev) => (prev + 1) % screenImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        changeImage((prev) => (prev === 0 ? screenImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        changeImage((prev) => (prev + 1) % screenImages.length);
    };

    return (
        <div className ="about-me">
            <div className="about-top">
                <div className="me-photos">
                    <div className="gameboy-frame-wrapper">
                        <img src={screenImages[current]} className={`screen-img ${fade ? 'fade-out' : ''}`} alt={`screen ${current + 1}`} />
                        <button className="arrow left" onClick={handlePrev}>
                            <ArrowLeft size={32} color="#0e103d"/>
                        </button>
                        <button className="arrow right" onClick={handleNext}>
                            <ArrowRight size={32} color="#0e103d"/>
                        </button>
                        <img src={handheld_frame} alt="gameboy frame" className="frame-img" />
                    </div>
                </div>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>Hello! I'm <strong>Katelyn–</strong> a full-stack developer & designer with a love for building <strong>interactive experiences</strong>, whether that's a cozy horror game, a fun web app, or a brand identity + use cases from the ground up. I recently graduated from <strong>Texas A&M University</strong> with a Bachelor of Arts in Computer Science + a minor in Graphic Design, and I'm currently working towards my <strong>Master's in CS</strong> (with a focus in graphics, visualization + a certificate in AI) at the <strong>Rochester Institute of Technology</strong>. I've been involved in everything from game jams to leadership in campus orgs like Alpha Omega Epsilon & Aggie Internship Club. I'm especially interested in the overlap between <strong>design and development</strong> to create things that are not only functional, but thoughtful, expressive, & tons of fun to use.</p>
                    <p>If you have any questions or opportunities, feel free to reach out to any of my linked methods of communication. Thanks!</p>
                </div>
            </div>
            <div className="about-bottom">
                <div className="tech-skills">
                    <div className="tech-skills-header">

                    </div>
                    <div className="skills-grid">

                    </div>
                </div>
                <div className="skills-right">
                    <div className="about-drawing">
                        <img src={portrait} alt="pixel illustration of me" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;