import { useState, useEffect, useMemo } from "react";
import { fetchProducts, CATEGORIES } from "../data/products";
import "./ProductsSection.css";

function SkeletonCard() {
  return (
    <div className="prod-card skeleton">
      <div className="sk sk-img" />
      <div className="prod-card-body">
        <div className="sk sk-tag" />
        <div className="sk sk-title" />
        <div className="sk sk-line" />
        <div className="sk sk-line short" />
        <div className="sk sk-line" />
      </div>
      <div className="prod-card-footer">
        <div className="sk sk-badge" />
        <div className="sk sk-btn" />
      </div>
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <div
      className="prod-card fade-in-up"
      style={{ animationDelay: `${(index % 6) * 0.06}s` }}
    >
      {product.tag && (
        <span className="prod-tag" style={{ background: product.tagColor }}>
          {product.tag}
        </span>
      )}
      <div className="prod-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => { e.target.src = "https://img.icons8.com/color/120/government.png"; }}
        />
      </div>
      <div className="prod-card-body">
        <span className="prod-category">{product.category}</span>
        <h3 className="prod-name">{product.name}</h3>
        <p className="prod-desc">{product.description}</p>
      </div>
      <div className="prod-card-footer">
        <div className="prod-footer-top">
          <span className="prod-price">{product.price}</span>
          <span className="prod-users">👥 {product.users}</span>
        </div>
        <div className="prod-footer-bottom">
          <span className="prod-version">{product.version}</span>
          <a href={product.link} target="_blank" rel="noreferrer" className="prod-btn">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const q = search.toLowerCase();
      const matchSearch = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [products, search, category]);

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section header */}
        <div className="section-heading-wrap">
          <p className="section-eyebrow">Our Offerings</p>
          <h2 className="text-style-1 fw-300" style={{ fontSize: "2rem" }}>
            Products &amp; <span className="text-style-2 fw-700">Solutions</span>
          </h2>
          <p className="section-sub">
            Open-source, interoperable digital platforms built for Indian urban local bodies.
            Free for all government entities under the DIGIT ecosystem.
          </p>
        </div>

        {/* Controls bar */}
        <div className="prod-controls">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
          <div className="cat-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`cat-btn ${category === c ? "active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {!loading && (
          <p className="results-count fade-in">
            Showing <strong>{filtered.length}</strong> of {products.length} products
          </p>
        )}

        {/* Grid */}
        <div className="prod-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : filtered.length === 0 ? (
            <div className="no-results fade-in">
              <div className="no-results-icon">🔎</div>
              <h3>No products found</h3>
              <p>No results for <strong>"{search || category}"</strong>. Try a different keyword or category.</p>
              <button className="no-results-reset" onClick={() => { setSearch(""); setCategory("All"); }}>
                Reset Filters
              </button>
            </div>
          ) : (
            filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
}