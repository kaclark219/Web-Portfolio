import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import little_me from "../assets/little-me.png";
import ds_sprites from "../assets/ds-sprites.png";
import "../style/style.css";

function Home() {
    return (
        <div className ="home">
            <div className="hero">
                <div className="hero-text">
                    <h1>Hi, I'm Katelyn</h1>
                    <h2>
                        <Typewriter
                            words={[
                                "i'm a web developer ",
                                "i like making games ",
                                "i'm a digi cam addict ",
                                "i design fun graphics "
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h2>
                </div>
                <div className="hero-image">
                    <img src={little_me} alt="pixel illustration of me" />
                </div>
            </div>
            <div className="learn-more-btn">
                <Link to="/about" className="btn">Learn More</Link>
            </div>
            <div className="image-links">
                <div className="ds">
                    <Link to="/programming">
                        <div
                            className="ds-sprite"
                            style={{ backgroundImage: `url(${ds_sprites})` }}
                        ></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;