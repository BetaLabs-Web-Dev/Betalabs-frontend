import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./Hero.css";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Events", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(./background.png)`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <header className="absolute inset-x-0 top-0 z-50">

        {/* <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Beta Labs</span>
              <img className="h-14 w-auto" src="./betalabsLogo.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav> */}
        <Dialog
          as="div"
          className="md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/signup"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-[6vw] py-[25vh]">
        <div className="font-poppins w-[62vw]">
          <div className="flex flex-col items-start text-left gap-8">
            <div className="font-medium">
              <h1 className="hero-title text-[5vw] leading-snug">
                WELCOME TO THE
              </h1>
              <h1 className="hero-title text-[5vw] leading-snug mx-[10vw]">
                TECHNICAL CLUB
              </h1>
              <h1 className="hero-title text-[5vw] leading-snug">
                OF IIIT KOTTAYAM
              </h1>
            </div>
            <p className="text-[1.4vw] text-white">
              “Lorem ipsum dolor sit amet consectetur. Malesuada phasellus
              auctor diam senectus viverra arcu arcu volutpat. Posuere amet a
              enim aliquam vulputate non.”
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="font-inter rounded-md bg-[#1205A4] px-5 py-2.5 text-[18px] font-medium text-white hover:bg-[#1205a4a5]"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
