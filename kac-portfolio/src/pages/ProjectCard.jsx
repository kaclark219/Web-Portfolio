import { motion } from "framer-motion";

function ProjectCard({ image, dates, title, description, tags, link }) {
    return (
        <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-image">
                    <img src={image} alt={title} />
                    <span className="project-dates">{dates}</span>
                </div>
                <h3>{title}</h3>
            </a>
            <p>{description}</p>
            <div className="project-tags">
                {tags.map((tag, i) => (
                    <span key={i} className={`tag ${tag.color}`}>
                        {tag.name}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default ProjectCard;