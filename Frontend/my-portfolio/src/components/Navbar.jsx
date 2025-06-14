import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="max-w-[1000px] mx-auto">
      <header className="fixed inset-x-0 top-0 z-50 w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm">
        <nav className="flex items-center justify-between p-2 lg:px-6 h-14">
          <div className="container mx-auto max-w-[1000px] flex items-center justify-between h-full">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5 cursor-pointer">
                <h1 className="text-lg lg:text-xl font-handwriting font-semibold text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-pink-600 bg-clip-text">
                  &lt;Mustafa Ansari/&gt;
                </h1>
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer font-montserrat"
              >
                <FaBars className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-5 xl:gap-x-6 cursor-pointer h-full items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 py-1 text-sm font-semibold transition-all duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-yellow-400 to-pink-500 hover:after:w-full after:transition-all after:duration-300 font-montserrat ${
                    location.pathname === item.href ? "after:w-full" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-5 py-5 sm:max-w-sm bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5 cursor-pointer">
                <h1 className="text-xl font-handwriting font-semibold text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-pink-600 bg-clip-text">
                  &lt;Mustafa Ansari /&gt;
                </h1>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer font-montserrat"
              >
                <FaTimes className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>

            <div className="mt-5 flow-root">
              <div className="-my-5 divide-y divide-gray-500/10 dark:divide-gray-700/10">
                <div className="space-y-2 py-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-black dark:text-white hover:bg-gradient-to-r from-yellow-400 to-pink-500 hover:text-white cursor-pointer font-montserrat transition-all duration-300 ${
                        location.pathname === item.href ? "bg-gradient-to-r from-yellow-400 to-pink-500 text-white" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
