import img1 from "../assets/images/thecakeberry1.jpeg";
import img2 from "../assets/images/thecakeberry2.jpeg";
import img3 from "../assets/images/thecakeberry3.jpeg";
import img4 from "../assets/images/thecakeberry4.jpeg";
import img5 from "../assets/images/thecakeberry5.jpeg";
import img6 from "../assets/images/thecakeberry6.jpeg";
import img7 from "../assets/images/thecakeberry7.jpeg";

const cakes = [
  {
    name: "Chocolate Truffle",
    img: img6,
    desc: "Rich & Decadent",
  },
  {
    name: "Black Forest",
    img: img4,
    desc: "Classic Favourite",
  },
  {
    name: "Strawberry Cream",
    img: img2,
    desc: "Fruity & Fresh",
  },
  {
    name: "Vanilla Dream",
    img: img1,
    desc: "Light & Airy",
  },
];

export default function CakeOffer() {
  const phoneNumber = "919962744544";
  const waLink = `https://wa.me/${phoneNumber}?text=Hi%2C%20I%20want%20to%20order%202KG%20cake%20%40%20%E2%82%B91111%20offer`;

  return (
    <div style={{ background: "#FFF8E1", paddingBottom: 32, fontFamily: "'Inter', sans-serif" }}>

      <div style={{
        background: "linear-gradient(135deg, #FFD54F 0%, #FFB300 100%)",
        padding: "36px 20px 48px",
        borderRadius: "0 0 32px 32px",
        textAlign: "center",
      }}>
        <div className="glass-badge" style={{ marginBottom: 14 }}>
          Limited Time Offer
        </div>

        <h1 style={{ color: "#4E342E", fontSize: 30, fontWeight: 700 }}>
          2 KG Cake<br />
          For Just <span className="price-white">₹1,111</span>
        </h1>

        <p style={{ color: "rgba(78,52,46,0.8)", fontSize: 14, marginBottom: 20 }}>
          Choose any flavour · Fresh baked · Free customisation
        </p>

        <a href={waLink} target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#25D366",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            padding: "10px 22px",
            borderRadius: 24,
            textDecoration: "none",
          }}
        >
          <i className="fa-brands fa-whatsapp"></i>
          Order via WhatsApp
        </a>
      </div>

      <p style={{
        fontSize: 11,
        fontWeight: 600,
        color: "#6D4C41",
        letterSpacing: 1,
        textTransform: "uppercase",
        padding: "24px 20px 10px"
      }}>
        Choose your flavour
      </p>

      <div style={{
        display: "flex",
        gap: 14,
        overflowX: "auto",
        padding: "4px 20px 16px",
      }}>
        {cakes.map((cake, i) => (
          <div key={i} className="cake-card">

            <img src={cake.img} alt={cake.name} className="cake-img" />

            <div className="cake-overlay"></div>

            <div className="cake-price">
              2KG ₹1111
            </div>

            <div className="cake-text">
              <div className="cake-title">{cake.name}</div>
              <div className="cake-desc">{cake.desc}</div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}