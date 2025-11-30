import { motion } from "framer-motion";

function ProjectCard({ image, img_align, dates, title, description, tags, link }) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-link"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
        <div className={`project-image ${img_align}`}>
            <img src={image} alt={title} />
            <span className="project-dates">{dates}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
            {tags.map((tag, i) => (
                <span key={i} className={`tag ${tag.color}`}>{tag.name}</span>
            ))}
        </div>
        </motion.a>
    );
}

export default ProjectCard;