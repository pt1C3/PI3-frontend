import CardBigImage from "../components/card-big-img"
import CardIcon from "../components/card-icon"
import { Helmet } from 'react-helmet';
import './home.css';

export default function Home() {
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
                        <button className="btn btn-primary fs-5">Buy now</button>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/Produto.png"} className="landing-product-icon" />

                </div>
            </section>
            <section className="mb-5 mx-10vw">
                <h1 class="fs-4">Popular</h1>
                <div className="row gx-5">
                    <CardBigImage title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." toLink="/product/1"/>
                    <CardBigImage title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />
                    <CardBigImage title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />

                </div>
            </section>
            <section className="mb-5 mx-10vw">
                <h1 class="fs-4">Design Tools</h1>
                <div className="row gx-5">
                    <CardIcon title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." square="true" />
                    <CardIcon title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." square="true" />
                    <CardIcon title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." description="Enjoy limitless entertainment with FunStream, the streaming platform that offers a vast library of movies, series, and music to suit all tastes. Whether you're in the mood for the latest blockbuster, a classic film, or a binge-worthy series, FunStream has it all. Plus, with a diverse range of music from various genres, you'll always find something to suit your mood." square="true" />

                </div>
            </section>
        </div>
    )
}