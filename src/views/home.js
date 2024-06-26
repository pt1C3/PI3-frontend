import CardBigImage from "../components/card-big-img"
import CardIcon from "../components/card-icon"
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import './home.css';

export default function Home() {
    const baseURL = 'http://localhost:3000';
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(baseURL + '/product')
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });

    }, []);



    if (!data) {
        return <div className="wrapper">Loading...</div>;

    }
    return (
        <div className="wrapper bg-white">
            <Helmet>
                <title>Home - LogicLeap</title>
            </Helmet>
            <section className="landing-carousel mb-5 w-100 position-relative">
                <img src={process.env.PUBLIC_URL + "/images/landingCarousel1.png"} className="landing-image" />
                <div className="carousel-content">
                    <div className="w-50">
                        <p class="carousel-title display-4 text-medium text-white mb-3 lh-1">Enter the Creative Vortex</p>
                        <Link className="btn btn-primary fs-5" to="product/1">Buy now</Link>
                    </div>
                    <img src={data[0].icon} className="landing-product-icon rounded-2" />

                </div>
            </section>
            <section className="mb-5 mx-10vw">
                <h1 class="fs-4">Popular</h1>
                <div className="row gx-5">
                    {data.slice(0, 3).map((item, index) => (
                    <CardBigImage title={item.name} category={item.category.designation} image={item.icon} price={item.prices[0].price} toLink={"/product/" + item.productid} discount={item.prices[0].discount_percentage ? item.prices[0].discount_percentage : null}
                    />
                    ))}

                </div>
            </section>
            <section className="pb-5 mx-10vw">
                <h1 class="fs-4">Design Tools</h1>
                <div className="row gx-5">
                {data
                        .filter(item => item.category.designation === 'Design')
                        .slice(0, 3).map((item, index) => (
                            <CardIcon title={item.name} category={item.category.designation} image={item.icon} price={item.prices[0].price} description={item.description} discount={item.prices[0].discount_percentage ? item.prices[0].discount_percentage : null} toLink={'/product/' + item.productid} square="true" />
                        ))}
                    


                </div>
            </section>
        </div>
    )
}