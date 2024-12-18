import './card-icon.css';
import { Link } from "react-router-dom";

export default function Card({ title, category, image, description, price, discount, square, toLink }) {
    function roundToTwoDecimals(num) {
        const roundedNum = Math.round(num * 100) / 100;
        return parseFloat(roundedNum.toString());
    }
    const oldPrice = roundToTwoDecimals(+price * (1 + (+discount / 100)));
    price = roundToTwoDecimals(price)
    return (
        <div className="col-lg-4 col-sm-6" >
            <Link className="card-icon clickable-card card rounded-2 p-3 d-flex justify-content-between" to={toLink}
                style={square == "true" ? { aspectRatio: "1/1" } : { aspectRatio: "auto" }}>
                <div>
                    <div className="d-flex align-items-center mb-2">
                        {image && (<img src={image} className="rounded-2 me-3" height="60" alt={title} />)}
                        <div>
                            <h5 class="card-title m-0 text-medium">{title}</h5>
                            {category && (<p class="card-text text-secondary">{category}</p>)}
                        </div>
                    </div>
                    <p className="card-description" style={square == "true" ? { display: "block" } : { display: "none" }}>{description}</p>
                </div>
                <div className='d-flex align-items-center'>
                    {discount ?
                        <h3 className="card-discount rounded-3 p-1 text-white text-bold me-2 mb-0">-{discount}%</h3>
                        : <h3 className="my-1" style={{ width: "0" }}>-</h3>
                    }
                    <div>
                        {discount ?
                            <h5 class="card-text fs-6 text-secondary text-decoration-line-through m-0">€{oldPrice}/mo.</h5>
                            : null}
                        <h5 class="card-text fs-5 m-0">€{price}/mo.</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}