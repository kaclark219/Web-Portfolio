import ArtCard from "../pages/ArtCard.jsx";
import illustrator from "../assets/ai-logo.png"
import photoshop from "../assets/ap-logo.png"
import indesign from "../assets/aid-logo.png"
import procreate from "../assets/procreate-logo.png"
import figma from "../assets/figma-logo.png"
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
import card_box_back from "../assets/card-box-back.png"
import cards_1 from "../assets/cards-1.png"
import cards_2 from "../assets/cards-2.png"
import cards_3 from "../assets/cards-3.png"
import brewscape_bc from "../assets/brewscape-business-cards.jpg"
import brewscape_box from "../assets/brewscape-box.jpg"
import brewscape_paper from "../assets/brewscape-paper.jpg"
import brewscape_product from "../assets/brewscape-product.jpg"
import brewscape_logos from "../assets/brewscape-logos.png"
import type_inside from "../assets/type-inside.jpg"
import type_outside from "../assets/type-outside.jpg"
import type_stacked from "../assets/type-stacked.jpg"

function Art() {
    const designs = [
    {
        title:"East Village Bakery Branding",
        year:"March-May 2025",
        tools:[
            { src: illustrator, label: "Illustrator", kind: "adobe" },
            { src: photoshop, label: "Photoshop", kind: "adobe" },
            { src: indesign, label: "InDesign", kind: "adobe" },
            { src: procreate, label: "Procreate", kind: "art" },
            { src: figma, label: "Figma", kind: "web" },
        ],
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
        title:"Physical Craft Book Jacket",
        year:"Feb.-March 2025",
        tools:[
            { src: illustrator, label: "Illustrator", kind: "adobe" },
            { src: photoshop, label: "Photoshop", kind: "adobe" },
            { src: indesign, label: "InDesign", kind: "adobe" },
        ],
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
    },
    {
        title:"Illustrated Card Game",
        year:"Jan.-Feb. 2025",
        tools:[
            { src: procreate, label: "Procreate", kind: "art" },
            { src: illustrator, label: "Illustrator", kind: "adobe" },
            { src: indesign, label: "InDesign", kind: "adobe" },
        ],
        images:[
            { src: card_box_back },
            { src: cards_3 },
            { src: cards_2},
            { src: cards_1 },
        ],
        inspiration:"A fully hand-illustrated card game with a fantasy theme, marketed towards young women. The rules follow that of the game \"Sushi Go!\", with players strategizing their hand to create the best combinations and score the most points.",
    },
    {
        title:"BrewScape Tea Branding",
        year:"March-April 2024",
        tools:[
            { src: illustrator, label: "Illustrator", kind: "adobe" },
            { src: photoshop, label: "Photoshop", kind: "adobe" },
            { src: indesign, label: "InDesign", kind: "adobe" },
        ],
        images:[
            { src: brewscape_logos },
            { src: brewscape_paper},
            { src: brewscape_product },
            { src: brewscape_bc },
            { src: brewscape_box },
        ],
        inspiration:"The BrewScape tea brand was created to feel down-to-earth, authentic, and high-quality. The main logo features a custom shape-font workmark with fish teabag illustrations, and the colors center around the earthy tones of thai tea, matcha, and oolong tea.",
        link: "https://drive.google.com/file/d/1oXKeAFa19YhbUjvZy_7piz4aISLeEAR-/view"
    },
    {
        title:"Tyography Research Brochure",
        year:"March 2024",
        tools:[
            { src: indesign, label: "InDesign", kind: "adobe" },
            { src: photoshop, label: "Photoshop", kind: "adobe" },
        ],
        images:[
            { src: type_outside},
            { src: type_stacked},
            { src: type_inside },
        ],
        inspiration:"A brochure exploring the history and anatomy of the Times New Roman typeface, as well as its cultural significance and impact on design. All design elements are pieces of type, arranged to create a cohesive and visually interesting layout.",
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