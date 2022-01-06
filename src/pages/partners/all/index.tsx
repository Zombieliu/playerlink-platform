import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Header from "../../../components/header";
import Top from "../../../components/partners/top";
import Left from "../../../components/partners/left";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const all=[
    {
        href:"/partners/details",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/916742296941244496/unknown.png",
        h1:"GAME",
        h2:"$10.0 PL",
        nameimg:"https://cdn.discordapp.com/attachments/897398778166906911/928298254746140722/liu.jpg",
        name:"Henry"
    },
    {
        href:"/partners/details",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmQhR4GA7ELbcVw36PujUHG1AtBtWoGEUjikVLPdGUwULC!list",
        h1:"Miao",
        h2:"$100.0 PL",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/825ed564-a802-4c45-a7db-d50594cee7af",
        name:"AGOODIDEA"
    },
    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmbVtZS1FG8MGzLhThaxijQh6DW6QPsrCAz4h6Efo39Bes!list",
        h1:"Dawn",
        h2:"$899.0 PL",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/avatar_1635518433170.jpg",
        name:"Able"
    },
    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmUdhu1PURkELjsVBp2grKbahBJPUWcosfVaZLTXt2Btuh!list",
        h1:"Coffee",
        h2:"$200.0 PL",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/de1cfc97-6c89-4313-a799-bab26ba3a43f",
        name:"qingshanyun"
    },
    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmXD5VPSwKBcqT7igVQwQn7B6sCvRXxPxbQzVfL6yjquPD!list",
        h1:"Unbending",
        h2:"400.0 PL",
        nameimg:"https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg",
        name:"SWANGZHE"
    },

    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmdeaaPXiB2VEiGa4byq7sMEip1fB73ybcfEhHjVgHCp3a!list",
        h1:"Stay with Me",
        h2:"800.0 PL",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/33a3d29e-ad14-49d1-a42a-a1b781724e18",
        name:"David"
    },
]
export default function All() {
    return (
        <div  className="relative  ">
            <Header></Header>

            <div className="md:pt-16 px-8 flex ">
                <div className="pt-16 md:flex ">
                    <Top></Top>
                    <div>
                        <Left></Left>
                        <div className="md:ml-5 mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                                {all.map((item)=>(
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