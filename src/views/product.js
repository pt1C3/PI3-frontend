import Breadcrumbs from "../components/breadcrumbs";

export default function Product() {

    return (
        <div>
            <Breadcrumbs page1="Designer Pack" page2="CreatiVortex" link1="/"></Breadcrumbs>
            <section className="mx-10vw mt-4">
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
        </div>
    )
}