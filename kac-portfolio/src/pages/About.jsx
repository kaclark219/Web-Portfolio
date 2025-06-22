import portrait from "../assets/about-me-portrait.PNG";

function About() {
    return (
        <div>
            <div className="about-drawing">
                <img src={portrait} alt="pixel illustration of me" />
            </div>
            <p>This is my about page content!</p>
        </div>
    );
}

export default About;