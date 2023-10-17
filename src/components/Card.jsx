const Card = () => {
    return (
      <div className="card">
        <div className="image-container">
          <img
            src="https://images.pexels.com/photos/689451/pexels-photo-689451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="An image"
          />
        </div>
        <div className="information-container">
          <h3 className="card-title">Everest (Nepal / Tibet)</h3>
          <p className="ratings">
            <sup>⭐⭐⭐⭐</sup> <span>4 (2000)</span>
          </p>
          <div className="secondary-text">
            <h4>Mountains</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quae nihil modi qui ullam unde?
            </p>
          </div>
          <div className="separation-line"></div>
          <div className="subtitle">
            <h4>Other mountains</h4>
            <ul>
              <li><p>Mount Fuji (Japan)</p></li>
              <li><p>Mount Kilimanjaro (Tanzania)</p></li>
              <li><p>Mount K2 (Pakistan / China)</p></li>
              <li><p>Denali (Alaska)</p></li>
            </ul>
          </div>
          <button className="cta">Take a hike</button>
        </div>
      </div>
    );
};

export default Card;