import React, { Fragment, useState } from 'react'
import { Menu,Listbox, Transition,Dialog } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const type=[
    {
        href:"/square/all",
        title:"ALL",
    },
    {
        href:"/square/art",
        title:"Art",
    },
    {
        href:"/square/music",
        title:"Music",
    },
    {
        href:"/square/acg",
        title:"ACG",
    },
    {
        href:"/square/sports",
        title:"Sports",
    },
    {
        href:"/square/trendy",
        title:"Trendy",
    },
    {
        href:"/square/game",
        title:"Game",
    },
    {
        href:"/square/collectibles",
        title:"Collectibles",
    },
]
export default function Left() {
    const [open, setOpen] = useState(true)

        return (
            <div>
                <div className="mt-3 md:mt-0 md:ml-6">
                    <div className="flex flex-wrap justify-between">
                        {type.map((item)=>(
                            <Link key={item.title} href={item.href}
                            >
                            <a className="px-2 md:px-4 py-1 md:mr-6 rounded-lg text-base  md:text-lg text-gray-500 hover:bg-black hover:text-white focus:bg-black focus:text-white">
                                {item.title}</a></Link>
                        ))}
                        
                    </div>


                </div>
                {/*<div className="flex mt-2 justify-end">*/}
                {/*    <Menu as="div" className="relative inline-block text-left">*/}
                {/*        <div>*/}
                {/*            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">*/}
                {/*                Recently Listed*/}
                {/*                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />*/}
                {/*            </Menu.Button>*/}
                {/*        </div>*/}

                {/*        <Transition*/}
                {/*            as={Fragment}*/}
                {/*            enter="transition ease-out duration-100"*/}
                {/*            enterFrom="transform opacity-0 scale-95"*/}
                {/*            enterTo="transform opacity-100 scale-100"*/}
                {/*            leave="transition ease-in duration-75"*/}
                {/*            leaveFrom="transform opacity-100 scale-100"*/}
                {/*            leaveTo="transform opacity-0 scale-95"*/}
                {/*        >*/}
                {/*            <Menu.Items className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                {/*                <div className="py-1">*/}
                {/*                    <Menu.Item>*/}
                {/*                        {({ active }) => (*/}
                {/*                            <Link href="/partners/all">*/}
                {/*                            <a*/}

                {/*                                className={classNames(*/}
                {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                    'block px-4 py-2 text-sm'*/}
                {/*                                )}*/}
                {/*                            >*/}
                {/*                                Recently Created*/}
                {/*                            </a></Link>*/}
                {/*                        )}*/}
                {/*                    </Menu.Item>*/}
                {/*                    <Menu.Item>*/}
                {/*                        {({ active }) => (*/}
                {/*                            <Link href="">*/}
                {/*                            <a*/}

                {/*                                className={classNames(*/}
                {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                    'block px-4 py-2 text-sm'*/}
                {/*                                )}*/}
                {/*                            >*/}
                {/*                                Cheapest*/}
                {/*                            </a></Link>*/}
                {/*                        )}*/}
                {/*                    </Menu.Item>*/}
                {/*                    <Menu.Item>*/}
                {/*                        {({ active }) => (*/}
                {/*                            <Link href="#">*/}
                {/*                            <a*/}

                {/*                                className={classNames(*/}
                {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                    'block px-4 py-2 text-sm'*/}
                {/*                                )}*/}
                {/*                            >*/}
                {/*                                Oldest*/}
                {/*                            </a></Link>*/}
                {/*                        )}*/}
                {/*                    </Menu.Item>*/}
                {/*                    <Menu.Item>*/}
                {/*                        {({ active }) => (*/}
                {/*                            <Link href="#">*/}
                {/*                            <a*/}

                {/*                                className={classNames(*/}
                {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                {/*                                    'block px-4 py-2 text-sm'*/}
                {/*                                )}*/}
                {/*                            >*/}
                {/*                                Most pledged*/}
                {/*                            </a></Link>*/}
                {/*                        )}*/}
                {/*                    </Menu.Item>*/}
                {/*                </div>*/}
                {/*            </Menu.Items>*/}
                {/*        </Transition>*/}
                {/*    </Menu></div>*/}
            </div>
        );

}

