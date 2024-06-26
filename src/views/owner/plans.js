import { useState, useEffect } from 'react';
import axios from 'axios';
import "./plans.css";
import { Helmet } from 'react-helmet';
import Breadcrumbs from "../../components/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SubscriptionItem = ({ id, image, name, status, nextBillDate, price, saleDate, cancelPlan }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCancelPlan = () => {
        cancelPlan(id);
    }

    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className='plan-product-info d-flex align-items-center'>
                    <img src={image} className='rounded-1' alt={name} />
                    <p className="text-medium mb-0 mx-2">{name}</p>
                </div>
                <div className='d-flex'>
                    <div className="text-end d-flex align-items-center">
                        {status === 1 ? (
                            <>
                                <p className=" mb-1 ">This subscription was cancelled.</p>
                            </>
                        ) : (
                            <>
                                <p className="mb-0 me-1">Your next bill is for <span className='text-bold'>€{price}</span> on <span className='text-bold'>{nextBillDate}</span></p>
                            </>
                        )}
                    </div>
                    {status !== 1 &&
                        <button className="btn" onClick={() => setIsExpanded(!isExpanded)}>
                            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                        </button>
                    }
                </div>
            </div>
            {isExpanded && status !== 1 && (
                <div className="card-body border-top">
                    <p className="mb-2">Subscription started in <span className='text-bold'>{saleDate}</span></p>
                    <div className='d-flex justify-content-end'>
                        <button className="btn-secondary" onClick={handleCancelPlan}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Plans = () => {
    const baseURL = 'http://localhost:3000';
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(baseURL + '/user/plans/' + JSON.parse(localStorage.getItem('user')).data.businessid)
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    };

    const cancelPlan = (id) => {
        axios.delete(baseURL + '/user/cancelplan/' + id)
            .then(res => {
                if (res.data.success) {
                    fetchData(); // Refresh data after successful cancellation
                }
            })
            .catch(error => {
                console.error('Error cancelling plan:', error);
            });
    };

    if (!data) {
        return <div className="wrapper">Loading...</div>;
    }

    return (
        <div className="wrapper">
            <Helmet>
                <title>Plans - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Plans" />
            <div className="mx-10vw mt-3">
                {data.map((item, index) => (
                    <SubscriptionItem
                        key={item.planid} // Ensure each item has a unique key
                        id={item.planid}
                        image={item.price.product.icon}
                        name={item.price.product.name}
                        nextBillDate={item.payments[0].due_date}
                        price={item.price.price}
                        status={item.planstatusid}
                        saleDate={item.sale_date}
                        cancelPlan={cancelPlan}
                    />
                ))}
            </div>
        </div>
    );
};

export default Plans;
