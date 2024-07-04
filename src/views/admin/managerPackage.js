import Breadcrumbs from "../../components/breadcrumbs";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./managerPackage.css";
import { Helmet } from 'react-helmet';

export default function ManagerPackage() {
    const baseURL = 'http://localhost:3000';
    const navigate = useNavigate();
    let { id } = useParams();
    const [section, setSection] = useState('plans');
    const [selectedPlan, setPlan] = useState(1);
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(baseURL + '/product/' + id)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });

    }, []);

    var features = (features) => {
        if (features) {
            const parts = features.split('[p]');

            return (
                <div>
                    {parts.map((part, index) => (
                        <p key={index}>{part}</p>
                    ))}
                </div>
            );
        }
    }


    const buyPlan = ()=>{
        navigate('/payment/' + selectedPlan + '/' + data.productid)
    }
    
    if (!data) {
        return <div className="wrapper">Loading...</div>;

    }
    return (
        <div className="wrapper bg-white">
            <Helmet>
                <title>CreatiVortex - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Designer Pack" page2={data.name} link1="/"></Breadcrumbs>
            <section className="mx-10vw mt-3">
                <div className="row g-4 align-items-top">
                    <div className="col-12 col-xl-6">
                        <div className="d-flex mb-3">
                            <img src={data.icon} alt={data.name} height="150" className="me-4" />
                            <div className=" d-flex justify-content-between flex-fill">
                                <div>
                                    <p className="text-medium fs-3 m-0">{data.name}</p>
                                    <p className="text-secondary m-0">{data.category.designation}</p></div>
                                <div className="d-flex align-items-end flex-column mt-auto">
                                    <p className="fs-6 m-0">Starting at <span className="fs-5 text-bold">€{data.prices[0].price}/mo.</span></p>
                                    <span>
                                        <button className="btn btn-primary text-bold py-3 px-4" onClick={() => setSection('plans')}>View Plans</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p>{data.description}</p>
                    </div>
                    <div className="col-12 col-xl-6 ">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-xl-12">
                                <div className="bg-primary ratio ratio-16x9">

                                    a</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <ul className="nav nav-underline justify-content-center">
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'features' ? 'active' : ''}`} onClick={() => setSection('features')}>Features</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'releaseNotes' ? 'active' : ''}`} onClick={() => setSection('releaseNotes')}>Release Notes</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'plans' ? 'active' : ''}`} onClick={() => setSection('plans')}>Plans</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'requirements' ? 'active' : ''}`} onClick={() => setSection('requirements')}>Requirements</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'faq' ? 'active' : ''}`} onClick={() => setSection('faq')}>FAQ</button>
                    </li>
                </ul>


            </section>
            <section id="features" className="py-3" style={{ display: section === 'features' ? 'block' : 'none' }}>
                <div className="mx-10vw">

                    {features(data.features)}
                </div>

            </section>
            <section id="requirements" className="py-3" style={{ display: section === 'requirements' ? 'block' : 'none' }}>
                <table class="table mx-10vw">
                    <thead>
                        <th></th>
                        <th>Minimum</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Operating System</td>
                            <td>{data.versions[0].req.os}</td>
                        </tr>
                        <tr>
                            <td>Processor</td>
                            <td>{data.versions[0].req.processor}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{data.versions[0].req.ram}</td>
                        </tr>
                        <tr>
                            <td>Graphics Card</td>
                            <td>{data.versions[0].req.graphic_card}</td>
                        </tr>
                        <tr>
                            <td>Hard disk space</td>
                            <td>{data.versions[0].req.hard_disk_space}</td>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>{data.versions[0].req.internet_conection}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="releaseNotes" className="py-3" style={{ display: section === 'releaseNotes' ? 'block' : 'none' }}>
                {data.versions.map((item, index) => (
                    <div className="rounded-3 p-3 mx-10vw">
                        <p className="text-bold">v{item.version} ({item.releasedate})</p>
                        <p className="text-medium">Release notes:</p>
                        <p>{item.releasenotes}</p>
                    </div>
                ))}

            </section>
            <section id="faq" className="py-3" style={{ display: section === 'faq' ? 'block' : 'none' }}>
                <div class="accordion mx-10vw">
                    {data.faqs.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-button text-bold ${index === 0 ? '' : 'collapsed'}`} // Add 'collapsed' class to all except the first item
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse_${index}`} // Unique target ID for each item
                                    aria-expanded={index === 0 ? 'true' : 'false'} // Set aria-expanded attribute
                                    aria-controls={`collapse_${index}`} // Corresponding control ID
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse_${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} // Add 'show' class to the first item
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
            </section>
            <section id="plans" className="py-3" style={{ display: section === 'plans' ? 'block' : 'none' }}>
                <div className="plans-wrapper mx-10vw row g-4">
                    {data.prices.map((item, index) => (
                        <div className="col-lg-4">
                        <button className={`plan rounded-3 py-3 px-5 ${selectedPlan === index ? 'active' : ''}`} onClick={() => setPlan(index)}>
                            <div className="d-flex align-items-center flex-column">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" checked={selectedPlan === index} onChange={() => setPlan(index)} />
                                <h3 className="fs-2 mt-4">{item.number_of_licenses} users</h3>
                            </div>
                            <p className="fs-4 text-bold">€{item.price}/mo.</p>
                            <p>Auto renews monthly</p>
                        </button>
                    </div>
                    ))}
                    
                    <div className="col-lg-4">
                        <button className={`plan rounded-3 py-3 px-5 ${selectedPlan === 2 ? 'active' : ''}`} onClick={() => setPlan(2)}>
                            <div className="d-flex align-items-center flex-column">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" checked={selectedPlan === 2} onChange={() => setPlan(2)} />
                                <h3 className="fs-2 mt-4">Custom</h3>
                            </div>
                            <p>Ask for a budget, the price depends on the quantity of users.</p>
                            <p className="fs-4 text-bold">€-/mo.</p>
                            <p>Auto renews monthly</p>
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center mx-10vw mt-4">
                    <div className="col-lg-4">
                        <button className="btn btn-primary w-100" onClick={buyPlan}>Buy now</button>
                    </div>
                </div>
            </section >
        </div >
    )
}