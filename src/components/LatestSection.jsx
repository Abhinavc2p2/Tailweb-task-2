import { useState } from "react";
import "./LatestSection.css";

const TABS = ["What's New", "Articles", "Whitepapers", "Case Studies", "Strategy Papers", "News & Media", "Videos", "Newsletter"];

const CONTENT = {
  "What's New": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/03/13060122/State-led-Thumb.jpg",
      title: "State-led Urban Digital Transformation",
      author: "Mathews P Joseph +2 More",
      date: "13 Mar 2026",
      tags: ["Odisha", "Kerala", "Local Governance", "Andhra Pradesh", "Punjab"],
      link: "https://egov.org.in/whitepaper/state-led-urban-digital-transformation/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/24103813/DOT-September-Thumb.jpg",
      title: "DOT – A DIGIT QUARTERLY NEWSLETTER",
      author: "eGov Foundation +2 More",
      date: "20 Jan 2026",
      tags: [],
      link: "https://egov.org.in/newsletter/dot-a-digit-quarterly-newsletter/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/13163132/dot-2025-5.jpg",
      title: "DOT 2025 | TOP STORIES OF PARTNERSHIPS & IMPACT",
      author: "eGov Foundation +2 More",
      date: "30 Dec 2025",
      tags: [],
      link: "https://egov.org.in/newsletter/dot-yearend-2025/",
    },
  ],
  "Articles": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/07/Pravimal-StoryThumb-1.jpg",
      title: "From Goa to the Globe: How Pravimal Abhishek led the GIDC to digitally transform industrial governance in Goa",
      author: "Darshana Ramdev",
      date: "25 Jul 2025",
      tags: ["GOA-IDC", "Pravimal Abhishek", "Local Governance"],
      link: "https://egov.org.in/articles/from-goa-to-the-globe-how-pravimal-abhishek-led-the-gidc-to-digitally-transform-industrial-governance-in-goa/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/03/Scaler-Article-Thumb-1.jpg",
      title: "Tech for Billions, Talent for None: Fixing GovTech's Biggest Gap",
      author: "Darshana Ramdev",
      date: "10 Mar 2025",
      tags: ["DIGIT"],
      link: "https://egov.org.in/articles/tech-for-billions-talent-for-none-fixing-govtechs-biggest-gap/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/03/Systems-to-Ecosystems-Thumb.jpg",
      title: "From Systems to Ecosystems: A Shared Journey to Build Digital Public Goods",
      author: "Viraj Tyagi",
      date: "10 Jan 2025",
      tags: ["Digital Public Infrastructure", "Digital Public Goods", "Local Governance"],
      link: "https://egov.org.in/articles/from-systems-to-ecosystems-a-shared-journey-to-build-digital-public-goods/",
    },
  ],
  "Whitepapers": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/southern-egovernance.jpg",
      title: "Consolidation – From Southern Urbanism to Southern e-Governance",
      author: "Mathews P Joseph",
      date: "22 Aug 2024",
      tags: ["Urban", "eGovernance", "Framework"],
      link: "https://egov.org.in/whitepaper/consolidation-from-southern-urbanism-to-southern-e-governance/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/03/13060122/State-led-Thumb.jpg",
      title: "State-led Urban Digital Transformation",
      author: "Mathews P Joseph",
      date: "13 Mar 2026",
      tags: ["Odisha", "Kerala", "Local Governance", "Andhra Pradesh", "Punjab"],
      link: "https://egov.org.in/whitepaper/state-led-urban-digital-transformation/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/public-data-privacy.jpg",
      title: "How Public Should Public Data Be – Privacy & E-governance in India",
      author: "eGov Foundation",
      date: "22 Aug 2024",
      tags: ["eGovernance", "Data Privacy", "India"],
      link: "https://egov.org.in/whitepaper/how-public-should-public-data-be-privacy-e-governance-in-india/",
    },
  ],
  "Case Studies": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/09/MUKTASoft-Case-Study-1.png",
      title: "Enabling Social Benefit Delivery through Digital Public Infrastructure",
      author: "eGov Foundation",
      date: "12 Sep 2024",
      tags: ["Odisha", "Public Finance", "Social Benefits Delivery"],
      link: "https://egov.org.in/case-studies/enabling-social-benefit-delivery-through-digital-public-infrastructure/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/09/AP-Revenue-Case-Study-1.png",
      title: "Accelerating Revenue Mobilisation through Digital Public Infrastructure (DPI)",
      author: "eGov Foundation",
      date: "11 Sep 2024",
      tags: ["DPI", "Local Governance", "Andhra Pradesh", "Revenue Mobilization"],
      link: "https://egov.org.in/case-studies/accelerating-revenue-mobilisation-through-digital-public-infrastructure-dpi/",
    },
  ],
  "Strategy Papers": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/NIUA-SP-Thumb-1.png",
      title: "National Urban Innovation Stack – Strategy & Approach",
      author: "eGov Foundation",
      date: "13 Aug 2024",
      tags: ["NIUA", "Strategy", "Urban"],
      link: "https://egov.org.in/strategy-paper/national-urban-innovation-stack-strategy-and-approach/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/Sanitation-SP-Thumb-1.png",
      title: "Reimagining Sanitation Services with Digital Public Infrastructure – A Strategy Note",
      author: "eGov Foundation",
      date: "13 Aug 2024",
      tags: ["WASH", "Sanitation"],
      link: "https://egov.org.in/strategy-paper/reimagining-sanitation-services-with-digital-public-infrastructure/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/PFM-SP-Thumb-1.png",
      title: "Strategy and Approach to Public Financial management",
      author: "eGov Foundation",
      date: "12 Aug 2024",
      tags: ["PFM", "Public Finance"],
      link: "https://egov.org.in/strategy-paper/strategy-and-approach-to-public-financial-management-egov/",
    },
  ],
  "News & Media": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/08/MoU-CGS-eGov.webp",
      title: "Karnataka's Centre for Smart Governance and eGov Foundation Announce Strategic Partnership to Transform Public Service Delivery",
      author: "eGov Foundation",
      date: "11 Aug 2025",
      tags: ["Press Releases", "Local Governance"],
      link: "https://egov.org.in/news-and-media/karnatakas-centre-for-smart-governance-and-egov-foundation-announce-strategic-partnership-to-transform-public-service-delivery/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/06/MoU-AIRF.jpg",
      title: "AI for Sustainable Cities: AIRAWAT and eGov Foundation Launch Strategic Partnership for Urban Governance",
      author: "eGov Foundation",
      date: "27 Jun 2025",
      tags: ["Local Governance", "Press Releases"],
      link: "https://egov.org.in/news-and-media/ai-for-sustainable-cities-airawat-and-egov-foundation-launch-strategic-partnership-for-urban-governance/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/05/Punjab-eGov-Mou.jpg",
      title: "Government of Punjab and eGov Foundation Sign MoU to Drive Urban Innovation",
      author: "eGov Foundation",
      date: "09 May 2025",
      tags: ["Local Governance", "Press Releases"],
      link: "https://egov.org.in/news-and-media/government-of-punjab-and-egov-foundation-sign-mou-to-drive-urban-innovation-across-technology-policy-and-revenue-systems/",
    },
  ],
  "Videos": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/05/25112351/Leadership-Talks-.jpg",
      title: "Leadership Talks: Viraj Tyagi on lessons learnt on driving digital innovation across borders",
      author: "eGov Foundation",
      date: "06 May 2025",
      tags: ["Tech for Good", "EkScaleKatha", "Public Services"],
      link: "https://egov.org.in/video/leadership-talks-viraj-tyagi-on-lessons-learnt-on-driving-digital-innovation-across-borders/",
      isVideo: true,
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/09/xwltQe3HJOM-HD.jpg",
      title: "SUJOG in Odisha",
      author: "eGov Foundation",
      date: "17 Apr 2025",
      tags: ["Odisha", "Water and Sanitation", "SUJOG"],
      link: "https://egov.org.in/video/sujog-in-odisha/",
      isVideo: true,
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/09/Kd4GNNMr83A-HD.jpg",
      title: "mGramSeva Punjab",
      author: "eGov Foundation",
      date: "31 Jan 2025",
      tags: ["Punjab", "Local Governance", "mGramSeva"],
      link: "https://egov.org.in/video/mgramseva-punjab/",
      isVideo: true,
    },
  ],
  "Newsletter": [
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/24103813/DOT-September-Thumb.jpg",
      title: "DOT – A DIGIT QUARTERLY NEWSLETTER",
      author: "eGov Foundation",
      date: "20 Jan 2026",
      tags: [],
      link: "https://egov.org.in/newsletter/dot-a-digit-quarterly-newsletter/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/13163132/dot-2025-5.jpg",
      title: "DOT 2025 | TOP STORIES OF PARTNERSHIPS & IMPACT",
      author: "eGov Foundation",
      date: "30 Dec 2025",
      tags: [],
      link: "https://egov.org.in/newsletter/dot-yearend-2025/",
    },
    {
      img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/24103813/DOT-September-Thumb.jpg",
      title: "DOT September 2025",
      author: "eGov Foundation",
      date: "11 Sep 2025",
      tags: [],
      link: "https://egov.org.in/newsletter/dot-september-2025/",
    },
  ],
};

