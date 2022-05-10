import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LanguageMenu = () => {
  const [language, setLanguage] = useState("English");
  const { t, i18n } = useTranslation();
  const clickHandler = (event, language) => {
    i18n.changeLanguage(event);
    setLanguage(language);
  };
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex justify-center w-full dark:bg-gray-900 dark:text-gray-100 dark:font-light rounded-md border border-gray-300 dark:border-gray-500 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 dark:focus:ring-indigo-900">
          {localStorage.getItem("i18nextLng") === "fa" ? "Persian" : language}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0  mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:rounded-md hover:overflow-hidden dark:overflow-hidden   focus:outline-none dark:bg-gray-900 dark:text-gray-100">
          <div className=" dark:bg-gray-900 dark:text-gray-100 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => clickHandler("en", "English")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm w-full dark:bg-gray-900 dark:text-gray-100 "
                  )}
                >
                  English
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => clickHandler("fa", "Persian")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                    "block px-4 py-2 text-sm w-full dark:bg-gray-900 dark:text-gray-100     "
                  )}
                >
                  Persian
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageMenu;
