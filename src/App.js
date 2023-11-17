import './App.css';
import { useEffect } from 'react';
import './index.css';
import bgcafe from './bg-cafe.jpg';
import vector from './vector.svg';
import Card from './components/Card';
import {useState} from 'react';
function App() {
  const [products, setProducts] = useState([]);
  const [availproducts, setAvailproducts] = useState(false);
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
  .then(response => response.json())
  .then(data => {
      setProducts(data);
  })
  .catch(error => {
    console.log(error)
  })
  },[products]);
  const styles = {
    backgroundColor: availproducts ? "#6F757C" : ""
  }
  const styles2 = {
    backgroundColor : !availproducts ? "#6F757C" : ""
  }
  return (
    <>
    <div style={{'--image-url': `url(${bgcafe})`}} className='relative bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-top m-0 p-0 h-80 font-bold'>
      <div style={{backgroundImage: `url(${vector})`}} className='absolute top-1/2 right-1/2 translate-x-1/2 bg-zinc-900 rounded-lg min-h-screen w-3/4 z-10 font-fontDM bg-bgpos bg-no-repeat'>
        <div className='top-1/2 left-1/2 flex flex-col items-center justify-center m-2 mt-20'>
          <p className='text-white text-3xl font-extrabold'>Our Collection</p>
          <p className='text-[#6F757C] lg:mx-72 md:mx-24 sm:mx-20 text-center mt-4 font-semibold text-md'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className='flex gap-2 items-center justify-center mt-8'>
            <button className='text-white text-sm p-2 rounded-lg font-semibold' style={styles2} onClick={()=>setAvailproducts(false)}>All Products</button>
            <button className='text-white text-sm pl-4 rounded-lg p-2 font-semibold' style={styles} onClick={()=>setAvailproducts(true)}>Available Now</button>
          </div>
        </div>
        {!availproducts ? 
        <div className='pt-5 flex gap-1 flex-row flex-wrap items-center justify-center'>
        {products.map((product)=>(
          <Card {...product} key={product.id}/>
        ))}
        </div>:
        <div className='pt-5 flex gap-1 flex-row flex-wrap items-center justify-center'>
        {products.map((product)=>(
          product.available && 
          <Card {...product} key={product.id}/>
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
