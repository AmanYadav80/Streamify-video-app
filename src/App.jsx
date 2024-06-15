import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import Login from "./components/Login";
const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <div className="relative z-20 bg-[#111827]">
        <Header/>
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
}

export default App;
