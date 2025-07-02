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
import adobe_illustrator from "../assets/adobe-illustrator.PNG";
import adobe_indesign from "../assets/adobe-indesign.PNG";
import adobe_photoshop from "../assets/adobe-photoshop.PNG";
import adobe_premiere from "../assets/adobe-premierepro.PNG";
import arcweave from "../assets/arcweave.PNG";
import articy from "../assets/articy.PNG";
import c_plusplus from "../assets/c-plus-plus.PNG";
import c_sharp from "../assets/c-sharp.PNG";
import css from "../assets/css.PNG";
import d3 from "../assets/d3.PNG";
import figma from "../assets/figma.PNG";
import flask from "../assets/flask.PNG";
import git from "../assets/git.PNG";
import html from "../assets/html.PNG";
import ink from "../assets/ink.PNG";
import java_script from "../assets/java-script.PNG";
import java from "../assets/java.PNG";
import jupyter_notebook from "../assets/jupyter-notebook.PNG";
import linux from "../assets/linux.PNG";
import matplotlib from "../assets/matplotlib.PNG";
import my_sql from "../assets/my-sql.PNG";
import numpy from "../assets/numpy.PNG";
import opengl from "../assets/opengl.PNG";
import pandas from "../assets/pandas.PNG";
import postgresql from "../assets/postgresql.PNG";
import python from "../assets/python.PNG";
import react from "../assets/react.PNG";
import sass from "../assets/sass.PNG";
import svelte from "../assets/svelte.PNG";
import type_script from "../assets/type-script.PNG";
import unity from "../assets/unity.PNG";
import vercel from "../assets/vercel.PNG";

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

    const skills = [
        { src: c_plusplus, label: "C/C++" },
        { src: python, label: "Python" },
        { src: java, label: "Java" },
        { src: html, label: "HTML" },
        { src: java_script, label: "JavaScript" },
        { src: css, label: "CSS" },
        { src: type_script, label: "TypeScript" },
        { src: my_sql, label: "MySQL" },
        { src: c_sharp, label: "C#" },
        { src: postgresql, label: "PostgreSQL" },
        { src: react, label: "React" },
        { src: sass, label: "Sass" },
        { src: svelte, label: "Svelte" },
        { src: flask, label: "Flask" },
        { src: git, label: "Git" },
        { src: linux, label: "Linux" },
        { src: jupyter_notebook, label: "Jupyter Notebook" },
        { src: numpy, label: "NumPy" },
        { src: pandas, label: "Pandas" },
        { src: d3, label: "D3.js" },
        { src: matplotlib, label: "Matplotlib" },
        { src: opengl, label: "OpenGL" },
        { src: vercel, label: "Vercel" },
        { src: figma, label: "Figma" },
        { src: adobe_illustrator, label: "Adobe Illustrator" },
        { src: adobe_indesign, label: "Adobe InDesign" },
        { src: adobe_photoshop, label: "Adobe Photoshop" },
        { src: adobe_premiere, label: "Adobe Premiere Pro" },
        { src: unity, label: "Unity" },
        { src: ink, label: "Ink" },
        { src: arcweave, label: "Arcweave" },
        { src: articy, label: "Articy" },
    ];


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
                        <h2>Skills</h2>
                    </div>
                    <div className="skills-scroll-wrapper">
                        <div className="skills-track">
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div className="skill-item" key={`a-${index}`}>
                                        <img src={skill.src} alt={`${skill.label} logo`} />
                                        <p>{skill.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="skills-grid second">
                                {skills.map((skill, index) => (
                                    <div className="skill-item" key={`b-${index}`}>
                                        <img src={skill.src} alt={`${skill.label} logo`} />
                                        <p>{skill.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
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