/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, {Fragment, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import Header from"../../components/header"
import Overview from"../../components/overview"
import Backstagelife from "../../components/backstagelife";

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Domains', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Backstage() {


    return (
        <>  <div><Header></Header>
            <div>

    <div className="relative min-h-full flex flex-col">
    {/* Navbar */}
    {/* 3 column wrapper */}
    <div className="flex-grow w-full max-w-7xl mt-20 mx-auto xl:px-8 lg:flex">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 min-w-0 bg-white xl:flex">
        {/* Account profile */}
        <Backstagelife></Backstagelife>

    {/* Projects List */}
    <div className="bg-white lg:min-w-0 lg:flex-1">
        <Overview></Overview>
    </div>
    </div>
    {/* Activity feed */}
    <div className="">

    </div>
    </div>
    </div></div>
            </div>
    </>
)
}
