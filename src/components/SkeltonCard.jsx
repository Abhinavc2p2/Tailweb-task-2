import "./SkeletonCard.css";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skel skel-image" />
      <div className="skeleton-body">
        <div className="skel skel-tag" />
        <div className="skel skel-title" />
        <div className="skel skel-line" />
        <div className="skel skel-line short" />
        <div className="skel skel-line" />
      </div>
      <div className="skeleton-footer">
        <div className="skel skel-badge" />
        <div className="skel skel-btn" />
      </div>
    </div>
  );
}