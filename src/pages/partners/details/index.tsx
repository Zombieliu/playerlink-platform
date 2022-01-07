import React, { Fragment,useState,useRef } from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {CheckIcon,ExclamationIcon } from "@heroicons/react/outline";
import { StarIcon } from '@heroicons/react/solid';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Tab } from '@headlessui/react';
import Header from "../../../components/header";
import Top from "../../../components/partners/top";
import Left from "../../../components/partners/left";

const product = {
    name: 'Game Random Serve',
    version: { name: '0.0.1', date: 'Jan 1, 2022', datetime: '2022-01-01' },
    price: '$10 PL',
    description:
        'Game developers can obtain random numbers on different chains through this service, such as NEAR, SOLANA, POLKADOT, etc.',
    highlights: [
        'Henry the author of this service',

    ],
    imageSrc: 'https://cdn.discordapp.com/attachments/897398778166906911/918367494304038982/viewfile.png',
    imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}
const reviews = {
    average: 4,
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This service is really easy to use, I like it very much</p>
      `,
            date: 'Jan 1, 2022',
            datetime: '2022-01-1',
            author: 'Abel',
            avatarSrc:
                'https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg',
        },
        {
            id: 2,
            rating: 2,
            content: `
        <p>This service is not good, I feel uncomfortable</p>
      `,
            date: 'Jan 1, 2022',
            datetime: '2022-01-1',
            author: 'David',
            avatarSrc:
                'https://cdn.discordapp.com/attachments/897398778166906911/928294804633305128/20220105223158.jpg',
        },
        // More reviews...
    ],
}
const faqs = [
    {
        question: 'How to use the service',
        answer:
            'You can follow us on Twitter or Telegram. There are functional introductions on it.',
    },
    {
        question: 'There is a problem with the service, how can I solve it',
        answer:
            "You can contact us in our telegram and we will help you solve the problem.",
    },
    // More FAQs...
]
const license = {
    href: '#',
    summary:
        'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
    content: `
    <h4>Overview</h4>
    
    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4>What you can\'t do with it</h4>
    
    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Details() {
    const cancelButtonRef = useRef(null)
    const [openno, setOpenno] = useState(false)
    const [open, setOpen] = useState(false)
    const[openload ,setOpenload]=useState(false)
    async function Pay() {

        setOpenno(false)
        const web3Enable = (await import("@polkadot/extension-dapp")).web3Enable;
        const web3Accounts = (await import("@polkadot/extension-dapp")).web3Accounts;
        const web3FromSource = (await import("@polkadot/extension-dapp")).web3FromSource;
        const allInjected = await web3Enable('my cool dapp');
        const allAccounts = await web3Accounts();
        const provider = new WsProvider('wss://testnet.web3games.org');

        // Create the API and wait until ready
        const api = await ApiPromise.create({provider});

        // Retrieve the chain & node information information via rpc calls
        const [chain, nodeName, nodeVersion] = await Promise.all([
            api.rpc.system.chain(),
            api.rpc.system.name(),
            api.rpc.system.version()
        ]);

        console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);

        const account = allAccounts[0];
        const transferExtrinsic = api.tx.balances.transfer('5GrhDF1nyvr2nwgvXtY96RoFs5xr15W7WyHg32LkQRz6X8Pk', 100000000000000)
        const injector = await web3FromSource(account.meta.source);

        transferExtrinsic.signAndSend(account.address, {signer: injector.signer}, ({status}) => {
            if (status.isInBlock) {
                console.log(`Completed at block hash #${status.asInBlock.toString()}`);
                setOpenload(true)
            } else if (status.isFinalized) {
                console.log(`Completed at block hash #${status.asFinalized.toString()}`);
                setOpenload(false)
                  setOpen(true)
            } else{
                console.log(`Current status: ${status.type}`);
            }
        }).catch((error: any) => {
            console.log(':( transaction failed', error);
            setOpenload(false)
            setOpenno(true)
        });
    }
    return(
        <div  className="relative  ">
            <Header></Header>
            <div className="md:pt-16 px-8 flex ">
                <div className="pt-16 md:flex ">
                    <Top></Top>
                    <div>
                        <Left></Left>

                        <div className="md:ml-5 mt-8">
                            <div className="bg-white">
                                <div className="mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                    {/* Product */}
                                    <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                                        {/* Product image */}
                                        <div className="lg:row-end-1 lg:col-span-4">
                                            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                                            </div>
                                        </div>

                                        {/* Product details */}
                                        <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                                            <div className="flex flex-col-reverse">
                                                <div className="mt-4">
                                                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>

                                                    <h2 id="information-heading" className="sr-only">
                                                        Product information
                                                    </h2>
                                                    <p className="text-sm text-gray-500 mt-2">
                                                        Version {product.version.name} (Updated{' '}
                                                        <time dateTime={product.version.datetime}>{product.version.date}</time>)
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="sr-only">Reviews</h3>
                                                    <div className="flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <StarIcon
                                                                key={rating}
                                                                className={classNames(
                                                                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                    'h-5 w-5 flex-shrink-0'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                                </div>
                                            </div>

                                            <p className="text-gray-500 mt-6">{product.description}</p>

                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                                <button
                                                    onClick={Pay}
                                                    type="button"
                                                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                                >
                                                    Pay {product.price}
                                                </button>
                                                <button

                                                    type="button"
                                                    className="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                                >
                                                    Preview
                                                </button>
                                            </div>

                                            <div className="border-t border-gray-200 mt-10 pt-10">
                                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                                                <div className="mt-4 prose prose-sm text-gray-500">
                                                    <ul role="list">
                                                        {product.highlights.map((highlight) => (
                                                            <li key={highlight}>{highlight}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 mt-10 pt-10">
                                                <h3 className="text-sm font-medium text-gray-900">License</h3>
                                                <p className="mt-4 text-sm text-gray-500">
                                                    {license.summary}{' '}
                                                    <a href={license.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Read full license
                                                    </a>
                                                </p>
                                            </div>

                                            <div className="border-t border-gray-200 mt-10 pt-10">
                                                <h3 className="text-sm font-medium text-gray-900">Share</h3>
                                                <ul role="list" className="flex items-center space-x-6 mt-4">
                                                    <li>
                                                        <a href="#" className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Share on Facebook</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Share on Instagram</span>
                                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Share on Twitter</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                                            <Tab.Group as="div">
                                                <div className="border-b border-gray-200">
                                                    <Tab.List className="-mb-px flex space-x-8">
                                                        <Tab
                                                            className={({ selected }) =>
                                                                classNames(
                                                                    selected
                                                                        ? 'border-indigo-600 text-indigo-600'
                                                                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                                                    'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                                                )
                                                            }
                                                        >
                                                            Customer Reviews
                                                        </Tab>
                                                        <Tab
                                                            className={({ selected }) =>
                                                                classNames(
                                                                    selected
                                                                        ? 'border-indigo-600 text-indigo-600'
                                                                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                                                    'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                                                )
                                                            }
                                                        >
                                                            FAQ
                                                        </Tab>
                                                        <Tab
                                                            className={({ selected }) =>
                                                                classNames(
                                                                    selected
                                                                        ? 'border-indigo-600 text-indigo-600'
                                                                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                                                    'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                                                )
                                                            }
                                                        >
                                                            License
                                                        </Tab>
                                                    </Tab.List>
                                                </div>
                                                <Tab.Panels as={Fragment}>
                                                    <Tab.Panel className="-mb-10">
                                                        <h3 className="sr-only">Customer Reviews</h3>

                                                        {reviews.featured.map((review, reviewIdx) => (
                                                            <div key={review.id} className="flex text-sm text-gray-500 space-x-4">
                                                                <div className="flex-none py-10">
                                                                    <img src={review.avatarSrc} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                                                                </div>
                                                                <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                                                                    <h3 className="font-medium text-gray-900">{review.author}</h3>
                                                                    <p>
                                                                        <time dateTime={review.datetime}>{review.date}</time>
                                                                    </p>

                                                                    <div className="flex items-center mt-4">
                                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                                            <StarIcon
                                                                                key={rating}
                                                                                className={classNames(
                                                                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                                    'h-5 w-5 flex-shrink-0'
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                    <p className="sr-only">{review.rating} out of 5 stars</p>

                                                                    <div
                                                                        className="mt-4 prose prose-sm max-w-none text-gray-500"
                                                                        dangerouslySetInnerHTML={{ __html: review.content }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </Tab.Panel>

                                                    <Tab.Panel as="dl" className="text-sm text-gray-500">
                                                        <h3 className="sr-only">Frequently Asked Questions</h3>

                                                        {faqs.map((faq) => (
                                                            <Fragment key={faq.question}>
                                                                <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
                                                                <dd className="mt-2 prose prose-sm max-w-none text-gray-500">
                                                                    <p>{faq.answer}</p>
                                                                </dd>
                                                            </Fragment>
                                                        ))}
                                                    </Tab.Panel>

                                                    <Tab.Panel className="pt-10">
                                                        <h3 className="sr-only">License</h3>

                                                        <div
                                                            className="prose prose-sm max-w-none text-gray-500"
                                                            dangerouslySetInnerHTML={{ __html: license.content }}
                                                        />
                                                    </Tab.Panel>
                                                </Tab.Panels>
                                            </Tab.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpen}>
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
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <CheckIcon className="h-6 w-6  text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className=" text-lg leading-6 font-medium text-gray-900">
                                            Payment successful
                                        </Dialog.Title>
                                        <div className="mt-2">

                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Go back to dashboard
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={openno} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpenno}>
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
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
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
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Payment failed
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Please recheck your network and account
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={Pay}
                                    >
                                        Retry
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                        onClick={() => setOpenno(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={openload} as={Fragment}>
                <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpenload}>
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
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 animate-spin w-12 text-5xl ">
                                        <i className="fa fa-spinner" aria-hidden="true"></i>

                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className=" text-lg leading-6 font-medium text-gray-900">
                                          Loading.......
                                        </Dialog.Title>
                                        <div className="mt-2">
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>


    )
}