import React from "react";

const SECTIONS = [
    {
        id: "assignment-01",
        title: "Assignment 1: Setting the Scene",
        date: "January 17, 2026",
        description: "Used Godot to create a 3D scene to simulate the target image, then created a script to grab specifications from the objects.",
        blocks: [
            {
                type: "render",
                title: "Rendering / Screenshot",
                src: "/renders/scene-mock.png",
                alt: "Submission 1 render",
                caption: "Screenshot of scene and camera view in Godot editor.",
            },
            {
                type: "kv",
                title: "Discovered Scene Values",
                data: {
                    Sphere1: {
                        center_world: "(0.498855, 0.393785, -1.932619)",
                        radius_world: "0.36358747",
                        scale_world: "(1.0, 1.0, 1.0)",
                    },
                    Sphere2: {
                        center_world: "(0.026044, 0.864156, -1.366522)",
                        radius_world: "0.38744035",
                        scale_world: "(1.0, 1.0, 1.0)",
                    },
                    Floor: {
                        size_world: "(6.148293, 0.001, 5.984314)",
                        center_world: "(1.991213, -0.257648, -2.878398)",
                    },
                    Light: {
                        position_world: "(0.192955, 1.433318, -0.59421)",
                    },
                    Camera: {
                        lookat_world: "(0.033089, 0.765843, -1.331214)",
                        position_world: "(0.033089, 0.765843, -0.331214)",
                    }
                },
            },
            {
                type: "links",
                title: "Extras",
                items: [
                    { label: "System Specification Notes", href: "/writeups/specifications.txt" },
                ],
            },
        ],
    },
    {
        id: "assignment-02",
        title: "Assignment 2: Ray Tracing Framework",
        date: "January 28, 2026",
        description: "Implemented a basic ray tracer in C++ to render the scene with spheres and a plane to PPM format.",
        blocks: [
            {
                type: "render",
                title: "PPM Rendering",
                src: "/renders/basic-raytrace-output.png",
                alt: "Submission 2 render",
                caption: "PNG version of PPM output file.",
            },
            {
                type: "links",
                title: "Extras",
                items: [
                    { label: "GitHub Repository", href: "https://github.com/kaclark219/Web-Portfolio" },
                ],
            },
        ]
    }
];

function Block({ block, sectionId }) {
    if (block.type === "render") {
        const hasImg = !!block.src;
        return (
        <div className="panel">
            <div className="panel__title">{block.title}</div>

            {hasImg ? (
            <>
                <figure className="render-frame">
                <img src={block.src} alt={block.alt || "Render"} loading="lazy" />
                {block.caption && <figcaption className="render-caption">{block.caption}</figcaption>}
                </figure>

                <div className="actions">
                <a className="gi-btn" href={block.src} target="_blank" rel="noreferrer">
                    Open full size
                </a>
                <button
                    className="gi-btn btn--ghost"
                    onClick={() =>
                    navigator.clipboard.writeText(
                        window.location.href.split("#")[0] + `#${sectionId}`
                    )
                    }
                    type="button"
                >
                    Copy section link
                </button>
                </div>
            </>
            ) : (
            <div className="empty">
                <div className="empty__title">No render yet</div>
                <div className="empty__hint">Add a render src for this block.</div>
            </div>
            )}
        </div>
        );
    }

    if (block.type === "kv") {
        const data = block.data || {};
        const hasData = Object.keys(data).length > 0;

        return (
        <div className="panel">
            <div className="panel__title">{block.title}</div>

            {hasData ? (
            <div className="values">
                {Object.entries(data).map(([objectName, fields]) => (
                <section className="values__section" key={objectName}>
                    <div className="values__sectionTitle">
                    <span className="mono">{objectName}</span>
                    </div>

                    <dl className="kv">
                    {Object.entries(fields).map(([k, v]) => (
                        <div className="kv__row" key={k}>
                        <dt className="kv__key mono">{k}</dt>
                        <dd className="kv__value mono">{v}</dd>
                        </div>
                    ))}
                    </dl>
                </section>
                ))}
            </div>
            ) : (
            <div className="empty">
                <div className="empty__title">No values yet</div>
                <div className="empty__hint">Paste/export values into this block's data.</div>
            </div>
            )}
        </div>
        );
    }

    if (block.type === "links") {
        const items = block.items || [];
        const hasLinks = items.length > 0;

        return (
        <div className="panel panel--wide">
            <div className="panel__title">{block.title}</div>

            {hasLinks ? (
            <ul className="links">
                {items.map((l) => (
                <li key={l.href} className="links__item">
                    <a className="links__link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                    </a>
                </li>
                ))}
            </ul>
            ) : (
            <div className="empty">
                <div className="empty__title">No extra links</div>
            </div>
            )}
        </div>
        );
    }

    if (block.type === "custom") {
        const content = block.content || [];
        return (
        <div className="panel panel--wide">
            <div className="panel__title">{block.title}</div>
            {content.length ? (
            <ul className="bullets">
                {content.map((x, i) => (
                <li key={i}>{x}</li>
                ))}
            </ul>
            ) : (
            <div className="empty">
                <div className="empty__title">Nothing here yet</div>
                <div className="empty__hint">Add items to this block's content array.</div>
            </div>
            )}
        </div>
        );
    }

    return null;
    }

    export default function CSCI739Submissions() {
    return (
        <main className="submissions-page light">
        <header className="submissions-hero">
            <div className="submissions-hero__top">
            <span className="pill">CSCI 711.01</span>
            <span className="meta">Global Illumination - Katelyn A. Clark</span>
            </div>

            <h1 className="submissions-hero__title">Submissions</h1>
            <p className="submissions-hero__subtitle">
            A running log of renders + artifacts for ray tracer assignments.
            </p>
        </header>

        <div className="submissions-layout">
            <aside className="nav card">
            <div className="card__header">
                <h2 className="card__title">Jump to</h2>
            </div>

            <ul className="nav__list">
                {SECTIONS.map((s) => (
                <li key={s.id} className="nav__item">
                    <a className="nav__link" href={`#${s.id}`}>
                    <span className="nav__title">{s.title}</span>
                    {s.date && <span className="nav__meta">{s.date}</span>}
                    </a>
                </li>
                ))}
            </ul>
            </aside>

            <section className="sections">
            {SECTIONS.map((s) => (
                <article key={s.id} id={s.id} className="section card">
                <div className="section__header">
                    <div className="section__heading">
                    <h2 className="section__title">{s.title}</h2>
                    {s.date && <div className="section__date">{s.date}</div>}
                    </div>
                    {s.description && <p className="section__desc">{s.description}</p>}
                </div>

                <div className="section__grid">
                    {(s.blocks || []).map((block, idx) => (
                    <Block key={`${s.id}-${idx}`} block={block} sectionId={s.id} />
                    ))}
                </div>
                </article>
            ))}
            </section>
        </div>
        </main>
    );
}
