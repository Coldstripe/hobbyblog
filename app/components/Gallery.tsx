type Props = {
  children: JSX.Element[];
};

export default function Gallery({children}: Props) {
  return (
    <div className="container rounded-3xl mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {children.map((img, i) => (
          <div key={i} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">{img}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
