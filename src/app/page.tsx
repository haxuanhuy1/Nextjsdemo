"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navabar from '../../component/Navabar'
import React, { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react/headless'
import clsx from 'clsx'
import Styles from './Home.module.scss'
import {configureStore} from '@reduxjs/toolkit'

import rooReducers from '../../redux/Store'
import {Provider} from 'react-redux'
const store = configureStore({
  reducer : rooReducers
})
export default function Home() {

  return (
    <div>
     <Provider store = {store}>
      <Navabar />
     </Provider>
    </div>
  )
}


