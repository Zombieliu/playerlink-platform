import React, { Fragment, useState } from 'react'
import {Listbox, Menu, Transition} from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Link from "next/link";

const networks = [
    { id: 1, name: 'PlayerLink' },
    { id: 2, name: 'Near' },
    { id: 3, name: 'Aurora' },
    { id: 4, name: 'Moonriver' },

]
const languages=[
    { id: 1, name: 'English' },
    { id: 2, name: '简体中文' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Setup() {
    const [language, setLanguage] = useState(languages[0])
    const [network, setNetwork] = useState(networks[0])


    return (
        <Menu as="div" className="relative inline-block text-left font-semibold">
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            <Listbox value={language} onChange={setLanguage}>
                                {({ open }) => (
                                    <>
                             <div className="mt-1 relative">
                             <Listbox.Button className="relative w-full bg-white  rounded-md  pl-3 pr-10 py-2 text-right cursor-default  sm:text-sm">
                             <span className="block truncate flex justify-between font-semibold">
                                 <div className="text-gray-400">Language</div>
                                 {language.name}</span>

                             <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">

                             <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /></span>
                             </Listbox.Button>
                                 <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-200"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                  >
                                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md  py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {languages.map((item) => (
                                                        <Listbox.Option
                                                            key={item.id}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-8 pr-4'
                                                                )
                                                            }
                                                            value={item}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                        {item.name}

                                                                    </span>

                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-indigo-600',
                                                                                'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                            )}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>

                        </Menu.Item>
                        <Menu.Item>
                            <Listbox value={network} onChange={setNetwork}>
                                {({ open }) => (
                                    <>
                                        <div className="mt-1 relative">
                                            <Listbox.Button className="relative w-full bg-white  rounded-md  pl-3 pr-10 py-2 text-right cursor-default  sm:text-sm">
                             <span className="block truncate flex justify-between font-semibold">
                                 <div className="text-gray-400">Network</div>
                                 {network.name}</span>

                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">

                             <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /></span>
                                            </Listbox.Button>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md  py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {networks.map((item) => (
                                                        <Listbox.Option
                                                            key={item.id}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-8 pr-4'
                                                                )
                                                            }
                                                            value={item}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                        {item.name}

                                                                    </span>

                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-indigo-600',
                                                                                'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                            )}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>

                        </Menu.Item>
                    </div>
                    <div className="py-1 border-t-2 text-gray-400">
                        <Menu.Item>

                                <Link href="/historyrecord"
                                >
                                    <a className=" hover:bg-gray-100 hover:text-gray-800  block px-4 py-2 text-sm" >
                                        History record</a>
                                </Link>


                        </Menu.Item>
                        <Menu.Item>

                                <Link href=""
                                >
                                    <a className=" hover:bg-gray-100 hover:text-gray-800  block px-4 py-2 text-sm" >
                                        Help</a>
                                </Link>


                        </Menu.Item>
                        <Menu.Item>

                                <Link href="/backstage"
                                >
                                    <a className=" hover:bg-gray-100 hover:text-gray-800 block px-4 py-2 text-sm" >
                                        Login Backstage</a>
                                </Link>

                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>


    )
}