function ResourceCard({ item }) {
  return (
    <div className="resource-card fade-in-up">
      <div className="rc-img-wrap">
        <img src={item.img} alt={item.title} />
        {item.isVideo && (
          <div className="rc-play-btn">
            <svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="rgba(0,0,0,0.5)"/><polygon points="24,18 46,30 24,42" fill="white"/></svg>
          </div>
        )}
      </div>
      <div className="rc-body">
        <div className="rc-title">
          <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
        </div>
        <div className="rc-meta">
          <span className="dot-sep"></span>
          <span className="rc-author">{item.author}</span>
          <span className="dot-sep"></span>
          <span className="rc-date">{item.date}</span>
        </div>
        {item.tags.length > 0 && (
          <div className="rc-tags">
            {item.tags.map((t) => (
              <span key={t} className="tag-style-2">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function LatestSection() {
  const [active, setActive] = useState("What's New");
  const items = CONTENT[active] || [];

  return (
    <section className="latest-section" id="latest">
      <div className="container">
        <div className="section-heading-wrap">
          <h2 className="text-style-1 fw-300" style={{ fontSize: "2rem" }}>
            Latest at <span className="text-style-2 fw-700">eGov</span>
          </h2>
        </div>

        {/* Tab pills */}
        <div className="latest-tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`latest-tab-pill ${active === t ? "active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="latest-grid">
          {items.map((item, i) => (
            <ResourceCard key={i} item={item} />
          ))}
        </div>

        <div className="see-all-wrap">
          <a href="https://egov.org.in/knowledge-resource" className="btn-style-4" target="_blank" rel="noreferrer">
            See all
          </a>
        </div>
      </div>
    </section>
  );
}