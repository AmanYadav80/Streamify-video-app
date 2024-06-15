import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/SideBarSlice";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((store) => store.sideBar.isSideBarOpen);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    setShowSuggestions(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSuggestions(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    dispatch(toggleSideBar());
  };

  const handleInputBlur = () => {
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (search) => {
    setSearchQuery(search);
    setShowSuggestions(false);
  };

  return (
    <div className="flex justify-between p-6 -mt-2 border-b-2 border-grey-300 ">
      <div className="flex items-center">
        {sideBar ? (
          <RxCross2
            className="mr-3 font-bold text-white text-2xl cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <RxHamburgerMenu
            className="mr-3 font-bold text-white text-2xl cursor-pointer"
            onClick={handleClick}
          />
        )}
        <h2 className="text-white font-bold text-2xl font-mono">Streamify</h2>
      </div>
      <div>
        <div>
          <input
            type="text"
            className="text-white font-bold bg-[#1d2432] opacity-80 p-3 mr-[3px] w-[350px] rounded-l-full "
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={handleInputBlur}
            ref={inputRef}
          />
          <button className="p-4 text-white bg-[#1d2432] opacity-30 rounded-r-full">
            <FaSearch className="text-white font-bold" />
          </button>
        </div>
        {showSuggestions && (
          <div
            ref={suggestionsRef}
            className="fixed bg-white w-[330px] mx-4 text-lg font-medium rounded-lg shadow-lg"
          >
            <ul>
              {searchSuggestions.map((search) => (
                <li
                  onMouseDown={() => handleSuggestionClick(search)}
                  key={search}
                  className="p-4 shadow-lg cursor-pointer"
                >
                  {search}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="text-white gap-16">user</div>
    </div>
  );
};

export default Header;
