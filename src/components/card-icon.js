import './card-icon.css';

export default function Card({ title, category, image, description, price, discount, oldPrice }) {
    return (
        <div className="col-lg-4 col-sm-6" >
            <div className="card rounded-2 p-3 d-flex justify-content-between">
                <div>
                    <div className="d-flex align-items-center mb-2">
                        <img src={process.env.PUBLIC_URL + "/images/" + image} className="rounded-2" height="60" />
                        <div className="ms-2">
                            <h5 class="card-title m-0">{title}</h5>
                            <p class="card-text text-secondary">{category}</p>
                        </div>
                    </div>                <p class="card-description">{description}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <h3 className="card-discount rounded-3 p-1 text-white text-bold me-2 mb-0">{discount}-20%</h3>
                    <div>
                        <h5 class="card-text fs-6 text-secondary text-decoration-line-through m-0">{oldPrice}€19.99/mo.</h5>
                        <h5 class="card-text fs-5 m-0">{price}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}