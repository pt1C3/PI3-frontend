import Breadcrumbs from "../components/breadcrumbs";
import { useState } from 'react';
import "./product.css";

export default function Product() {
    const [section, setSection] = useState('features');
    const changeSection = function (sectionID) {
        setSection(sectionID)
    }
    return (
        <div>
            <Breadcrumbs page1="Designer Pack" page2="CreatiVortex" link1="/"></Breadcrumbs>
            <section className="mx-10vw mt-3">
                <div className="row g-4 align-items-center">
                    <div className="col-12 col-xl-6">
                        <div className="d-flex mb-3">
                            <img src={process.env.PUBLIC_URL + "/images/Produto.png"} alt="CreatiVortex" height="150" className="me-4" />
                            <div className=" d-flex justify-content-between flex-fill">
                                <div>
                                    <p className="text-medium fs-3 m-0">CreatiVortex</p>
                                    <p className="text-secondary m-0">Design</p></div>
                                <div className="d-flex align-items-end flex-column mt-auto">
                                    <p className="fs-6 m-0">Starting at <span className="fs-5 text-bold">€19.99/mo.</span></p>
                                    <span>
                                        <button className="btn btn-primary text-bold py-3 px-4">View Plans</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="">Dive into a whirlwind of innovative possibilities as you craft stunning visuals with ease. Whether you're designing graphics, logos, or layouts, CreatiVortex provides intuitive tools and a dynamic workspace to bring your ideas to life. Say hello to endless inspiration with CreatiVortex by your side.</p>
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
                        <button className={`nav-link btn btn-link ${section === 'features' ? 'active' : ''}`} onClick={() => changeSection('features')}>Features</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'releaseNotes' ? 'active' : ''}`} onClick={() => changeSection('releaseNotes')}>Release Notes</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'plans' ? 'active' : ''}`} onClick={() => changeSection('plans')}>Plans</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'requirements' ? 'active' : ''}`} onClick={() => changeSection('requirements')}>Requirements</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn btn-link ${section === 'faq' ? 'active' : ''}`} onClick={() => changeSection('faq')}>FAQ</button>
                    </li>
                </ul>


            </section>
            <section id="requirements" className="my-3" style={{ display: section === 'requirements' ? 'block' : 'none' }}>
                <table class="table mx-10vw">
                    <thead>
                        <th></th>
                        <th>Minimum</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Operating System</td>
                            <td>Windows 10 64bits</td>
                        </tr>
                        <tr>
                            <td>Processor</td>
                            <td>Multicore Intel or AMD processor</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>8GB</td>
                        </tr>
                        <tr>
                            <td>Graphics Card</td>
                            <td><ul><li>1 GB of GPU memory</li><li>GPU with DirectX12</li></ul></td>
                        </tr>
                        <tr>
                            <td>Hard disk space</td>
                            <td>15 GB of available hard disk space</td>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>Internet conectivity is required to activate the software </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="releaseNotes" className="my-3" style={{ display: section === 'releaseNotes' ? 'block' : 'none' }}>
                <div className="rounded-3 p-3 mx-10vw">
                    <p className="text-bold">v1.0.4</p>
                    <p className="text-medium">Changes implemented</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac aliquam sed fringilla nec est. Mattis ipsum eget odio cursus. Placerat vitae quam elit viverra vitae lacus et ut. Integer dis nunc aliquet madduris vitae mauris.</p>
                </div>
            </section>
            <section id="faq" className="my-3" style={{ display: section === 'faq' ? 'block' : 'none' }}>
                <div class="accordion mx-10vw" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header text-bold">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Can I access CreatiVortex offline?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Yes, you can access CreatiVortex offline. However, internet is required for the installation and to access certain features and receive updates.
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}