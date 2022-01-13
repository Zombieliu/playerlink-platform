import React from "react";
import Link from 'next/link'
import Header from "../../../components/header"
import Backstagelife from "../../../components/backstagelife";
import Overview from "../../../components/overview";
import { Fragment, useState } from 'react'
import { Listbox, Transition,Switch } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import {connectcheck, polkapi} from "../../../chain/polkadot/api";

const people = [
    { id: 1, name: 'RecordTime' },
    { id: 2, name: 'RecordTimes' },
    { id: 3, name: 'RecordNumbers' },

]
const people1 = [
    { id: 1, name: 'RESTFUL' },
    { id: 2, name: 'GRAPHQL' },
    { id: 3, name: 'RPC' },
    {  id:4, name:"OTHER"}

]
const people2 = [
    { id: 1, name: 'Dev' },
    { id: 2, name: 'Test' },
    { id: 3, name: 'Prd' },

]
const people3 = [
    { id: 1, name: '是' },
    { id: 2, name: '不是' },


]
const people4 = [
    { id: 1, name: 'Hour' },
    { id: 2, name: 'Day' },
    { id: 3, name: 'Month' },
    { id: 4, name: 'Year' },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Serve() {
    const [selected, setSelected] = useState(people[0])
    const [selected1, setSelected1] = useState(people1[0])
    const [selected2, setSelected2] = useState(people2[0])
    const [selected3, setSelected3] = useState(people3[0])
    const [selected4, setSelected4] = useState(people4[0])
    const [enabled, setEnabled] = useState(false)
    const [enabled1, setEnabled1] = useState(false)

    const addserve = async () => {
      // @ts-ignore
        let CollectionId = document.getElementById("CollectionId").value
        let ServeTypes  =document.getElementById("ServeTypes").innerText
        let ServeWays   =document.getElementById("ServeWays").innerText
        let ServeState =document.getElementById("ServeState").innerText
        let ServeSwitch =document.getElementById("ServeSwitch").innerText
        // @ts-ignore
        let ServeVersion =document.getElementById("ServeVersion").value

        // @ts-ignore
        let ServeName =document.getElementById("ServeName").value

        // @ts-ignore
        let ServeDescription =document.getElementById("ServeDescription").value
        // @ts-ignore
        let ServeUrl =document.getElementById("ServeUrl").value

        // @ts-ignore
        let ServePrice =document.getElementById("ServePrice").value

        let ServerLimitTime
        if(enabled){
            ServerLimitTime=document.getElementById("ServerLimitTime").innerText
        }

        let ServerLimitTimes
        if(enabled1){
            // @ts-ignore
            ServerLimitTimes=document.getElementById("ServerLimitTimes").value
        }
        // @ts-ignore
        let ServeDeposit=document.getElementById("ServeDeposit").value


        const api = await polkapi();
        await connectcheck();
        const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
        const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
        const web3FromSource = (await import("@polkadot/extension-dapp")).web3FromSource;
        await web3Enable('my cool dapp');
        const allAccounts = await web3Accounts();
        const account = allAccounts[0];
        const transferExtrinsic = api.tx.serve.addServe(CollectionId, ServeTypes, ServeWays, ServeState, ServeSwitch, ServeVersion, ServeName,
            ServeDescription, ServeUrl, ServePrice, ServerLimitTime, ServerLimitTimes, ServeDeposit)
        
        const injector = await web3FromSource(account.meta.source);

        transferExtrinsic.signAndSend(account.address, {signer: injector.signer}, ({status}) => {
            if (status.isInBlock) {
                console.log(`Completed at block hash #${status.asInBlock.toString()}`);
            } else if (status.isFinalized) {
                console.log(`Completed at block hash #${status.asFinalized.toString()}`);
            } else{
                console.log(`Current status: ${status.type}`);
            }
        }).catch((error: any) => {
            console.log(':( transaction failed', error);
        });
    }




    return (
        <div><Header></Header>
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
                            <div className="bg-white border-l lg:min-w-0 pl-2 lg:flex-1">
                                <Link href="/backstage"><a className="py-1.5 px-1 bg-blue-400 text-white rounded-lg">
                                    Return</a></Link>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-3">
                                    CollectionId
                                </label>
                                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                    <input
                                        type="text"
                                        name="name"
                                        id="CollectionId"
                                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                        placeholder="0"
                                    />
                                </div>

                                <Listbox value={selected} onChange={setSelected} >
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700 mt-3">ServeTypes</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button  className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="block truncate" id="ServeTypes"  >{selected.name}</span>
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {people.map((person) => (
                                                            <Listbox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
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

                                <Listbox value={selected1} onChange={setSelected1}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700 mt-3">ServeWays</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="block truncate" id="ServeWays">{selected1.name}</span>
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {people1.map((person) => (
                                                            <Listbox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
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
                                <Listbox value={selected2} onChange={setSelected2}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700 mt-3">ServeState</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="block truncate" id="ServeState">{selected2.name}</span>
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {people2.map((person) => (
                                                            <Listbox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
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
                                <Listbox value={selected3} onChange={setSelected3}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700 mt-3">ServeSwitch</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="block truncate" id="ServeSwitch">{selected3.name}</span>
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {people3.map((person) => (
                                                            <Listbox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
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

                                <label htmlFor="serveDeposit" className="block text-sm font-medium text-gray-700 mt-3">
                                    ServeVersion
                                </label>
                                <div   className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                    <input
                                        type="text"
                                        name="name"
                                        id="ServeVersion"
                                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                        placeholder=""
                                    />
                                </div>

                                <label htmlFor="serveDeposit" className="block text-sm font-medium text-gray-700 mt-3">
                                    ServeName
                                </label>
                                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                    <input
                                        type="text"
                                        name="name"
                                        id="ServeName"
                                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                        placeholder=""
                                    />
                                </div>

                                <label htmlFor="serveDeposit" className="block text-sm font-medium text-gray-700 mt-3">
                                    ServeDescription
                                </label>
                                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                    <input
                                        type="text"
                                        name="name"
                                        id="ServeDescription"
                                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                        placeholder=""
                                    />
                                </div>

                                <label htmlFor="serveDeposit" className="block text-sm font-medium text-gray-700 mt-3">
                                    ServeUrl
                                </label>
                                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                    <input
                                        type="text"
                                        name="name"
                                        id="ServeUrl"
                                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                        placeholder=""
                                    />
                                </div>

                                <label htmlFor="servePrice" className="block text-sm font-medium text-gray-700 mt-3">
                                    ServePrice
                                </label>
                                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                    <input
                                        type="text"
                                        name="name"
                                        id="ServePrice"
                                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                        placeholder="0"
                                    />
                                </div>
                                <div></div>

                 <div className="flex justify-between">
                     <div className={classNames(
                         enabled ?  "hidden":"w-full ")}>
                         <div className="">
                             <div className="block text-sm font-medium text-gray-700 mt-3 ">ServerLimitTime</div>
                             <div className="block text-sm font-medium text-gray-700  w-full border p-2 rounded-lg bg-gray-200"> Optional</div>
                         </div>
                     </div>
                     <div className={classNames(
                         enabled ?  "w-full":"hidden ")}>
                                <Listbox value={selected4} onChange={setSelected4} >

                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700 mt-3 ">ServerLimitTime</Listbox.Label>

                                            <div className="mt-1 relative ">
                                                <Listbox.Button className=" bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <span className="block truncate" id="ServerLimitTime">{selected4.name}</span>
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {people4.map((person) => (
                                                            <Listbox.Option
                                                                key={person.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={person}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
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

                                </Listbox></div>
                         <div className="ml-2 pt-10">
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={classNames(
                                        enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                    )}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        className={classNames(
                                            enabled ? 'translate-x-5' : 'translate-x-0',
                                            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    >
        <span
            className={classNames(
                enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
            className={classNames(
                enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
                                </Switch>
                     </div>
       </div>

                                <div className="flex justify-between">
                                    <div className={classNames(
                                        enabled1 ?  "hidden":"w-full ")}>
                                        <div className="">
                                            <div className="block text-sm font-medium text-gray-700 mt-3 ">ServerLimitTimes</div>
                                            <div className="block text-sm font-medium text-gray-700  w-full border p-2 rounded-lg bg-gray-200"> Optional</div>
                                        </div>
                                    </div>
                                    <div className={classNames(
                                        enabled1 ?  "w-full":"hidden ")}>
                                        <label htmlFor="serveDeposit" className="block text-sm font-medium text-gray-700 mt-3">
                                            ServerLimitTimes
                                        </label>
                                        <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                            <input
                                                type="text"
                                                name="name"
                                                id="ServerLimitTimes"
                                                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                                placeholder="0"
                                            />
                                        </div>

                                    </div>
                                    <div className="ml-2 pt-10">
                                        <Switch
                                            checked={enabled1}
                                            onChange={setEnabled1}
                                            className={classNames(
                                                enabled1 ? 'bg-indigo-600' : 'bg-gray-200',
                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span className="sr-only">Use setting</span>
                                            <span
                                                className={classNames(
                                                    enabled1 ? 'translate-x-5' : 'translate-x-0',
                                                    'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            >
        <span
            className={classNames(
                enabled1 ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
            className={classNames(
                enabled1 ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
                                        </Switch>
                                    </div>
                                </div>

                                <label htmlFor="serveDeposit" className="block text-sm font-medium text-gray-700 mt-3">
                                    ServeDeposit
                                </label>
                                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">

                                    <input
                                        type="text"
                                        name="name"
                                        id="ServeDeposit"
                                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                        placeholder="0"
                                    />
                                </div>


                                <div className="flex justify-end ">
                                <button onClick={addserve}
                                    className="py-1.5 px-1 bg-blue-400 text-white rounded-lg  my-3">
                                    Submit</button>
                                </div>
                            </div>

                        </div>
                        {/* Activity feed */}
                        <div className="">

                        </div>
                    </div>
                </div></div>
        </div>

    )
}
