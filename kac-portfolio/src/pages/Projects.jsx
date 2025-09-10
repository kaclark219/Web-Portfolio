import ProjectCard from "../pages/ProjectCard.jsx";
import raytracer from "../assets/ray-tracer.png"
import possystem from "../assets/pos-system.png"
import mimc from "../assets/mimc.png"
import spotifyviz from "../assets/spotify-viz.png"
import rr from "../assets/rr.png"

function Projects() {
    const projects = [
    {
        image: rr,
        dates: "Feb-May 2025",
        title: "Reader's Recs",
        description: "A social cataloging platform offering personalized book recommendations, user reviews, collection organization, and community features. The built-in ML recommendation algorithm allows users to discover new books based on their reading history and preferences. Reader's Recs achieved 2x higher satisfaction than Goodreads in a user study (5.2 vs. 2.6 out of 7) and the recommendations got a 1.1986 cosine similarity ratio comparing the model's recommendations to actual reading history of 100+ users.",
        tags: [
            { name: "Python", color: "green" },
            { name: "Flask", color: "blue" },
            { name: "Scikit-learn", color: "blue" },
            { name: "NumPy", color: "blue" },
            { name: "SentenceTransformers", color: "blue" },
            { name: "JavaScript", color: "green" },
            { name: "Node.js", color: "blue" },
            { name: "React", color: "blue" },
            { name: "Sass", color: "blue" },
            { name: "MongoDB", color: "blue" },
            { name: "Figma", color: "pink" }
        ],
        link: "https://github.com/kaclark219/Readers-Recs"
    },
    {
        image: spotifyviz,
        dates: "March-April 2025",
        title: "Spotify Music Visualizer",
        description: "Real-time music visualization tool connected to Spotify's Web Playback API that generates dynamic 3D visualizations based on song data, while analyzing audio features like frequency and volume in real time. The reactive user interface changes colors and styles based on user preferences and the genre of the music playing, delivering an engaging and customizable listening experience.",
        tags: [
            { name: "Svelte", color: "blue" },
            { name: "TypeScript", color: "green" },
            { name: "Three.js", color: "blue" },
            { name: "WebGL", color: "blue" },
            { name: "Spotify Web API", color: "blue" },
            { name: "Web Audio API", color: "blue" }
        ],
        link: "https://github.com/kaclark219/Spotify-Music-Visualizer"
    },
    {
        image: mimc,
        dates: "Nov. 2024",
        title: "Make It Make Cents",
        description: "Created for Capital One's Challenge at TAMU Datathon 2024, this project was developed as a solution to low financial literacy skills in children and young teens. I designed and programmed this project alone, and won \"Best Domain\" from Major League Hacking for my submission.",
        tags: [
            { name: "Svelte", color: "blue" },
            { name: "HTML", color: "green" },
            { name: "JavaScript", color: "green" },
            { name: "Node.js", color: "blue" },
            { name: "Sass", color: "blue" },
            { name: "Figma", color: "pink" },
            { name: "Vercel", color: "pink" }
        ],
        link: "https://devpost.com/software/make-it-make-cents"
    },
    {
        image: possystem,
        dates: "March-May 2024",
        title: "Fast Food POS Web Application",
        description: "A web application developed in an Agile team to allow authenticated users to view the menu, place orders, view/complete kitchen tickets, edit menu items/ingredients, and view monetary reports; includes integration of multiple APIs for user accessibility such as multilingual translation, built-in zoom features, etc..",
        tags: [
            { name: "JavaScript", color: "green" },
            { name: "TypeScript", color: "green" },
            { name: "PostgreSQL", color: "blue" },
            { name: "Agile Methodology", color: "pink" },
            { name: "HTML", color: "green" },
            { name: "React", color: "blue" },
            { name: "Node.js", color: "blue" },
            { name: "Adobe XD", color: "pink" }
        ],
        link: "https://github.com/csce-315-331-2024a/project-3-full-stack-agile-web-project-3-team-11"
    },
    {
        image: raytracer,
        dates: "Oct.-Nov. 2023",
        title: "Ray Tracer",
        description: "Created for a final project, a recursive ray tracer in OpenGL using C++ and tinyobjloader that can handle spheres, planes, imported .obj geometry, as well as mirrored surfaces and multiple light sources/shadows. The entire scene can render in about 3 seconds in release mode.",
        tags: [
            { name: "C++", color: "green" },
            { name: "OpenGL", color: "blue" },
            { name: "tinyobjloader", color: "blue" }
        ],
        link: "https://github.com/kaclark219"
    }];

    return (
        <div className="projects-grid">
            {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
            ))}
        </div>
    );
}

export default Projects;