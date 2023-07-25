import ExportedImage from "next-image-export-optimizer";
import { FaMapPin } from "react-icons/fa";

type Props = {
  title: string;
  date: string;
  headerImg: string;
  isPinned: boolean;
  description: string;
};
export default function BlogCard(props: Props) {
  return (
    <div className="relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <ExportedImage
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        width={200}
        height={200}
        src={props.headerImg}
        alt={props.title}
      />
      {props.isPinned && (
        <div className="top-2 right-2 absolute">
          <FaMapPin title="Pinned" />
        </div>
      )}
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {props.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {props.description}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          {props.date}
        </p>
      </div>
    </div>
  );
}
