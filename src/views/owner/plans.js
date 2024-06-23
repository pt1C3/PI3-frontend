import React, { useState } from 'react';
import "./plans.css";
import { Helmet } from 'react-helmet';
import Breadcrumbs from "../../components/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SubscriptionItem = ({ name, type, status, nextBillDate, price }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <p className="text-medium mb-0 me-2">{name}</p>
                    <p className="text-secondary mb-0 fs-6">{type}</p>
                </div>
                <div className='d-flex'>
                    <div className="text-end d-flex align-items-center">
                        {status === 'paused' ? (
                            <>
                                <p className=" mb-1 me-3">This subscription is paused.</p>
                                <button className="btn-secondary">Resume</button>
                            </>
                        ) : (
                            <>
                                <p className="mb-0 me-1">Your next bill is for <span className='text-bold'>€{price}</span> on <span className='text-bold'>{nextBillDate}</span></p>
                            </>
                        )}
                    </div>
                    <button className="btn" onClick={() => setIsExpanded(!isExpanded)}>
                        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                    </button>
                </div>

            </div>
            {isExpanded && (
                <div className="card-body border-top">
                    <p className="mb-2">Additional details here</p>
                    <div className='d-flex justify-content-end'>
                        <button className="btn-secondary me-2">Pause</button>
                        <button className="btn-secondary">Cancel</button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default function Plans() {
    return (
        <div className="wrapper bg-white">
            <Helmet>
                <title>Plans - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Plans" />
            <div className="bg-gray1">
                <div className="mx-10vw pt-3">
                    <SubscriptionItem
                        name="Product Name"
                        type="Addon"
                        status="paused"
                    />
                    <SubscriptionItem
                        name="Product Name"
                        type="Software"
                        nextBillDate="2023-03-12"
                        price="19.99"
                    />
                    <SubscriptionItem
                        name="Product Name"
                        type="Pack"
                        nextBillDate="2023-03-12"
                        price="19.99"
                    />
                    <SubscriptionItem
                        name="Product Name"
                        type="Pack"
                        nextBillDate="2023-03-12"
                        price="19.99"
                    />
                    <SubscriptionItem
                        name="Product Name"
                        type="Pack"
                        nextBillDate="2023-03-12"
                        price="19.99"
                    />
                </div>
            </div>
        </div>
    );
}