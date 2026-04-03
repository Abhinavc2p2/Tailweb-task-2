import { useState } from "react";
import "./ImpactSection.css";

const TABS = [
  {
    id: "public-health",
    label: "Public Health",
    cards: [
      {
        stat: "210+",
        text: "cities LIVE with 10BedICU across India",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/ICU-Equipment.G16.2k-1-3.png",
        link: "https://egov.org.in/product/10bedicu/",
        dark: false,
      },
      {
        stat: "2 Bn",
        text: "COVID-19 vaccination certificates issued",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/covid-vaccine-1.png",
        link: "#",
        dark: true,
      },
    ],
  },
  {
    id: "public-finance",
    label: "Public Finance",
    cards: [
      {
        stat: "5000+",
        text: "rural local bodies managing revenue & expenditure on Water Supply O&M System",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/10-times-faster-punjab-1.png",
        link: "#",
        dark: false,
      },
      {
        stat: "4000+",
        text: "empowered women Self Help Groups through Social Benefits Delivery System",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/4000-empowered-women-SHGs-through-MUKTASoft-1.png",
        link: "#",
        dark: true,
      },
    ],
  },
  {
    id: "local-governance",
    label: "Local Governance",
    cards: [
      {
        stat: "70%",
        text: "improved quality of life with implementations in Punjab, India",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/10-times-faster-punjab-1.png",
        link: "#",
        dark: false,
      },
      {
        stat: "250%",
        text: "increase in revenue mobilisation in Andhra Pradesh using the DIGIT Platform",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/lady.png",
        link: "#",
        dark: true,
      },
      {
        stat: "UPYOG",
        text: "National Urban Governance Platform LIVE in India for all states.",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/National-platform-UPYOG-1.png",
        link: "#",
        dark: false,
        navy: true,
      },
    ],
  },
  {
    id: "water-sanitation",
    label: "Water & Sanitation",
    cards: [
      {
        stat: "148Mn",
        text: "households with access to drinking water on tap to be maintained on systems powered by DIGIT platform",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/4000-villages-1.png",
        link: "#",
        dark: false,
      },
      {
        stat: "DPI",
        text: "for Sanitation: A reimagined approach led by DPI thinking",
        img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/09/Truck-man.png",
        link: "#",
        dark: true,
      },
    ],
  },
];

export default function ImpactSection() {
  const [active, setActive] = useState("public-health");
  const tab = TABS.find((t) => t.id === active);

  return (
    <section className="impact-section">
      <div className="container">
        <div className="impact-inner">
          {/* Left: heading + tab buttons */}
          <div className="impact-left">
            <h2 className="impact-heading text-style-1">
              Big problems need <br />
              <span className="text-style-2 fw-700">bold approaches</span>
            </h2>
            <div className="impact-tabs">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={`impact-tab-btn ${active === t.id ? "active" : ""}`}
                  onClick={() => setActive(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: impact cards */}
          <div className="impact-right">
            <div className={`impact-cards ${tab.cards.length === 3 ? "three-col" : "two-col"}`}>
              {tab.cards.map((card, i) => (
                <div
                  key={i}
                  className={`impact-card ${card.dark ? "dark" : ""} ${card.navy ? "navy" : ""} fade-in`}
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="ic-overlay" />
                  <div className="ic-content">
                    <h3 className="ic-stat">{card.stat}</h3>
                    <p className="ic-text">{card.text}</p>
                    <a href={card.link} className="ic-btn">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}