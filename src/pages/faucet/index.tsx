import React, {Fragment, useState} from 'react'
import Header from"../../components/header"
import Overview from"../../components/overview"
import Backstagelife from "../../components/backstagelife";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Faucet() {


    return (
          <main>
            <Header></Header>

              <div className="pt-20">
                  <div className="text-center mt-10 ">
                      <div className="text-4xl mt-16 font-extrabold">
                          PL Authenticated Faucet
                      </div>
                      <div className="mt-5 xl:flex justify-center">
                          <input type="text"
                                 className="bg-gray-50 text-lg rounded-lg p-3  w-9/12  xl:w-5/12  border hover:border-indigo-500 outline-none"
                                 placeholder="Please paste the twitter link which contains your PL account"/>
                          <p className="flex justify-center text-center text-base font-medium text-gray-500">
                              <button  className="mt-10 xl:mt-0 xl:ml-10  px-5 py-3 rounded-lg font-bold text-gray-600 text-base font-normal border border-black transition duration-500 hover:bg-gray-700  hover:text-white "
                              >
                                  Give me PL
                              </button>
                          </p>
                      </div>

                  </div>
                  <div className="mt-80 max-w-5xl mx-auto  px-4 ">
                      <h1 className="text-2xl text-black text-center mb-5">How to fund</h1>
                      <h2 className="text-gray-600 text-sm mb-5">This faucet is running on the Octopus testnet. To prevent malicious actors from exhausting all funds, requests are tied to Twitter social network accounts. Anyone having a Twitter account may request funds within the permitted limits.</h2>
                      <h3 className="text-gray-600 text-sm mb-5">To request funds via Twitter, make a tweet with your Pl account pasted into the contents.</h3>
                      <h4 className="text-gray-600 text-sm mb-5">Copy-paste the tweets URL into the above input box and get your OCT(or USDC). Each account can get 10 OCT(or USDC) every 24 hours.</h4>

                  </div>
              </div>
        </main>

    )
}
