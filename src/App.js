import './App.css';
import './index.css';
import bgcafe from './bg-cafe.jpg';
import vector from './vector.svg';
import Card from './components/Card';
import {useState} from 'react';
function App() {
  const [products, setProducts] = useState([]);
  const [availproducts, setAvailproducts] = useState(false);
  const listAllProd=()=>{
    setAvailproducts(prev => !prev);
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
  .then(response => response.json())
  .then(data => {
      setProducts(data);
  })
  .catch(error => {
    console.log(error)
  })
  }
  const listAvail =()=>{
    setAvailproducts(true);
  }
  return (
    <>
    <div style={{'--image-url': `url(${bgcafe})`}} className='relative bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-top m-0 p-0 h-80'>
      <div style={{backgroundImage: `url(${vector})`}} className='absolute top-1/2 right-1/2 translate-x-1/2 bg-zinc-900 bg-no-repeat bg-top bg-auto rounded-lg min-h-screen w-3/4 z-10'>
        <div className='flex flex-col items-center justify-center m-2 mt-12'>
          <p className='text-white text-3xl font-bold'>Our Collection</p>
          <p className='text-[#6F757C] mx-72 text-center mt-4 font-semibold'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className='flex gap-1 items-center justify-center mt-8'>
            <button className='text-white text-sm bg-[#6F757C] p-2 rounded-lg font-semibold' onClick={listAllProd}>All Products</button>
            <button className='text-white text-sm pl-4 font-semibold' onClick={listAvail}>Available Now</button>
          </div>
        </div>
        {!availproducts ? 
        <div className='pt-10 flex gap-1 flex-row flex-wrap items-center justify-center'>
        {products.map((product)=>(
          <Card image={product.image} name={product.name} price={product.price} rating={product.rating} votes={product.votes} available={product.available} popular={product.popular}/>
        ))}
        </div>:
        <div className='pt-10 flex gap-1 flex-row flex-wrap items-center justify-center'>
        {products.map((product)=>(
          product.available && 
          <Card image={product.image} name={product.name} price={product.price} rating={product.rating} votes={product.votes} available={product.available} popular={product.popular}/>
        ))}
        </div>
        }
      </div>
    </div>
    <div className='bg-black min-h-screen m-0 p-0'>
    </div>
    </>
  );
}

export default App;
