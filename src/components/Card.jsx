import React from 'react'
import star from '../Star_fill.svg';
import nostar from '../Star.svg';
const Card = ({image, name, price, rating, votes, available, popular}) => {
  // const [votings, setVotes] = useState();
  // useEffect(()=>{
  //   setVotes(votes);
  // },[])
  return (
    <div className='flex flex-row flex-wrap p-4'>
      <div className='flex flex-col'>
      <img src={image} className='relative rounded-xl border border-black w-68 h-40' alt='img'></img>
      {popular ? <p className='absolute m-3 p-1 px-3 bg-[#F6C768] rounded-xl text-xs font-semibold'>Popular</p> :""}
      <div className='flex flex-row justify-between pt-4'>
        <p className='text-white font-semibold'>{name}</p>
        <p className='bg-[#BEE3CC] text-black rounded-md p-1 text-xs font-semibold'>{price}</p>
      </div>
      <div className='flex flex-row items-center pt-4'>
      {rating!==null ? 
        <>
        <img src={star} alt='img'></img>
        <p className='text-white text-sm font-semibold pl-2'>{rating}</p>
        </>
        :
        <>
        <img src={nostar} alt='img'></img>
        <p className='text-white text-sm font-semibold pl-2'>No ratings</p>
        </>
        }
        {votes>0 ?
        <p className='text-[#6F757C] pl-1 text-sm font-semibold'>({votes}) votes</p>
        :
        <p className='text-[#6F757C] pl-1 text-sm font-semibold'></p>
        }
        {!available ? <p className='text-[#ED735D] font-semibold text-sm pl-14'>Sold Out</p>:""}
      </div>
    </div>
    </div>
  )
}

export default Card;
