import "./HeroBanner.css";

export default function HeroBanner() {
  return (
    <section className="hero-section">
      {/* Hero content left + image right */}
      <div className="hero-bg">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content fade-in-up">
              <h1 className="hero-h1 text-style-1">
                20 years of digital transformation in public service delivery
                <span className="hero-highlight text-style-2">
                  <span className="scroll-underline">It's possible.</span>
                </span>
              </h1>
              <div className="hero-desc">
                <p className="text-style-1 fw-300">
                  Catalysts. Ecosystem enablers. Problem Solvers.<br />
                  At eGov, we're driven by the power of open digital infrastructure and
                  ecosystems to enable governments deliver accessible, inclusive and
                  transparent services to every citizen.
                </p>
              </div>
              <div className="hero-btns">
                <a href="#" className="btn-style-1">Our Approach</a>
                <a href="#" className="btn-style-2">Our Impact</a>
              </div>
            </div>
            <div className="hero-image-wrap fade-in-up" style={{ animationDelay: "0.1s" }}>
              <img
                src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/22121932/New-Home-Page-Banner-Image.png"
                alt="Hero Banner"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impact numbers bar — "1 Billion+ Citizens" */}
      <div className="hero-impact-bar">
        <div className="container">
          <div className="impact-bar-inner">
            <div className="impact-number-big text-style-2">1,000,000,000+</div>
            <div className="impact-bar-text text-style-1 text-white">
              Citizens availing public services through eGov's Digital Public Goods (DPG)
            </div>
          </div>
          <div className="impact-stats-row">
            <div className="impact-stat fade-in-up" style={{ animationDelay: "0.0s" }}>
              <div className="is-number text-style-2">1.1 Billion+</div>
              <div className="is-label text-style-1">Public services delivered</div>
            </div>
            <div className="impact-stat fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="is-number text-style-2">50+ partners</div>
              <div className="is-label text-style-1">From technology, governments and NGOs</div>
            </div>
            <div className="impact-stat fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="is-number text-style-2">5 Sectors</div>
              <div className="is-label text-style-1">Local Gov · Water · Health · Finance · Justice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}