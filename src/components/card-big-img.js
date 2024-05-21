export default function Card({title, category, image, description, price, discount, oldPrice}) {
    return (
    <div className="wrapper col-lg-4 col-sm-6">
        <div className="card rounded-2">
            <img src={process.env.PUBLIC_URL + image } className="card-img-top rounded-2" />
            <div class="card-body p-3">
                <div className="mb-2">
                    <h5 class="card-title m-0">{title}</h5>
                    <p class="card-text text-secondary">{category}</p>
                </div>
                <h5 class="card-text fs-5">{price}</h5>
            </div>
        </div>
    </div>
    );
}