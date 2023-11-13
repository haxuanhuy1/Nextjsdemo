import { useSelector , useDispatch } from 'react-redux';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { decrement } from '../redux/Actions';

export default function Navabar() {
 
  return (
   <div>
    <p>Aloo anh em</p>
    <p>branch</p>
    <h1>Navarbar</h1>
    <p>Hello nextjs</p>
    <p>HEllo anh em</p>
   </div>
  );
}

