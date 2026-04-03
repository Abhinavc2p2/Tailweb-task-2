import "./ProductCard.css";

export default function ProductCard({ product, index }) {
  const delay = `${(index % 8) * 0.06}s`;

  return (
    <div className="product-card fade-in-up" style={{ animationDelay: delay }}>
      {/* Tag */}
      {product.tag && (
        <span className="card-tag" style={{ background: product.tagColor }}>
          {product.tag}
        </span>
      )}

      {/* Image */}
      <div className="card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="card-img"
          onError={(e) => {
            e.target.src =
              "https://img.icons8.com/color/120/government.png";
          }}
        />
      </div>

      {/* Body */}
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-desc">{product.description}</p>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <div className="card-meta">
          <span className="card-price">{product.price}</span>
          <span className="card-users">👥 {product.users}</span>
        </div>
        <div className="card-actions">
          <span className="card-version">{product.version}</span>
          <button className="card-btn">Learn More →</button>
        </div>
      </div>
    </div>
  );
}