import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { CgPlayListSearch } from "react-icons/cg";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaFire } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { MdOutlinePodcasts } from "react-icons/md";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="bg-black bg-opacity-30 w-[18%] h-screen text-white border-r-2 border-grey-100 p-4">
      <div className="border-b-2 border-grey-300  ml-2 mr-2 mt-4 mb-4">
        <ul>
          <li>
            <Link to={"/"}>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <FaHome className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <SiYoutubeshorts className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Shorts</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <MdSubscriptions className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Subscriptions</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-grey-300 m-1 mt-4 mb-4">
        <ul>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <FaHistory className="text-2xl font-bold" />
                <span className="ml-2 text-xl">History</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <CgPlayListSearch className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Playlists</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <BiSolidVideos className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Liked Videos</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <PiDownloadSimpleBold className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Downloads</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className=" m-1 mt-4 mb-4">
        <ul>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <FaFire className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Trending</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <MdLocalMovies className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Movies</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex items-center cursor-pointer p-3 m-2 hover:bg-white hover:bg-opacity-30 hover:rounded-lg">
                <MdOutlinePodcasts className="text-2xl font-bold" />
                <span className="ml-2 text-xl">Podcasts</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
