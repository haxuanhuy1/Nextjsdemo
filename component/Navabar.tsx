import { useSelector , useDispatch } from 'react-redux';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { decrement } from '../redux/Actions';

export default function Navabar() {
  interface rootData{
    number: number,
    name:string
  }
  // const [dataNav, setDataNav] = useState<any>([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //     const data = await response.json();
  //     setDataNav(data);
  //   }

  //   fetchData();
  // }, []);
const dataStore = useSelector((state:rootData)=> state&& state.number)
console.log(dataStore)
const dispatch = useDispatch()
const handleClick = ()=>{
    dispatch(decrement())
}
  return (
    <div>
    <button onClick={handleClick}>Redux</button>
    <h1>{dataStore}</h1>
    </div>
  );
}

