import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaBars, FaTimes, FaExclamationTriangle } from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => setIsVisible(false), 3000);
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(prev - (100 / 30), 0));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [isVisible]);

  const navigation = [
    { name: "About Me", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Resume", href: "Resume" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <div className="max-w-[1000px] mx-auto">
      <header className="absolute inset-x-0 top-0 z-50 w-full">
        <nav className=" flex items-center justify-between p-3 lg:px-8 h-16">
          <div className="container mx-auto max-w-[1000px] flex items-center justify-between h-full">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5 cursor-pointer">
                <h1 className="text-xl lg:text-2xl font-handwriting font-semibold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
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
                <FaBars className="h-7 w-7 text-black dark:text-white" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 cursor-pointer h-full items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="px-3 py-2 text-sm xl:text-base font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 hover:underline font-montserrat"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>


        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 cursor-pointer">
                <h1 className="text-2xl font-handwriting font-semibold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
                  &lt;Mustafa Ansari /&gt;
                </h1>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white cursor-pointer font-montserrat"
              >
                <FaTimes className="h-7 w-7 text-black dark:text-white" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold text-black dark:text-white hover:border hover:border-black dark:hover:border-white cursor-pointer font-montserrat"
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
