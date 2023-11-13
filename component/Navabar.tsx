import { useSelector , useDispatch } from 'react-redux';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { decrement } from '../redux/Actions';

export default function Navabar() {
 const [demo , setDemo] = useState(1)
  return (
   <div>
   <p>hà xuân huy</p>
   <p>Ptit</p>
   <h1>hihh</h1>
   <p>Nextjs</p>
   </div>
  );
}

