import React from 'react';
import './cloth.css';

const Product = ({ product }) => {
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [null]);
    return (
        <div>
            <ul>
                <li key={product.id}>
                    <img src={product.image} height="250px" width="180px" alt=""/>
                    <h3>{product.title}</h3>
                    <div><p>{product.description}</p></div>
                    <p>$ {product.price}</p>
                    <h4>Rating: {product.rating.rate}</h4>
                </li>
            </ul>
        </div>
    );
}

export default Product;
