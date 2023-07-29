import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

export const revalidate = 86400;

export default function Home() {
  return (
    <div>
      <div>
        <Posts />
      </div>
    </div>
  );
}
