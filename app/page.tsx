import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="grid grid-flow-col">
      <div className="col-start-2">
        <Posts />
      </div>
      <div className="col-start-3">
        <Sidebar />
      </div>
    </div>
  );
}
