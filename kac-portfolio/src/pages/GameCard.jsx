import { motion } from "framer-motion";

function GameCard({
    cover,
    title,
    dates,              // "Jan 2025 – Apr 2025"
    status,             // "Released" | "In Development" | "Game Jam"
    pitch,              // short 1-liner
    description,        // 2–3 lines max
    role,               // "Gameplay Engineer"
    teamSize,           // 4
    engine,             // "Unity"
    tech = [],          // ["C#", "Ink", "FMOD"]
    platforms = [],     // ["PC", "Web"]
    contributions = [], // ["Implemented dialogue system...", ...]
    media = {},         // { trailer: url, play: url, repo: url }
    screenshots = [],   // array of image urls
    awards = [],        // ["Best Narrative (Jam)"]
    metrics = [],       // ["1.2k plays", "Top 5% in jam"]
    tags = [],          // [{ name: "Horror", color: "purple" }, ...]
}) {
    const { trailer, play, repo } = media;

    return (
        <motion.article
        className="game-card"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        >
        {/* Cover / Hero */}
        <div className="game-hero">
            <img src={cover} alt={`${title} cover`} className="game-cover" />
            <div className="game-hero-badges">
            {dates && <span className="badge subtle">{dates}</span>}
            {status && <span className={`badge status ${status.toLowerCase().replace(" ", "-")}`}>{status}</span>}
            </div>
        </div>

        {/* Header */}
        <header className="game-header">
            <h3 className="game-title">{title}</h3>
            {pitch && <p className="game-pitch">{pitch}</p>}
        </header>

        {/* Quick facts */}
        <section className="game-facts">
            {(role || teamSize) && (
            <div className="fact">
                <span className="fact-label">Role: </span>
                <span className="fact-value">
                {role}{teamSize ? ` · Team of ${teamSize}` : ""}
                </span>
            </div>
            )}

            {(engine || tech.length) && (
            <div className="fact">
                <span className="fact-label">Engine/Tech: </span>
                <span className="fact-value">
                {engine}{tech.length ? ` · ${tech.join(", ")}` : ""}
                </span>
            </div>
            )}

            {platforms.length > 0 && (
            <div className="fact">
                <span className="fact-label">Playable Platforms: </span>
                <span className="fact-value">{platforms.join(", ")}</span>
            </div>
            )}
        </section>

        {/* Description */}
        {description && <p className="game-desc">{description}</p>}

        {/* Contributions */}
        {contributions.length > 0 && (
            <ul className="game-contribs">
            {contributions.map((c, i) => (
                <li key={i}>{c}</li>
            ))}
            </ul>
        )}

        {/* Screenshots */}
        {screenshots.length > 0 && (
            <div className="game-shots">
            {screenshots.slice(0, 4).map((src, i) => (
                <img key={i} src={src} alt={`${title} screenshot ${i + 1}`} />
            ))}
            {screenshots.length > 4 && (
                <div className="shot-more">+{screenshots.length - 4}</div>
            )}
            </div>
        )}

        {/* Awards / Metrics */}
        {(awards.length > 0 || metrics.length > 0) && (
            <section className="game-extras">
            {awards.length > 0 && (
                <div className="extras-block">
                <span className="extras-title">Awards</span>
                <ul>
                    {awards.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
                </div>
            )}
            {metrics.length > 0 && (
                <div className="extras-block">
                <span className="extras-title">Impact</span>
                <ul>
                    {metrics.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
                </div>
            )}
            </section>
        )}

        {/* Tags */}
        {tags.length > 0 && (
            <div className="game-tags">
            {tags.map((tag, i) => (
                <span key={i} className={`tag ${tag.color || ""}`}>{tag.name}</span>
            ))}
            </div>
        )}

        {/* Links */}
        <footer className="game-links">
            {play && (
            <a href={play} target="_blank" rel="noopener noreferrer" className="btn">
                Play/Download
            </a>
            )}
            {trailer && (
            <a href={trailer} target="_blank" rel="noopener noreferrer" className="btn">
                Watch Trailer
            </a>
            )}
            {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="btn">
                View Code
            </a>
            )}
        </footer>
        </motion.article>
    );
}

export default GameCard;
