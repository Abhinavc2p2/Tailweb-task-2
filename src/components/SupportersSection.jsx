import "./SupportersSection.css";

const SUPPORTERS = [
  {
    name: "Co-develop",
    img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/Group-20708-1.png",
  },
  {
    name: "Bill & Melinda Gates Foundation",
    img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-4.png",
  },
  {
    name: "Tata Trusts",
    img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-3.png",
  },
  {
    name: "The Global Fund",
    img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-2.png",
  },
  {
    name: "Nandan Nilekani",
    img: "https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-1.png",
  },
];

export default function SupportersSection() {
  return (
    <section className="supporters-section">
      <div className="container">
        <div className="section-heading-wrap" style={{ marginBottom: "32px" }}>
          <h2 className="text-style-1 fw-300" style={{ fontSize: "2rem" }}>
            Our <span className="text-style-2 fw-700">Supporters</span>
          </h2>
        </div>
        <div className="supporters-row">
          {SUPPORTERS.map((s) => (
            <div key={s.name} className="supporter-logo fade-in-up">
              <img src={s.img} alt={s.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}