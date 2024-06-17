import './search.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../components/list-item"


export default function Search() {
    const { searchvalue } = useParams();
    const [searchFilter, setSearchFilter] = useState('pop-');

    const changeFilter = (isPop) => {
        switch (searchFilter) {
            case 'pop+':
                isPop ? setSearchFilter("pop-") : setSearchFilter("pri-");
                break;
            case 'pop-':
                isPop ? setSearchFilter("pop+") : setSearchFilter("pri-")
                break;
            case 'pri+':
                isPop ? setSearchFilter("pop-") : setSearchFilter("pri-")
                break;
            case 'pri-':
                isPop ? setSearchFilter("pop-") : setSearchFilter("pri+")
                break;
            default:
                setSearchFilter("pop-")
                break;
        }
    };

    return (
        <div className="wrapper">
            <Helmet>
                <title>Search Results - LogicLeap</title>
            </Helmet>
            <section className='filter-tab'>
                <button className={'btn' + (searchFilter.substring(0, 3) === "pop" ? ' active' : '')} onClick={() => changeFilter(true)}>
                    Popularity {searchFilter.includes("pop") && <FontAwesomeIcon icon={searchFilter.includes('+') ? faSortUp : faSortDown} />}
                </button>
                <button className={'btn' + (searchFilter.substring(0, 3) === "pri" ? ' active' : '')} onClick={() => changeFilter(false)}>
                    Price {searchFilter.includes("pri") && <FontAwesomeIcon icon={searchFilter.includes('+') ? faSortUp : faSortDown} />}
                </button>
            </section>
            <section className='row mx-10vw mt-3 g-3'>
            <ListItem title="CreatiVortex" category="Design" image="/Produto.png" toLink="/produtos/1"/>
            <ListItem title="CreatiVortex" category="Design" image="/Produto.png" toLink="/produtos/1"/>
            <ListItem title="CreatiVortex" category="Design" image="/Produto.png" toLink="/produtos/1"/>
            <ListItem title="CreatiVortex" category="Design" image="/Produto.png" toLink="/produtos/1"/>


            </section>
        </div>
    )
}
