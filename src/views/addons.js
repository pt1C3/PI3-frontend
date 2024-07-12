import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from "../components/breadcrumbs";
import CardIcon from "../components/card-icon"

export default function Addons() {
    const { productid } = useParams();
    const [product, setProduct] = useState();
    const [addons, setAddons] = useState();
    const baseURL = 'https://pi3-backend.onrender.com';

    useEffect(() => {
        axios.get(baseURL + '/product/' + productid).then(res=>{
            setProduct(res.data)
        });
        axios.get(baseURL + '/addon/list/' + productid).then(res=>{
            setAddons(res.data)
            console.log(res.data)
        });
    }, [])


    
    if (!product || !addons) {
        return <div className="wrapper text-center">Loading...</div>;

    }
    return (
        <div className="wrapper">
            <Helmet>
                <title>Addons - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1={"Produto"} page2="Buy addons" link1={"/owner/product/" + productid} />
            <div className='mx-10vw mt-5'>
                <div className='row bg-white g-3 p-3 regular-border rounded-3'>
                    {addons.map(item => (
                        <CardIcon square="true" title={item.name} price={item.prices[0].price} description={item.description} discount={item.prices[0].discount_percentage ? item.prices[0].discount_percentage : null} toLink={'/payment/addon/' + item.addonid} />
                    ))}

                </div>
            </div>
        </div>
    );
}