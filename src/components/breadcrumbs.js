
import './breadcrumbs.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Breadcrumbs({ page1, page2, page3, link1, link2 }) {
    return (
        <nav aria-label="breadcrumb" class="breadcrumb-wrapper px-10vw">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><FontAwesomeIcon icon={faHouse} /></Link></li>
                {link1 ?
                    <li className="breadcrumb-item"><Link to={link1}>{page1}</Link></li>
                    :
                    <li className="breadcrumb-item active">{page1}</li>
                }
                {link2 && link1 ? (
                    <li className="breadcrumb-item"><Link to={link2}>{page2}</Link></li>
                ) : (
                    !link2 && link1 ? (
                        <li className="breadcrumb-item active">{page2}</li>
                    ) : null
                )}
                {page3 ? <li className="breadcrumb-item active">{page3}</li> : undefined}



            </ol>
        </nav >
    );
}

export default Breadcrumbs;