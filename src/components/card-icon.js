import './card-icon.css';

export default function Card({ title, category, image, description, price, discount, oldPrice }) {
    return (
        <div className="wrapper col-lg-4 col-sm-6" >
            <div className="card rounded-2 p-3">
                <div className="d-flex align-items-center mb-2">
                    <img src={process.env.PUBLIC_URL + image} className="rounded-2" height="60"/>
                    <div className="ms-2">
                        <h5 class="card-title m-0">{title}</h5>
                        <p class="card-text text-secondary">{category}</p>
                    </div>
                </div>
                <p class="card-description">{description}</p>
                <div class="card-body p-3">
                    <h5 class="card-text fs-5">{price}</h5>
                </div>
            </div>
        </div>  
    );
}