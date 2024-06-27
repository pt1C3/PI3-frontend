import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './business.css';
import axios from 'axios';

export default function FAQ() {
    const baseURL = 'http://localhost:3000';
    const { productid } = useParams();
    const [product, setProduct] = useState({});

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        axios.get(baseURL + '/product/' + productid)
            .then(res => {
                setProduct(res.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });

    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question || !answer) alert("All fields are required. Please fill in all inputs.")
        else {
            axios.post(baseURL + "/faq/create", { question: question, answer: answer, productid: productid })
                .then(res => {
                    alert(res.data.message);
                })
        }
    }

    if (!product) {
        return <div className="wrapper">Loading...</div>;

    }
    return (
        <div className="wrapper" style={{ minHeight: '100vh' }}>
            <Helmet>
                <title>Create FAQ - LogicLeap</title>
            </Helmet>
        </div>
    );
}
