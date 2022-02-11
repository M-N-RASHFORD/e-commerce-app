import React from 'react';
import Product from './Cloth';

const Categories = ({ title, products }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {products.map(product => <li key={product.id}><Product product={product}/></li>)}
            </div>
        </div>
    );
}

export default Categories;
