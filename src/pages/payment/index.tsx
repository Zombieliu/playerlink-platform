import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {ChevronRightIcon, CheckCircleIcon, TrashIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import Header from"../../components/header"
import Tail from"../../components/tail"

const subtotal = '$210.00'
const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
const taxes = '$23.68'
const shipping = '$22.00'
const total = '$341.68'
const products = [
    {
        id: 1,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 2,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 3,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    {
        id: 4,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },

    // More products...
]
const deliveryMethods = [
    { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
    { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
    { id: 'credit-card', title: 'Credit card' },
    { id: 'paypal', title: 'PayPal' },
    { id: 'etransfer', title: 'eTransfer' },
]
const steps = [
    { name: 'Cart', href: 'javascript:window.history.back(-1)', status: 'complete' },
    { name: 'Billing Information', href: '#', status: 'current' },
    { name: 'Confirmation', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Payment() {
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
    return (
          <>
        <Header></Header>

              <div className="bg-gray-50">

                  {/* Mobile menu */}
                  <main className="max-w-7xl mx-auto pt-24 pb-24 px-4 sm:px-6 lg:px-8">

                      <div className="flex justify-center mb-12">
                      <nav aria-label="Progress" className=" ">
                          <ol role="list" className="flex space-x-4">
                              {steps.map((step, stepIdx) => (
                                  <li key={step.name} className="flex items-center">
                                      {step.status === 'current' ? (
                                          <a href={step.href} aria-current="page" className="text-indigo-600">
                                              {step.name}
                                          </a>
                                      ) : (
                                          <a href={step.href}>{step.name}</a>
                                      )}

                                      {stepIdx !== steps.length - 1 ? (
                                          <ChevronRightIcon className="w-5 h-5 text-gray-300 ml-4" aria-hidden="true" />
                                      ) : null}
                                  </li>
                              ))}
                          </ol>
                      </nav>
                      </div>

                      <div className="max-w-2xl mx-auto lg:max-w-none">
                          <h1 className="sr-only">Checkout</h1>

                          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                              <div>
                                  <div>
                                      <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                                      <div className="mt-4">
                                          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                              Email address
                                          </label>
                                          <div className="mt-1">
                                              <input
                                                  type="email"
                                                  id="email-address"
                                                  name="email-address"
                                                  autoComplete="email"
                                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                              />
                                          </div>
                                      </div>
                                  </div>

                                  <div className="mt-10 border-t border-gray-200 pt-10">
                                      <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                          <div>
                                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                  First name
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      id="first-name"
                                                      name="first-name"
                                                      autoComplete="given-name"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>

                                          <div>
                                              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                  Last name
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      id="last-name"
                                                      name="last-name"
                                                      autoComplete="family-name"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>

                                          <div className="sm:col-span-2">
                                              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                                  Company
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      name="company"
                                                      id="company"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>

                                          <div className="sm:col-span-2">
                                              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                  Address
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      name="address"
                                                      id="address"
                                                      autoComplete="street-address"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>

                                          <div className="sm:col-span-2">
                                              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                                  Apartment, suite, etc.
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      name="apartment"
                                                      id="apartment"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>
                                          <div className="sm:col-span-2">
                                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                  Phone
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      name="phone"
                                                      id="phone"
                                                      autoComplete="tel"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="mt-10 border-t border-gray-200 pt-10">
                                      <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                          <RadioGroup.Label className="text-lg font-medium text-gray-900">Delivery method</RadioGroup.Label>

                                          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                              {deliveryMethods.map((deliveryMethod) => (
                                                  <RadioGroup.Option
                                                      key={deliveryMethod.id}
                                                      value={deliveryMethod}
                                                      className={({ checked, active }) =>
                                                          classNames(
                                                              checked ? 'border-transparent' : 'border-gray-300',
                                                              active ? 'ring-2 ring-indigo-500' : '',
                                                              'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                                                          )
                                                      }
                                                  >
                                                      {({ checked, active }) => (
                                                          <>
                                                              <div className="flex-1 flex">
                                                                  <div className="flex flex-col">
                                                                      <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                                          {deliveryMethod.title}
                                                                      </RadioGroup.Label>
                                                                      <RadioGroup.Description
                                                                          as="span"
                                                                          className="mt-1 flex items-center text-sm text-gray-500"
                                                                      >
                                                                          {deliveryMethod.turnaround}
                                                                      </RadioGroup.Description>
                                                                      <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                                                          {deliveryMethod.price}
                                                                      </RadioGroup.Description>
                                                                  </div>
                                                              </div>
                                                              {checked ? (
                                                                  <CheckCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                              ) : null}
                                                              <div
                                                                  className={classNames(
                                                                      active ? 'border' : 'border-2',
                                                                      checked ? 'border-indigo-500' : 'border-transparent',
                                                                      'absolute -inset-px rounded-lg pointer-events-none'
                                                                  )}
                                                                  aria-hidden="true"
                                                              />
                                                          </>
                                                      )}
                                                  </RadioGroup.Option>
                                              ))}
                                          </div>
                                      </RadioGroup>
                                  </div>

                                  {/* Payment */}
                                  <div className="mt-10 border-t border-gray-200 pt-10">
                                      <h2 className="text-lg font-medium text-gray-900">Payment</h2>

                                      <fieldset className="mt-4">
                                          <legend className="sr-only">Payment type</legend>
                                          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                              {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                                                  <div key={paymentMethod.id} className="flex items-center">
                                                      {paymentMethodIdx === 0 ? (
                                                          <input
                                                              id={paymentMethod.id}
                                                              name="payment-type"
                                                              type="radio"
                                                              defaultChecked
                                                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                          />
                                                      ) : (
                                                          <input
                                                              id={paymentMethod.id}
                                                              name="payment-type"
                                                              type="radio"
                                                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                          />
                                                      )}

                                                      <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                                                          {paymentMethod.title}
                                                      </label>
                                                  </div>
                                              ))}
                                          </div>
                                      </fieldset>

                                      <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                                          <div className="col-span-4">
                                              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                                  Card number
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      id="card-number"
                                                      name="card-number"
                                                      autoComplete="cc-number"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>

                                          <div className="col-span-4">
                                              <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                                  Name on card
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      id="name-on-card"
                                                      name="name-on-card"
                                                      autoComplete="cc-name"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>

                                          <div className="col-span-3">
                                              <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                                  Expiration date (MM/YY)
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      name="expiration-date"
                                                      id="expiration-date"
                                                      autoComplete="cc-exp"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>

                                          <div>
                                              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                                  CVC
                                              </label>
                                              <div className="mt-1">
                                                  <input
                                                      type="text"
                                                      name="cvc"
                                                      id="cvc"
                                                      autoComplete="csc"
                                                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              {/* Order summary */}
                              <div className="mt-10 lg:mt-0">
                                  <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                                  <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                      <h3 className="sr-only">Items in your cart</h3>
                                      <section aria-labelledby="summary-heading" className=" bg-gray-50 w-full  ">
                                          <ul role="list" className="flex-auto overflow-y-auto h-96 divide-y divide-gray-200 px-6">
                                              {products.map((product) => (
                                                  <li key={product.id} className="flex py-6 space-x-6">
                                                      <img
                                                          src={product.imageSrc}
                                                          alt={product.imageAlt}
                                                          className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                                                      />
                                                      <div className="flex flex-col justify-between space-y-4">
                                                          <div className="text-sm font-medium space-y-1">
                                                              <h3 className="text-gray-900">{product.name}</h3>
                                                              <p className="text-gray-900">{product.price}</p>
                                                              <p className="text-gray-500">{product.color}</p>
                                                              <p className="text-gray-500">{product.size}</p>
                                                          </div>
                                                          <div className="flex space-x-4">
                                                              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                  Edit
                                                              </button>
                                                              <div className="flex border-l border-gray-300 pl-4">
                                                                  <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                      Remove
                                                                  </button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                              ))}
                                          </ul>

                                          <div className=" bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
                                              <form>
                                                  <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
                                                      Discount code
                                                  </label>
                                                  <div className="flex space-x-4 mt-1">
                                                      <input
                                                          type="text"
                                                          id="discount-code"
                                                          name="discount-code"
                                                          className="block w-full border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                      />
                                                      <button
                                                          type="submit"
                                                          className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                                      >
                                                          Apply
                                                      </button>
                                                  </div>
                                              </form>

                                              <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                                                  <div className="flex justify-between">
                                                      <dt>Subtotal</dt>
                                                      <dd className="text-gray-900">{subtotal}</dd>
                                                  </div>
                                                  <div className="flex justify-between">
                                                      <dt className="flex">
                                                          Discount
                                                          <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                    {discount.code}
                  </span>
                                                      </dt>
                                                      <dd className="text-gray-900">-{discount.amount}</dd>
                                                  </div>
                                                  <div className="flex justify-between">
                                                      <dt>Taxes</dt>
                                                      <dd className="text-gray-900">{taxes}</dd>
                                                  </div>
                                                  <div className="flex justify-between">
                                                      <dt>Shipping</dt>
                                                      <dd className="text-gray-900">{shipping}</dd>
                                                  </div>
                                                  <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                                                      <dt className="text-base">Total</dt>
                                                      <dd className="text-base">{total}</dd>
                                                  </div>
                                              </dl>
                                          </div>
                                      </section>

                                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                          <Link href="/payend">
                                              <a ><div
                                              // type="submit"
                                              className="w-full bg-indigo-600 border text-center border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                          >


                                              Confirm order
                                          </div></a></Link>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </main>
                      </div>
              <Tail></Tail>
        </>
    )
}