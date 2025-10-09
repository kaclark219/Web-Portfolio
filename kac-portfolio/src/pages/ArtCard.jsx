import { motion } from "framer-motion";

function ArtCard({
    images = [],
    title,
    year,
    tools = [],
    madeWith,
    inspiration,
    process,
    link,
    layout
}) {
    const Tile = ({ src, alt, className }) => (
        <div className={`tile ${className || ""}`}>
            <img src={src} alt={alt || `${title} – graphic`} loading="lazy" />
        </div>
    );

    // dynamic image layout
    const n = Math.min(images.length, 6);
    const cols = n <= 1 ? 1 : n === 2 ? 2 : n <= 4 ? 2 : 3;
    const rows = Math.max(1, Math.ceil(n / cols));
    const remainder = n % cols; // images in last row
    const lastSpan = remainder === 0 ? 1 : (remainder === 1 ? cols : cols - 1);

    const is231 = layout === "2-3-1";
    const galleryStyle = is231
        ? { gridTemplateColumns: "repeat(3, minmax(0,1fr))", gridTemplateRows: "repeat(3, minmax(0,1fr))" }
        : { gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` };
    
    const positions231 = [
        { gridColumn: "1 / span 2", gridRow: "1" },
        { gridColumn: "3",          gridRow: "1" },
        { gridColumn: "1",          gridRow: "2" },
        { gridColumn: "2",          gridRow: "2" },
        { gridColumn: "3",          gridRow: "2" },
        { gridColumn: "1 / span 3", gridRow: "3" },
    ];

    const content = (
        <>
            <div className="design-meta">
                <h3 className="design-title">{title}</h3>

                {tools?.length > 0 ? (
                    <ul className="tool-icons" aria-label="Tools used">
                        {tools.map((t, i) => {
                            const src = typeof t === "string" ? t : t.src;
                            const label = typeof t === "string" ? "" : (t.label || t.alt || "");
                            const key = (typeof t === "string" ? t : (t.kind || label || ""))
                                .toLowerCase().replace(/[^a-z0-9]+/g, "-");
                            const toolClass = key ? `tool-${key}` : "";

                            return (
                                <li key={i} className={`tool-icon ${toolClass}`} title={label}>
                                    <img src={src} alt={label} loading="lazy" />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    madeWith && (
                        <p className="made-with">
                            <strong>Made with:</strong> {madeWith}
                        </p>
                    )
                )}

                {inspiration && (
                    <section className="design-section">
                        <h4>Inspiration:</h4>
                        <p>{inspiration}</p>
                    </section>
                )}

                {process && (
                    <section className="design-section">
                        <h4>Process</h4>
                        {Array.isArray(process) ? (
                            <ol className="process-list">
                                {process.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ol>
                        ) : (
                            <p>{process}</p>
                        )}
                    </section>
                )}
            </div>
            <div
                className="design-gallery"
                style={galleryStyle}
            >
                {year && <span className="year-badge">{year}</span>}

                {images.slice(0, 6).map((im, i) => {
                    const isLast = i === n - 1 && remainder !== 0;
                    return (
                        <div
                            key={i}
                            className="tile"
                            style={is231 ? positions231[i] : (isLast ? { gridColumn: `span ${lastSpan}` } : undefined)}
                        >
                        <img
                            src={im.src}
                            alt={im.alt || `${title} – graphic`}
                            loading="lazy"
                        />
                        </div>
                    );
                })}

                {images.length > 6 && (
                    <div className="more-overlay">+{images.length - 6}</div>
                )}
            </div>
        </>
    );

    const Wrapper = link ? motion.a : motion.article;
    const wrapperProps = link
        ? {
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "design-card design-link",
        }
        : { className: "design-card" };

    return (
        <Wrapper
            {...wrapperProps}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            aria-label={title}
        >
            {content}
        </Wrapper>
    );
}

export default ArtCard;