import {BadgeCheckIcon, CollectionIcon} from "@heroicons/react/solid";
import React, {Fragment, useState,} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Link from 'next/link'
import {polkapi,connectcheck} from "../../chain/polkadot/api";

export default function Backstagelife() {
    const[openadmin,setOpenadmin]=useState(false)

    async function Register() {
        const api = await polkapi();
        await connectcheck();
        const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
        const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
        const web3FromSource = (await import("@polkadot/extension-dapp")).web3FromSource;
        await web3Enable('my cool dapp');
        const allAccounts = await web3Accounts();
        const account = allAccounts[0];
        const transferExtrinsic = api.tx.serve.registeredServerCollection()
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
        <div>
        <div className="xl:flex-shrink-0 xl:w-64  bg-white">
            <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                            {/* Profile */}
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 h-12 w-12">
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/91942968?v=4"
                                        alt=""
                                    />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm font-medium text-gray-900">David</div>
                                    <a href="https://github.com/Davidxing1" className="group flex items-center space-x-2.5">
                                        <svg
                                            className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium">
        Davidxing1
        </span>
                                    </a>
                                </div>
                            </div>
                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row xl:flex-col">
                                <button  onClick={() => setOpenadmin(true)}
                                         type="button"
                                         className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                                >
                                    Register  Collection
                                </button>

                                <Link href="/backstage/serve">
                                    <a className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full">
                                        Add Serve</a>
                                </Link>
                            </div>
                        </div>
                        {/* Meta info */}
                        <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                            <div className="flex items-center space-x-2">
                                <BadgeCheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span className="text-sm text-gray-500 font-medium">1 Collection</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CollectionIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span className="text-sm text-gray-500 font-medium">1 Serve</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/*弹出框*/}
            <Transition.Root show={openadmin} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenadmin}>
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
                                        <button  onClick={() => setOpenadmin(false)}
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
                                            <div className="flex justify-center p-5"><button onClick={Register} className="bg-blue-400 text-white rounded-lg py-2 px-8 ">
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
            </Transition.Root></div>
)
}