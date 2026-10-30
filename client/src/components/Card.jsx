import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link className="card-link">
      <div className="card">
        <div className="window-dots">
          <span className="dot-1"></span>
          <span className="dot-2"></span>
          <span className="dot-3"></span>
        </div>
        <div className="card-info">
          <h5>01_[Project-one]</h5>
          <div className="stack-tags">
            <p>Stack: [tech], [tech]</p>
          </div>
          <div className="link-section">
            <p> &gt; open live demo </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
