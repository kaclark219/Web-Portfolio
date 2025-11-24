import GameCard from "./GameCard";
import dahlia_fields from "../assets/dahlia-fields.png"
import dahlia_dialogue from "../assets/dahlia-dialogue.png"
import dahlia_house_interior from "../assets/dahlia-house-interior.png"
import dahlia_planting from "../assets/dahlia-planting.png"
import dahlia_post_office from "../assets/dahlia-post-office.png"
import critter_clicks from "../assets/critter-clicks.png"
import critter_clicks_book from "../assets/critter-clicks-book.png"
import critter_clicks_gameplay from "../assets/critter-clicks-gameplay.png"
import critter_clicks_instructions from "../assets/critter-clicks-instructions.png"

function Games() {
    const games = [
        {
            cover: dahlia_fields,
            dates: "Jan.-April 2025",
            title: "Dahlia Fields: Meet the Basement Dwellers",
            status: "Extensive Demo Released",
            pitch: "Psychological horror flower shop sim with trust-based dialogue.",
            description:
                "Welcome to Dahlia Fields, a cozy little town with new friends, cute scenery, and an unsettling hunger growing beneath the surface. In this cozy farming sim turned psychological horror experience, you play as a florist who's just moved in... and brought something dark with them.\nTend your flowerboxes by day. Befriend your neighbors. Fulfill their requests. Learn their secrets. And at night? Well, someone has to feed the basement.",
            role: "Project Manager, Creative Director, UI/UX Designer, Narrative Author, 2D Artist",
            teamSize: 6,
            engine: "Unity (C#)",
            platforms: ["PC"],
            media: {trailer: "https://www.youtube.com/watch?v=U7xINoVDyug", play: "https://kaclark219.itch.io/dahlia-fields"},
            screenshots: [dahlia_dialogue, dahlia_house_interior, dahlia_planting, dahlia_post_office],
            tags: [
                { name: "Unity", color: "blue" },
                { name: "C#", color: "green" },
                { name: "Ink", color: "green" },
                { name: "Horror", color: "pink" },
                { name: "Narrative", color: "pink" },
                { name: "Simulation", color: "pink" },
            ],
            link: "https://kaclark219.itch.io/dahlia-fields"
        },
        {
            cover: critter_clicks,
            dates: "Feb. 2025",
            title: "Critter Clicks",
            status: "Game Jam, Released",
            pitch: "Cozy wildlife photography game with an implicit speedrunning element.",
            description:
                "Made for Chillennium 2025. Play as an aspiring wildlife photographer, tasked with capturing the beauty of the animals in the savanna. Your job is to get photos of all the wild animals here, waiting for just the right moment to take a shot. Learn the animals' behavioral patterns to improve your timing!",
            role: "Lead Programmer, Assistant Designer (UI/UX)",
            engine: "Unity (C#)",
            platforms: ["Web"],
            teamSize: 2,
            media: {trailer: "https://www.youtube.com/watch?v=EENLXJJvnB8", play: "https://kaclark219.itch.io/critter-clicks"},
            screenshots: [critter_clicks_instructions, critter_clicks_gameplay, critter_clicks_book],
            tags: [
                { name: "Unity", color: "blue" },
                { name: "C#", color: "green" },
                { name: "Game Jam", color: "pink" },
                { name: "Casual", color: "pink" }
            ],
            link: "https://kaclark219.itch.io/critter-clicks"
        }
    ];

    return (
        <div className="games-grid">
            {games.map((game, i) => (
                <GameCard key={i} {...game} />
            ))}
        </div>
    );
}

export default Games;