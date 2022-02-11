import React from 'react';

const Search = () => {
    const [cloth, setCloth] = React.useState('');
    const [result, setResult] = React.useState([]);
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(resp => resp.json())
        .then(data => console.log(data));
    }, []);
    return (
        <div>
            <h1>Welcome to the serach page</h1>
        </div>
    );
}

export default Search;
