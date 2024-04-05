import React, { lazy } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({ placeholder, icon, value, setValue, styles }) => {

    const handleChange = (e) => {
        setValue(e.target.value);
    };

  return (
    <div className={`flex w-full md:w-1/3 items-center ${styles}`}>
      {icon}
      <input value={value} onChange={(e) => handleChange(e)} />
    </div>
  );
};

const Header = ({
  title,
  type,
  handleClick,
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
}) => {
  return (
    <div className="bg-[#f7fdfd]">
      <div
        className={`container mx-auto px-5 ${
          type ? "h-[500px]" : "h-[350px]"
        } flex items-center relative`}
      >
        <div className="w-full z-10">
          <div className="mb-8">
            <p className="text-slate-800 font-bold text-4xl">{title}</p>
          </div>

          <div className="w-full flex items-center justify-around bg-white pz-2 md:px-5 py-2.5 md:py-6 shadow-2x1 rounded-full">
            <SearchInput
              placeholder="Job Title or Keywords"
              icon={<AiOutlineSearch className="text-gray-600 text-xl" />}
              value={searchQuery}
              setValue={setSearchQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
