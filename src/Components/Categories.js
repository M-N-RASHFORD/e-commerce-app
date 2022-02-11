import React from 'react';
import Product from './Cloth';

const Categories = ({ title, products }) => {
    return (
        <div>
            <h1 style={{backgroundColor: '#000', color: '#fff', display: 'block', margin: '-10px', padding:'10px', width: '100%'}}>{title}</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {products.map(product => <li key={product.id}><Product product={product}/></li>)}
            </div>
        </div>
    );
}

export default Categories;
