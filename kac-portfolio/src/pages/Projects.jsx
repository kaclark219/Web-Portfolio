import ProjectCard from "../pages/ProjectCard.jsx";
import raytracer from "../assets/ray-tracer.png"
import possystem from "../assets/pos-system.png"

function Projects() {
    const projects = [{
        image: possystem,
        dates: "March-May 2024",
        title: "Fast Food POS Web Application",
        description: "Developed a web application in an Agile team to allow authenticated users to view the menu, place orders, view/complete kitchen tickets, edit menu items/ingredients, and view monetary reports; includes integration of multiple APIs for user accessibility such as multilingual translation, built-in zoom features, etc..",
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