import dynamic from "next/dynamic";

export default function DynamicNavbar() {
    const DynamicNavbar = dynamic(() => import("../Navbar"), {
        ssr: false,
      });
  return (
    <DynamicNavbar />
  )
}
