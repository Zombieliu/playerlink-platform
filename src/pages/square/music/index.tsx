import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Header from "../../../components/header";
import Left from "../../../components/square/left"
import Top from "../../../components/square/top"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const music=[

    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmUdhu1PURkELjsVBp2grKbahBJPUWcosfVaZLTXt2Btuh!list",
        h1:"Coffee",
        h2:"-NMT",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/de1cfc97-6c89-4313-a799-bab26ba3a43f",
        name:"qingshanyun"
    },

]
export default function Music() {
    return (
        <div  className="relative  ">
            <Header></Header>

            <div className="md:pt-16 px-8 flex ">
                <div className="pt-16 md:flex ">
                    <Top></Top>
                    <div>
                        <Left></Left>
                        <div className="md:ml-5 mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                                {music.map((item)=>(
                                    <a key={item.h1} href={item.href} className="md:mx-3 md:mr-5 my-2 transform duration-500 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="rounded-lg border border-gray-300">
                                            <img className="rounded-lg"
                                                 src={item.img} alt=""/>
                                            <div className="bg-black p-5 rounded-b-lg text-white">
                                                <h1>{item.h1}</h1>
                                                <h2 className="text-xl mt-2 ">{item.h2}</h2>
                                                <h3 className="text-gray-600 text-xs">Current price</h3>
                                                <div className="border-b my-3"></div>
                                                <div className="flex mt-5">
                                                    <img className="border-gray-200 border rounded-full w-7 h-7"
                                                         src={item.nameimg} alt=""/>
                                                    <h1 className=" ml-1 mt-1">{item.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>))}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>

            </div>


        </div>

    )}