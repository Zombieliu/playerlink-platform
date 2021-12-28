import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const user=[
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/QmcpYySYAhcNARxQtRsnH6kf1ae7mgPL7xUn7XFsb6gzNu",
        name:"24 Hours Have Just Passed",
        },
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/QmeT3KQF5uKbrzLdcYLNEDixgL3CWLxzYpY4iA3HxbUSMe",
        name:"Herry",
    },
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/QmWdawTaxkJhUacTFw6xXpxAFQCVjVqYs53zQjT4e3dFDY",
        name:"David",
    },
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/Qmbok42d9DCq8iyxBepCXGRLrSMNRtEKq3Woq3stk9LRH1",
        name:"Wang",
    },
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/QmcpYySYAhcNARxQtRsnH6kf1ae7mgPL7xUn7XFsb6gzNu",
        name:"24 Hours Have Just ",
    },
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/QmeT3KQF5uKbrzLdcYLNEDixgL3CWLxzYpY4iA3HxbUSMe",
        name:"Herry1",
    },
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/QmWdawTaxkJhUacTFw6xXpxAFQCVjVqYs53zQjT4e3dFDY",
        name:"David1",
    },
    {
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/logo/Qmbok42d9DCq8iyxBepCXGRLrSMNRtEKq3Woq3stk9LRH1",
        name:"Wang2",
    },




]
const type=[
    {
      href:"",
      title:"ALL",
    },
    {
        href:"",
        title:"Art",
    },
    {
        href:"",
        title:"Music",
    },
    {
        href:"",
        title:"ACG",
    },
    {
        href:"",
        title:"Sports",
    },
    {
        href:"",
        title:"Trendy",
    },
    {
        href:"",
        title:"Game",
    },
    {
        href:"",
        title:"Collectibles",
    },
]
const commodity=[
    {
      href:"",
      img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmQhR4GA7ELbcVw36PujUHG1AtBtWoGEUjikVLPdGUwULC!list",
      h1:"Miao",
      h2:"-NMT",
      nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/825ed564-a802-4c45-a7db-d50594cee7af",
      name:"AGOODIDEA"
    },
    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmbVtZS1FG8MGzLhThaxijQh6DW6QPsrCAz4h6Efo39Bes!list",
        h1:"Dawn",
        h2:"-NMT",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/avatar_1635518433170.jpg",
        name:"AGOODIDEA"
    },
    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmUdhu1PURkELjsVBp2grKbahBJPUWcosfVaZLTXt2Btuh!list",
        h1:"Coffee",
        h2:"-NMT",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/de1cfc97-6c89-4313-a799-bab26ba3a43f",
        name:"qingshanyun"
    },
    {
        href:"",
        img:"https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmQhR4GA7ELbcVw36PujUHG1AtBtWoGEUjikVLPdGUwULC!list",
        h1:"Unbending",
        h2:"-NMT",
        nameimg:"https://nft-1257035533.cos.accelerate.myqcloud.com/user/825ed564-a802-4c45-a7db-d50594cee7af",
        name:"SWANGZHE"
    },
]
export default function Partners() {

    return (
        <div  className="relative  ">
     <div className="md:pt-16 px-8 flex ">
         <div className="pt-16 md:flex ">
         <div className="bg-gray-100 p-2 md:p-5 rounded-lg ">
             <div>
             <div className="flex p-2 text-center text-xl"><i className="fa fa-map-marker   pr-2" aria-hidden="true" ></i>
                 <div className="text-base">Status</div></div>
             <div className="flex text-base grid grid-cols-1 xl:grid-cols-2 mt-2 text-center">
                 <a href="" className="mb-2 mr-1 py-1 px-3 bg-white rounded-lg border border-black hover:bg-gray-300 transition duration-200">Buy Now</a>
                 <a href="" className="mb-2 mr-1 py-1 px-3 bg-white rounded-lg border border-black hover:bg-gray-300 transition duration-200">On Auction</a>
                 <a href="" className="mb-2 mr-1 py-1 px-3 bg-white rounded-lg border border-black hover:bg-gray-300 transition duration-200">Has Offers</a>
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
                     <div className=" mt-2 h-20 md:h-80 md:w-56  overflow-auto">
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
             <div>
             <div className="mt-3 md:mt-0 md:ml-6">
                 <div className="flex flex-wrap justify-between">
                     {type.map((item)=>(
                     <a key={item.title} href={item.href}
                        className="px-2 md:px-4 py-1 md:mr-6 rounded-lg text-base  md:text-lg text-gray-500 hover:bg-black hover:text-white ">
                         {item.title}</a>
                         ))}
                 </div>

             </div>

             <div className="flex  justify-end">
                 <Menu as="div" className="relative inline-block text-left">
                     <div>
                         <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                             Recently Listed
                             <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                         </Menu.Button>
                     </div>

                     <Transition
                         as={Fragment}
                         enter="transition ease-out duration-100"
                         enterFrom="transform opacity-0 scale-95"
                         enterTo="transform opacity-100 scale-100"
                         leave="transition ease-in duration-75"
                         leaveFrom="transform opacity-100 scale-100"
                         leaveTo="transform opacity-0 scale-95"
                     >
                         <Menu.Items className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                             <div className="py-1">
                                 <Menu.Item>
                                     {({ active }) => (
                                         <a
                                             href="#"
                                             className={classNames(
                                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                 'block px-4 py-2 text-sm'
                                             )}
                                         >
                                             Recently Created
                                         </a>
                                     )}
                                 </Menu.Item>
                                 <Menu.Item>
                                     {({ active }) => (
                                         <a
                                             href=""
                                             className={classNames(
                                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                 'block px-4 py-2 text-sm'
                                             )}
                                         >
                                             Cheapest
                                         </a>
                                     )}
                                 </Menu.Item>
                                 <Menu.Item>
                                     {({ active }) => (
                                         <a
                                             href="#"
                                             className={classNames(
                                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                 'block px-4 py-2 text-sm'
                                             )}
                                         >
                                             Oldest
                                         </a>
                                     )}
                                 </Menu.Item>
                                 <Menu.Item>
                                     {({ active }) => (
                                         <a
                                             href="#"
                                             className={classNames(
                                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                 'block px-4 py-2 text-sm'
                                             )}
                                         >
                                             Most pledged
                                         </a>
                                     )}
                                 </Menu.Item>
                             </div>
                         </Menu.Items>
                     </Transition>
                 </Menu></div>

                 <div className="md:ml-5 mt-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                     {commodity.map((item)=>(
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