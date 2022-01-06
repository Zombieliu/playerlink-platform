import React, { Fragment } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const user=[
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928298254746140722/liu.jpg",
        name:"Herry",
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630069530665/a01d47fe6e570785.jpg",
        name:"GuangHui",
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630321213490/77f952791fc16829.jpg",
        name:"FengFeng",
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630539305030/b08c0aaa4908598c.jpg",
        name:"BoBo",
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512631030034482/20220106125631.jpg",
        name:"XueYou",
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630786760775/join.jpg",
        name:"Joan",
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928294804633305128/20220105223158.jpg",
        name:"David",
    },
    {
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg",
        name:"Able",
    },




]
export default function Top() {

        return (
            <div className="bg-gray-100   h-96  p-2  md:p-5 rounded-lg ">
                <div>
                    <div className="flex p-2 text-center text-xl"><i className="fa fa-map-marker   pr-2" aria-hidden="true" ></i>
                        <div className="text-base">Status</div></div>
                    <div className="flex text-base grid grid-cols-1 xl:grid-cols-2 mt-2 text-center">
                        <a href="" className="mb-2 mr-1 py-1 px-3 bg-white text-sm  rounded-lg border border-black hover:bg-gray-300 transition duration-200">Hot Serve</a>
                        <a href="" className="mb-2 mr-1 py-1 px-3 bg-white text-sm  rounded-lg border border-black hover:bg-gray-300 transition duration-200">Latest Serve</a>
                        <a href="" className="mb-2 mr-1 py-1 px-3 bg-white text-sm  rounded-lg border border-black hover:bg-gray-300 transition duration-200">Has Offers</a>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="flex p-2 text-center text-xl">
                        <i className="fa fa-connectdevelop pr-2" aria-hidden="true"></i>
                        <div  className="text-base">
                            Collections
                        </div>
                    </div>
                    <form action="" className="mt-2">
                        <div className="ring-1 flex  ">
                            <i className=" fa fa-search p-2 bg-white text-gray-400" aria-hidden="true"></i>
                            <input type="text" className=" outline-none px-1 w-11/12"  placeholder="Filter Collections"/>
                        </div>
                        <div className=" mt-2 h-20 md:h-32 md:w-56  overflow-auto">
                            {user.map((item)=>(
                                <a key={item.name} href="">
                                    <div className="flex my-2 text-center">
                                        <img className=" rounded-full w-8 h-8"
                                             src={item.img} alt=""/>
                                        <h1 className="px-3 mt-1  truncate ">{item.name} </h1>
                                    </div></a>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        );

}

