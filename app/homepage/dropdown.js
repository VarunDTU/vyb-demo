import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-left">
      <div>
        <div
          className="w-[100px] h-[41px] bg-white rounded-2xl flex items-center justify-evenly cursor-pointer"
          onClick={toggleDropdown}
        >
          <FaUser className="text-black" size={20}></FaUser>
          <MdKeyboardArrowDown className="text-black"></MdKeyboardArrowDown>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black text-white font-normal ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-xl hover:bg-gray-800"
              role="menuitem"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-xl hover:bg-gray-800"
              role="menuitem"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-xl hover:bg-gray-800"
              role="menuitem"
            >
              My Store
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
