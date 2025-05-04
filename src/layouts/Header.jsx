"use client";

import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

// Data untuk dropdown Layanan
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

// Data untuk call to action
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      {/* Navbar utama (disembunyikan saat mobile menu dibuka) */}
      {!mobileMenuOpen && (
        <nav
          aria-label="Global"
          className="flex w-full items-center justify-between p-6 lg:px-8 bg-white shadow"
        >
          <div className="flex items-center lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img src={Logo} alt="cmihospital.com" className="h-8 w-auto" />
              <span className="ml-3 text-lg font-bold uppercase text-black">
                Klinik Utama CMI
              </span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            >
              <Bars3Icon className="size-6" />
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-black">
                Layanan
                <ChevronDownIcon className="size-5 flex-none" />
              </PopoverButton>

              {/* ...PopoverPanel tetap... */}
            </Popover>

            <a href="#" className="text-sm font-semibold text-black">
              Features
            </a>
            <a href="#" className="text-sm font-semibold text-black">
              Marketplace
            </a>
            <a href="#" className="text-sm font-semibold text-black">
              Company
            </a>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-amber-400 transition"
            >
              Masuk <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      )}

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        {/* Overlay background */}
        <div className="fixed inset-0 z-10 bg-black/30" />

        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-white px-6 py-6 overflow-y-auto">
          {/* Header mobile menu */}
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <img src={Logo} alt="cmihospital.com" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-black"
            >
              <XMarkIcon className="size-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          {/* List menu mobile */}
          <div className="mt-6">
            <Disclosure as="div" className="-mx-3">
              <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                Layanan
                <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-2">
                {[...products, ...callsToAction].map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-lg py-2 px-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>

            {/* Menu tambahan */}
            <div className="space-y-2 mt-6">
              <a
                href="#"
                className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#"
                className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Company
              </a>
            </div>

            {/* Tombol login */}
            <div className="mt-6">
              <a
                href="#"
                className="block rounded-lg bg-amber-300 py-2.5 text-center font-semibold text-gray-950 hover:bg-amber-400"
              >
                Masuk
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
