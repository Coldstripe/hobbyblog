type Props = {
  errorMsg: string
}
export default function ErrorCard(props: Props) {
  return (
    <div className="container h-auto m-2 drop-shadow">
      <div className="relative w-1/2 mx-auto font-bold text-center bg-red-800 rounded text-white/90">
        {props.errorMsg}
      </div>
    </div>
  );
}
