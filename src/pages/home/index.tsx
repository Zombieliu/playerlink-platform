import React, {useRef ,useEffect} from 'react'
import Header from"../../components/header"
const DAPP=[
    {
        id:"1",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928298254746140722/liu.jpg",
        title:"Henry",
        text:"GameRandomServe",
        button1:"GitHub address",
        button1href:"https://github.com/Zombieliu/nodejs-ts-template/tree/near-koa",
        button2:"Visit Serve",
        button2href:"/square/details",

    },
    {
        id:"2",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg",
        title:"Able",
        text:"Wang",
        button1:"GitHub address",
        button1href:"#",
        button2:"Visit Serve",
        button2href:"#",

    }, {
        id:"3",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928294804633305128/20220105223158.jpg",
        title:"David",
        text:"Xing",
        button1:"GitHub address",
        button1href:"#",
        button2:"Visit Serve",
        button2href:"#",

    },{
        id:"4",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630786760775/join.jpg",
        title:"Join",
        text:"Ma",
        button1:"GitHub address",
        button1href:"#",
        button2:"Visit Serve",
        button2href:"#",

    }
]
const Tool=[
    {
        id:"1",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630539305030/b08c0aaa4908598c.jpg",
        title:"FengFeng",
        text:"Feng",
        button1:"GitHub address",
        button1href:"#",
        button2:"Visit Serve",
        button2href:"#",

    },]
const Otehr=[
    {
        id:"1",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512631030034482/20220106125631.jpg",
        title:"GuangHui",
        text:"Cheng",
        button1:"GitHub address",
        button1href:"#",
        button2:"Visit Serve",
        button2href:"",

    },]
