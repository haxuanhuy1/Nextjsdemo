import { useSelector , useDispatch } from 'react-redux';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { decrement } from '../redux/Actions';

export default function Navabar() {
 
  return (
   <div>
    <span>Ptit</span>
    <h1>hà xuân huy</h1>
    <h1>Lê thị hà</h1>
    <p>Nextjs vesion 13</p>
    <p>Navarbar</p>
    <h1>Navarbar</h1>
   </div>
  );
}

