import CardBigImage from "../components/card-big-img"
import CardIcon from "../components/card-icon"


export default function Home() {
    return (
        <div className="wrapper mx-10vw">
            <div className="container">
                <h1 class="fs-4">Popular</h1>
                <div className="row gx-5">
                    <CardBigImage title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />
                    <CardBigImage title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />
                    <CardBigImage title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />

                </div>
            </div>
            <div className="container">
                <h1 class="fs-4">Design Tools</h1>
                <div className="row gx-5">
                    <CardIcon title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />
                    <CardIcon title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />
                    <CardIcon title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." description="Lorem ipsum dolor sit amet consectetur. Purus dictum tincidunt dictum quam at id est in. Diam proin consequat ipsum sed tempus id erat. " />

                </div>
            </div>
        </div>
    )
}