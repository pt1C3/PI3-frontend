import './list-item.css';

export default function ListItem({ title, category, image }) {
    return (
        <div className="col-lg-3 col-sm-4" >
            <div className="list-item rounded-2 d-flex align-item-center">
                <img src={process.env.PUBLIC_URL + "/images/" + image} className="rounded-2" height="60" />
                <div className="ms-3 d-flex justify-content-center flex-column">
                    <h5 class="list-item-title m-0">{title}</h5>
                    <p class="list-item-text text-secondary m-0">{category}</p>
                </div>
            </div>
        </div>
    );
}