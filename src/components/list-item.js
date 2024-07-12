import { Link } from "react-router-dom";

export default function ListItem({ title, category, image, toLink }) {
    return (
        <div className="col-lg-4 col-sm-6">
            <Link className="list-item clickable-card rounded-2 d-flex align-item-center p-3 bg-white" to={toLink}>
                <img src={image} className="rounded-2" height="60" />
                <div className="ms-3 d-flex justify-content-center flex-column">
                    <h5 class="list-item-title m-0 text-medium">{title}</h5>
                    <p class="list-item-text text-secondary m-0">{category}</p>
                </div>
            </Link>
        </div>
    );
}