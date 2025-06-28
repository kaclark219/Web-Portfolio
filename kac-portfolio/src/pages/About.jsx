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
        <div>
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