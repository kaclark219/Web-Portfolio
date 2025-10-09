import ArtCard from "../pages/ArtCard.jsx";
import bakery_business_card from "../assets//bakery-business-cards.png"
import bakery_menu from "../assets/bakery-menu.png"
import bakery_packaging from "../assets/bakery-packaging.png"
import bakery_window from "../assets/bakery-window.png"
import book_cover from "../assets/book-cover.png"
import book_mock from "../assets/book-mock.jpg"
import book_paper from "../assets/book-paper-cuts.png"
import book_letters from "../assets/book-letters.png"
import book_elk from "../assets/book-elk.png"
import book_splatters from "../assets/book-splatters.png"

function Art() {
    const designs = [
    {
        title:"New York Bakery Branding",
        year:"March-May 2025",
        madeWith:"Adobe Illustrator, Adobe Photoshop, Procreate",
        images:[
            { src: bakery_window },
            { src: bakery_business_card },
            { src: bakery_packaging },
            { src: bakery_menu },
        ],
        inspiration:"The East Village Bakery brand was designed to feel reminiscent of storefronts in the Lower East Side, where Italian immigrants built new lives and kept old traditions alive through food.",
        link:"https://drive.google.com/file/d/1-dMqCF2-9r-2OTymnIYrRmv6NGrycT5_/view?usp=sharing",
    },
    {
        title:"Physical Craft Book Cover Jacket",
        year:"Feb.-March 2025",
        madeWith:"Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Procreate",
        images:[
            { src: book_mock },
            { src: book_paper },
            { src: book_splatters},
            { src: book_elk },
            { src: book_letters },
            { src: book_cover },
        ],
        inspiration:"Stephen Graham Jones' novel \"Don't Fear the Reaper\" uses slasher references to propel the plot and add suspense. The cover design uses paper cutouts and ink splatters to evoke the feeling of an old-school horror/slasher movie while maintaining a tactile, handcrafted aesthetic.",
        layout: "2-3-1",
    }]
    return (
        <div className="art-grid">
            {designs.map((design, i) => (
                <ArtCard key={i} {...design} />
            ))}
        </div>
    );
}

export default Art;