const toend=[
    {
        title:"Quick Entry",
        h1:"About PlayerLink",
        h1url:"#",
        h2:"Manual",
        h2url:"#",
        h3:"Update record",
        h3url:"#",
        h4:"Any feedback",
        h4url:"#",
        h5:"",
        h5url:"",
    },
    {
        title:"Links",
        h1:"Protocol",
        h1url:"https://playerlink.org/",
        h2:"Network ",
        h2url:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fplayerlink.network#/explorer",
        h3:"Foundation",
        h3url:" https://playerlink.foundation/",
        h4:"Ventures ",
        h4url:"https://playerlink.ventures/",
        h5:"Capital ",
        h5url:" https://playerlink.capital/"
    },{
        title:"社区",
        h1:"Discord",
        h1url:"https://discord.gg/Hypkryxwsb",
        h2:"Twitter",
        h2url:"#",
        h3:"Instagram",
        h3url:"#",
        h4:'Medium',
        h4url:"",
        h5:"",
        h5url:"",
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Home() {
    let dot1=useRef(null)
    let dot2=useRef(null)
    let dot3=useRef(null)
    let picture1=useRef(null)
    let picture2=useRef(null)
    let picture3=useRef(null)
    const TapDot1=()=>{
        // @ts-ignore
        picture1.current.style.transform="translateX(-0%)"
        picture2.current.style.transform="translateX(-0%)"
        picture3.current.style.transform="translateX(-0%)"
        dot1.current.style.background="white"
        dot2.current.style.background=""
        dot3.current.style.background=""

    }
    const TapDot2=()=>{
        picture1.current.style.transform="translateX(-0%)"
        picture2.current.style.transform="translateX(-100%)"
        picture3.current.style.transform="translateX(-0%)"
        dot2.current.style.background="white"
        dot1.current.style.background=""
        dot3.current.style.background=""

    }
    const TapDot3=()=>{
        picture1.current.style.transform="translateX(-0%)"
        picture2.current.style.transform="translateX(-0%)"
        picture3.current.style.transform="translateX(-200%)"
        dot3.current.style.background="white"
        dot1.current.style.background=""
        dot2.current.style.background=""

    }


    const left=()=>{
        if(dot1.current.style.background=="white"){
            TapDot3()
        }else{
            if(dot2.current.style.background=="white"){
                TapDot1()
        }else{
          if(dot3.current.style.background=="white"){
              TapDot2()
                }
            }
        }
    }
    const right=()=>{
        if(dot1.current.style.background=="white"){
            TapDot2()
        }else{
            if(dot2.current.style.background=="white"){
                TapDot3()
            }else{
                if(dot3.current.style.background=="white"){
                    TapDot1()
                }
            }
        }
    }
   React.useEffect(()=>{
        dot1.current.style.background="white"
        setInterval(()=>{

        },8000)

    },[])

    return (



            <main>
                <Header></Header>
                <div>

                    {/* Hero card */}
            <div className="relative  bg-gray-100">

            <div className="pt-10">

            <div className="relative mt-20 w-11/12  md:w-10/12  mx-auto ">

             <div className="w-full h-full relative flex overflow-x-hidden  " >

                   <img ref={picture1} className="w-full h-full  rounded-lg " src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=1533&h=575&f=webp&q=90" alt=""/>
                   <img ref={picture2} className="w-full h-full  rounded-lg" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7a7e37cc85f0a407206a2061e6bf2cf.jpg?w=2452&h=920" alt=""/>
                   <img ref={picture3} className="w-full h-full  rounded-lg" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=1533&h=575&f=webp&q=90" alt=""/>
                   </div>
                     <div >
                      <div onClick={left} className="absolute ml-2 top-1/2 text-center text-sm md:text-xl text-gray-300 hover:text-black ">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                      </div>
                        <div onClick={right} className="absolute mr-2 right-0 top-1/2  text-center text-sm md:text-xl text-gray-300 hover:text-black ">

                            <i className="fa fa-chevron-right" aria-hidden="true"></i>

                               </div>
                               </div>
                          <div  className="w-full  absolute flex  bottom-2 justify-center">
                          <div onClick={TapDot1} ref={dot1} className="bg-gray-300 w-3 h-3 px-2 mx-1 rounded-full border hover:bg-white"></div>
                          <div onClick={TapDot2} ref={dot2} className="bg-gray-300 w-3 h-3 px-2 mx-1 rounded-full border hover:bg-white"></div>
                          <div onClick={TapDot3} ref={dot3} className="bg-gray-300 w-3 h-3 px-2 mx-1 rounded-full border hover:bg-white"></div>

                        </div>
                      </div>
                        </div>

                <div className="relative pt-20 px-4 py-3 sm:px-6  xl:px-32">
                            {/*FIRST*/}
                            <div>
                                <div className="flex">
                            <div className="py-2 flex text-2xl font-extrabold">Hot Serve </div><div className="w-16 h-15 ml-2 -mb-4" style={{backgroundImage:"url('https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png') "}}></div></div>
                            <div  className="mt-5 flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {DAPP.map((item)=>(
                                    <div key={item.id} className="m-2 rounded-lg bg-white  transform duration-700 hover:shadow-2xl hover:-translate-y-1">
                                    <div className="p-5 text-center ">
                                    <div className="">
                                        <img className="w-28  py-5 mx-auto object-contain"
                                             src= {item.img} alt=""/>
                                    </div>
                                    <div className="py-8 font-bold text-lg">{item.title}</div>
                                    <div className="py-5 px-8 text-gray-400 text-base font-normal">{item.text}</div>
                                    <div className="flex mt-5 justify-center">
                                        <div><a className="text-xs font-medium rounded-lg p-2 border border-gray-400 mr-5 hover:bg-gray-400 hover:text-white"
                                                 href={item.button1href}>{item.button1}</a></div>
                                        <div><a className="text-xs font-medium text-blue-600 rounded-lg p-2 px-3 border border-blue-600 hover:bg-blue-500 hover:text-white"
                                                 href={item.button2href}>{item.button2}</a></div>
                                    </div>
                                </div>
                                </div>))}

                            </div>
                        </div>
                        {/* TWO   */}
                            <div>
                            <div className="pt-7 text-2xl font-extrabold">Latest Serve</div>
                            <div className="mt-5 flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {Tool.map((item)=>(
                                    <div key={item.id} className="m-2 rounded-lg bg-white  transform duration-700 hover:shadow-2xl hover:-translate-y-1 ">
                                        <div className="p-5 text-center ">
                                            <div >
                                                <img className="w-28 py-5 mx-auto object-contain"
                                                     src= {item.img} alt=""/>
                                            </div>
                                            <div className="py-8 font-bold text-lg">{item.title}</div>
                                            <div className="py-5 px-8 text-gray-400 text-base font-normal">{item.text}</div>
                                            <div className="flex mt-5 justify-center">
                                                <div><a className=" text-xs font-medium rounded-lg p-2 border border-gray-400 mr-5 hover:bg-gray-400 hover:text-white"
                                                        href={item.button1href}>{item.button1}</a></div>
                                                <div><a className="text-xs font-medium text-blue-600 rounded-lg p-2 px-3 border border-blue-600 hover:bg-blue-500 hover:text-white"
                                                        href={item.button2href}>{item.button2}</a></div>
                                            </div>
                                        </div>
                                    </div>))}

                            </div>
                            </div>
                        {/*   three */}
                            <div>
                                <div className="pt-7 text-2xl font-extrabold">Service In Preparation </div>
                                <div className="mt-5 flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {Otehr.map((item)=>(
                                        <div key={item.id} className="m-2 rounded-lg bg-white  transform duration-700 hover:shadow-2xl hover:-translate-y-1">
                                            <div className="p-5 text-center ">
                                                <div >
                                                    <img className="w-28 py-5 mx-auto object-contain"
                                                         src= {item.img} alt=""/>
                                                </div>
                                                <div className="py-8 font-bold text-lg">{item.title}</div>
                                                <div className="py-5 px-8 text-gray-400 text-base font-normal">{item.text}</div>
                                                <div className="flex mt-5 justify-center">
                                                    <div><a className=" text-xs font-medium rounded-lg p-2 border border-gray-400 mr-5 hover:bg-gray-400 hover:text-white"
                                                            href={item.button1href}>{item.button1}</a></div>
                                                    <div><a className="text-xs font-medium text-blue-600 rounded-lg p-2 px-3 border border-blue-600 hover:bg-blue-500 hover:text-white"
                                                            href={item.button2href}>{item.button2}</a></div>
                                                </div>
                                            </div>
                                        </div>))}

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Logo cloud */}
                    <div className="bg-gray-100">
                        <div className="pt-36 pb-12 sm:px-6 lg:px-8 bg-gray-800">
                            <div className="md:flex md:justify-around">
                                {toend.map((ends)=>(
                                    <div key={ends.title} className="">
                                        <div className="mb-6">
                                            <h1 className="flex justify-center text-xl font-bold text-gray-200 mb-4">
                                                {ends.title}
                                            </h1>
                                            <h2 className="">
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h1url}>{ends.h1}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h2url}>{ends.h2}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h3url}>{ends.h3}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h4url}>{ends.h4}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h5url}>{ends.h5}</a></p>
                                            </h2>
                                        </div>
                                    </div>))}
                            </div>
                            <p className=" text-center p-5 text-left mt-16 text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                ©2022 PlayerLink-Platform,A service platform built on PlayerLink.  All RIGHTS RESERVED.
                            </p>

                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>

    )
}
