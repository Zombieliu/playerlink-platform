import React, {Fragment, useEffect, useState} from 'react'
import Link from 'next/link'
import {withRouter,} from "next/router"
import {Dialog,Menu, Popover, Transition} from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon, CheckIcon, ExclamationIcon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import {connectcheck, polkapi} from "../../chain/polkadot/api";






function classNames(...classes) {
    return classes.filter(Boolean).join(' ')}
const navigation = [
    { name: 'Home',    href: '/home',current:false},
    {name: 'Square ',href: '/square/all',current:false },
    // { name: 'Pricing', href: '#' ,current:false},
    // { name: 'Company', href: '#',current:false },

]
 function Header() {
    //图标
    const [loginstate,setloginstate] = useState("Sign up")
     //如果安装
     const [opentrue, setOpentrue] = useState(false)
     //如果没安装
     const[openfalse,setOpenfalse]=useState(false)
     //钱包列表
     const [openat, setOpenat] = useState(false)
     //钱包数据
     const[account,setAccount]=useState([])
     //钱包余额
     const[money,setMoney]=useState(0)
     //个人信息列表
     const[openuser,setOpenuser]=useState(false)
   let allAccounts
     async function login(){
        if (loginstate==="Sign up"){
         const isWeb3Injected = (await import("@polkadot/extension-dapp")).isWeb3Injected;
         const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
         const allInjected = await web3Enable('my cool dapp');
         const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
          allAccounts = await web3Accounts();
         if (isWeb3Injected){
             setOpenfalse(false)
             setOpentrue(true)
             setAccount(allAccounts)
             console.log(allAccounts)
         }else {
             setOpenfalse(true)
         }
     }
    else{
            const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
            const allInjected = await web3Enable('my cool dapp');
            const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
            allAccounts = await web3Accounts();
            setAccount(allAccounts);
            console.log(allAccounts);
            select()
        }
    }
     const select =()=>{
         setOpenfalse(false)
         setOpentrue(false)
         setOpenat(true)
     }
     let atname
     let ataddress
     const getvalue =(e)=>{
         atname =e.currentTarget.firstElementChild.innerHTML
         ataddress = e.currentTarget.firstElementChild.getAttribute('id')
     }

   const loginaccount=()=>{
        if (atname){
       setOpenat(false)
       setloginstate(atname)}
       localStorage.setItem('walletname',atname)
       localStorage.setItem('address',ataddress)
       getbalance(ataddress)

  }

      const flexible=()=>{

          setOpenuser(true)

  }
     const getbalance = async (address) =>{
         const Alice = address;

         const api = await polkapi();
         await connectcheck();

         // @ts-ignore
         let { data: { free: previousFree }, nonce: previousNonce } = await api.query.system.account(Alice);
         const balance_data = await api.query.system.account(Alice);

         // @ts-ignore
         const balance = balance_data.data.free.toString().slice(0,-10)
        if(!balance){
            setMoney(0)
        }else{
            setMoney(balance)
        }
     }

     useEffect(()=>{
         let walletname = localStorage.getItem('walletname')
         if (walletname) {
             let address = localStorage.getItem('address')
             setloginstate(walletname)
             getbalance(address)
         }
         else{
             setloginstate('Sign up')
         }
     },[])

        return (

            <div className=" bg-white">
            <header>
                <Popover className="relative bg-white ">
                    <div className="flex fixed z-20 inset-x-0 bg-white justify-between items-center  mx-auto px-4 py-3 sm:px-6 md:justify-start md:space-x-10 xl:px-32 border-b border-black">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png"
                                    alt=""
                                />
                            </a>
                            <Popover.Group as="nav" className="hidden -mr-4 2xl:ml-4 md:flex space-x-10  " aria-label="Tabs">


                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href}  >

                                        <a   className={classNames(
                                            item.current
                                                ? 'border-indigo-500 text-indigo-600'
                                                : '',
                                            'text-base rounded-lg p-2 font-medium text-black hover:bg-blue-500'
                                        )}
                                             >{item.name}</a>
                                    </Link>


                                ))}
                            </Popover.Group>
                        </div>


                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            {/*<form action="" className="">*/}
                            {/*    <div className="ring-1 flex  ">*/}
                            {/*        <input type="text" className="w-11/12 outline-none px-1"/>*/}
                            {/*        <i className=" fa fa-search p-2" aria-hidden="true"></i>*/}
                            {/*    </div>*/}
                            {/*</form>*/}

                            {/*钱包金额*/}
                            <div className="-mr-8 border-blue-300 bg-gray-100 px-4 py-2 rounded-l-lg p-1 flex justify-end">
                                {money} <div className="ml-0.5">PL</div>
                            </div>
                            <button
                                onClick={login}
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-400 text-white"
                            >
                                {loginstate}
                            </button>

                            {/*设置区域*/}
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className=" rounded-full text-2xl flex items-center text-gray-400 hover:text-gray-600 ">
                                        <span className="sr-only">Open options</span>
                                        <i className="fa fa-cog  p-2" aria-hidden="true"></i>
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
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href="/backstage"
                                                    >
                                                        <a className=" hover:bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm" >
                                                            Login Backstage</a>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="  ">
                                        <form action="">
                                            <div className="ring-1 flex ">
                                                <input type="text"  className="w-11/12 outline-none px-1"/>
                                                <i className=" fa fa-search p-2" aria-hidden="true"></i>
                                            </div>
                                        </form>
                                    </div>

                                    {navigation.map((item) => (
                                        <div   key={item.name} className="m-1 pt-2 text-center ">
                                            <Link href={item.href}>
                                            <a


                                                className=" p-1  text-xl rounded-lg bg-indigo-300 font-medium text-gray-50"
                                            >
                                                {item.name}
                                            </a></Link></div>
                                    ))}

                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className=" flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Sign up
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>
                <Transition.Root show={opentrue} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpentrue}>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 ">
                                    <div>
                                        <div className='flex justify-end text-xl'>
                                            <button  onClick={() => setOpentrue(false)}
                                                     className="fa fa-times " aria-hidden="true"></button>
                                        </div>

                                        <div className="mx-auto flex items-center justify-center h-16 w-16 p-1 rounded-full ">
                                            <img src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png" alt=""/>
                                        </div>
                                        <div className="text-center font-bold">
                                            Connect wallet
                                        </div>
                                        <div className="text-center text-sm">
                                            To start using Playerlink Apps
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5 border-t ">
                                            <Dialog.Title as="h3" className="mt-3 text-lg leading-6 font-medium text-gray-900">
                                                <button onClick={select}>
                                                    <div className="flex justify-center">
                                                        <img className="w-10 h-10" src="https://cdn.discordapp.com/attachments/876498266550853642/908665467273613392/unknown.png" alt=""/>
                                                        <h1 className="ml-2 mt-2">Polkadot[.js] extension</h1>
                                                        <div className="text-center mt-1.5 text-xl"><i className="ml-10  fa fa-arrow-right" aria-hidden="true"></i></div>
                                                    </div>
                                                </button>
                                            </Dialog.Title>
                                            <div className="mt-2">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 flex justify-center text-sm px-1 md:px-20 ">
                                        By connecting, I accept Playerlink
                                        <div><a className="text-blue-400 ml-0.5" href="">Terms of Service</a></div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openfalse} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenfalse}>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6 ">
                                    <div>
                                        <div className='flex justify-end text-xl'>
                                            <button  onClick={() => setOpenfalse(false)}
                                                     className="fa fa-times " aria-hidden="true"></button>
                                        </div>

                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-2">
                                            <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="text-center font-bold">
                                            Connection Failed
                                        </div>
                                        <div className="mt-3 px-5 sm:mt-5 border-t ">
                                            <div className="flex my-3">1.Download Polkadot[js] Extension <a  className="text-blue-400 ml-0.5"
                                            href="https://polkadot.js.org/extension/">here</a>.</div>
                                            <div className="flex my-3">2.New to Playerlink? Follow
                                                <a className="text-blue-400 mx-0.5" href="">this guide</a> to create your Playerlink wallet.</div>
                                            <Dialog.Title as="h3" className="mt-3 text-center text-lg leading-6 font-medium text-gray-900">

                                                <button onClick={()=>login()}>
                                                    <div className="flex justify-center">
                                                        <img className="w-10 h-10" src="https://cdn.discordapp.com/attachments/876498266550853642/908665467273613392/unknown.png" alt=""/>
                                                        <h1 className="ml-2 mt-2">Try Again</h1>
                                                        <div className="text-center mt-1.5 text-xl"><i className="ml-10  fa fa-arrow-right" aria-hidden="true"></i></div>
                                                    </div></button>
                                            </Dialog.Title>
                                            <div className="mt-2">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 flex justify-center text-sm px-1 md:px-20 ">
                                        By connecting, I accept Playerlink
                                        <div><a className="text-blue-400 ml-0.5" href="">Terms of Service</a></div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openat} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenat}>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 ">
                                    <div>
                                        <div className='flex justify-end text-xl'>
                                            <button  onClick={() => setOpenat(false)}
                                                     className="fa fa-times " aria-hidden="true"></button>
                                        </div>
                                        <div className="text-center font-bold mb-5">
                                            Choose Account
                                        </div>

                                        {account.map((item) => (
                                        <div key={item.address} onClick={getvalue} className=" flex justify-between px-5 py-3 sm: border-t ">
                                            <label  htmlFor={item.address} id={item.address}  className="font-medium text-gray-700">
                                                {item.meta.name}
                                            </label>
                                            <input
                                                id={item.address}
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="radio"

                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </div>   ))}

                                        <div className="ml-3 text-sm">

                                            <div className="mt-5 sm:mt-6 flex justify-center">
                                                <button onClick={loginaccount}
                                                    type="button"
                                                    className="inline-flex justify-center px-10  rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                                >
                                                    login
                                                </button>
                                            </div>


                                            <div className="mt-2">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 flex justify-center text-sm px-1 md:px-20 ">
                                        By connecting, I accept Playerlink
                                        <div><a className="text-blue-400 ml-0.5" href="">Terms of Service</a></div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={openuser} as={Fragment}>
                    <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenuser}>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 ">
                                    <div>
                                        <div className='flex justify-end text-xl'>
                                            <button  onClick={() => setOpenuser(false)}
                                                     className="fa fa-times " aria-hidden="true"></button>
                                        </div>

                                        <div className="mx-auto flex items-center justify-center h-16 w-16 p-1 rounded-full ">
                                            <img src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png" alt=""/>
                                        </div>
                                        <div className="text-center font-bold">
                                            Welcome Serve Builder
                                        </div>
                                        <div className="text-center text-sm mt-2">
                                            To start joinning PlayerLink Protocol
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5 border-t ">
                                            <Dialog.Title as="h3" className="mt-3 text-lg leading-6 font-medium text-gray-900">
                                                <div className="flex justify-center p-5"><button className="bg-blue-400 text-white rounded-lg py-2 px-8 ">
                                                    Register a Collection
                                                </button></div>
                                            </Dialog.Title>
                                            <div className="mt-2">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 flex justify-center text-sm px-1 md:px-20 ">
                                         I accept  Platform
                                        <div><a className="text-blue-400 ml-0.5" href="">Terms of Service</a></div>
                                    </div>

                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

            </div>


        );
}
export default withRouter(Header)

