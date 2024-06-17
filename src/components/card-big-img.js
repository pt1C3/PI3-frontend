import { Link } from "react-router-dom";


export default function Card({title, category, image, description, price, discount, oldPrice, toLink}) {
    return (
    <div className="col-lg-4 col-sm-6">
        <Link className="card clickable-card card-big-img rounded-2" to={toLink}>
            <img src={process.env.PUBLIC_URL + "/images/" + image } className="card-img-top rounded-2" />
            <div class="card-body p-3">
                <div className="mb-2">
                    <h5 class="card-title m-0 text-medium">{title}</h5>
                    <p class="card-text text-secondary">{category}</p>
                </div>
                <h5 class="card-text fs-5">{price}</h5>
            </div>
        </Link>
    </div>
    );
}