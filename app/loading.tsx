import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex flex-center h-screen">
      <Image priority src={loader} height={150} width={150} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
