import React from 'react';
import Categories from '../Components/Categories'

const Home = () => {
    const [mensClothings, setMensClothings] = React.useState([]);
    const [jewelery, setJewelery] = React.useState([]);
    const [electronics, setElectronics] = React.useState([]);
    const[womensClothings, setWomensClothings] = React.useState([]);

    const loadClothings = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const dataResults = await data.json();
        const _mensClothings = dataResults.filter((value, i, array) => {
            if (array[i].category === "men's clothing") {
                return value;
            }
            return  null;
        });
        setMensClothings(_mensClothings);

        const jeweleryData = dataResults.filter((value, i, array) => {
            if (array[i].category === "jewelery") {
                return value;
            }
            return null;
        });
        setJewelery(jeweleryData);

        const electronicsData = dataResults.filter((value, i, array) => {
            if (array[i].category === "electronics") {
                return value;
            }
            return null;
        });
        setElectronics(electronicsData);
        const _womensClothings = dataResults.filter((value, i, array) => {
            if (array[i].category === "women's clothing") {
                return value;
            }
            return null;
        });
        setWomensClothings(_womensClothings);
        console.log(dataResults);
    }
    React.useEffect(() => {
        loadClothings();
    }, []);
  return (
    <div style={{display: 'flex'},{alignItems: 'stretch'}}>
        <Categories title="men's clothing" products={mensClothings}/>
        <Categories title="Jewelery" products={jewelery}/>
        <Categories title="Electronics" products={electronics}/>
        <Categories title="Women's clothings" products={womensClothings}/>
    </div>
  );
}

export default Home;
