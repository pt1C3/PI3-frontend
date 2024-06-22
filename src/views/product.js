import Breadcrumbs from "../components/breadcrumbs";
import { useState, useEffect } from 'react';
import "./product.css";
import { Helmet } from 'react-helmet';

export default function Product() {
    const [section, setSection] = useState('features');
    const [selectedPlan, setPlan] = useState(0);

    return (
        <div className="wrapper bg-white">
            <Helmet>
                <title>CreatiVortex - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Designer Pack" page2="CreatiVortex" link1="/"></Breadcrumbs>
            <section className="mx-10vw mt-3">
                <div className="row g-4 align-items-top">
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
                                        <button className="btn btn-primary text-bold py-3 px-4" onClick={() => setSection('plans')}>View Plans</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p>Dive into a whirlwind of innovative possibilities as you craft stunning visuals with ease. Whether you're designing graphics, logos, or layouts, CreatiVortex provides intuitive tools and a dynamic workspace to bring your ideas to life. Say hello to endless inspiration with CreatiVortex by your side.</p>
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
            <section id="features" className="my-3" style={{ display: section === 'features' ? 'block' : 'none' }}>
                <p>
                'Unlock the full spectrum of your creativity with CreatiVortex – the ultimate toolkit for graphic design aficionados and visual storytellers alike. Step into a realm where imagination knows no bounds and unleash your artistic prowess with confidence. CreatiVortex offers a rich tapestry of features tailored to elevate your design journey to new heights.[p]At the heart of CreatiVortex lies a robust suite of intuitive tools meticulously crafted to empower you in every aspect of your creative process. From crafting eye-catching graphics and captivating logos to sculpting intricate layouts with precision, CreatiVortex is your trusted companion for bringing your boldest ideas to life.[p]Embrace a seamless workflow with our dynamic workspace, meticulously designed to adapt to your unique needs and preferences. Dive deep into a whirlwind of innovative possibilities as you explore a vast array of design elements, effortlessly blending colors, shapes, and textures to create visually stunning masterpieces.[p]Experience the freedom to express yourself like never before with CreatiVortex's versatile array of features. From advanced layering and masking capabilities to seamless integration with popular design formats, CreatiVortex empowers you to unleash your creativity with unparalleled flexibility and control.[p]But that's not all – CreatiVortex is more than just a design tool; it's a wellspring of inspiration waiting to be tapped. Immerse yourself in a world of endless creativity, where every stroke of your digital brush is infused with boundless potential.[p]Join the ranks of visionary creators and design aficionados who have made CreatiVortex their go-to platform for turning dreams into reality. Say hello to a new era of design innovation and let CreatiVortex be your guiding light on your creative journey. With CreatiVortex by your side, the possibilities are truly limitless.'
                </p>
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
            <section id="plans" className="my-3" style={{ display: section === 'plans' ? 'block' : 'none' }}>
                <div className="plans-wrapper mx-10vw row g-4">
                    <div className="col-lg-4">
                        <button className={`plan rounded-3 py-3 px-5 ${selectedPlan === 0 ? 'active' : ''}`} onClick={() => setPlan(0)}>
                            <div className="d-flex align-items-center flex-column">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" checked={selectedPlan === 0} onChange={() => setPlan(0)} />
                                <h3 className="fs-2 mt-4">10 users</h3>
                            </div>
                            <p className="fs-4 text-bold">€359.99/yr.</p>
                            <p>Auto renews annually</p>
                        </button>
                    </div>
                    <div className="col-lg-4">
                        <button className={`plan rounded-3 py-3 px-5 ${selectedPlan === 1 ? 'active' : ''}`} onClick={() => setPlan(1)}>
                            <div className="d-flex align-items-center flex-column">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" checked={selectedPlan === 1} onChange={() => setPlan(1)} />
                                <h3 className="fs-2 mt-4">100 users</h3>
                            </div>
                            <p className="fs-4 text-bold">€649.99/yr.</p>
                            <p>Auto renews annually</p>
                        </button>
                    </div>
                    <div className="col-lg-4">
                        <button className={`plan rounded-3 py-3 px-5 ${selectedPlan === 2 ? 'active' : ''}`} onClick={() => setPlan(2)}>
                            <div className="d-flex align-items-center flex-column">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" checked={selectedPlan === 2} onChange={() => setPlan(2)} />
                                <h3 className="fs-2 mt-4">Custom</h3>
                            </div>
                            <p>Ask for a budget, the price depends on the quantity of users.</p>
                            <p className="fs-4 text-bold">€-/yr.</p>
                            <p>Auto renews annually</p>
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center mx-10vw mt-4">
                    <div className="col-lg-4">
                        <button className="btn btn-primary w-100">Buy now</button>
                    </div>
                </div>
            </section >
        </div >
    )
}