import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "#about", current: false },
  { name: "Events", href: "#events", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact Us", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="navbar mx-auto p-2 sm:px-6 lg:px-8 fixed w-full z-10 bg-[#000E19]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-[54px] w-auto"
                  src="images/betalabsLogo.png"
                  alt="Your Company"
                />
                <h1 className="mx-5 text-[20px] font-inter font-medium" style={{ color: "white" }}>
                  BETA LABS
                </h1>
              </div>

              <div className="hidden sm:ml-6 md:block sm:rounded-full">
                <div className="flex flex-row items-center gap-[3vw] text-[20px] font-medium">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  to="/signup"
                  className="hidden md:block font-inter rounded-md bg-[#1205A4] px-4 py-2 text-[18px] font-medium text-white hover:bg-[#1205a4a5]"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="fixed right-0 z-50 w-full h-full bg-black mt-[75px]">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
