type Props = {
  tags: string[];
};

export default function BlogTags(props: Props) {
  return (
    <ul>
      {props.tags.map((value) => (
        <span key={props.tags.indexOf(value)} className="md:transition ease-in-out delay-150 hover:-translate-y-1 inline-block bg-gray-200 dark:bg-stone-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {`#${value}`}
        </span>
      ))}
    </ul>
  );
}
