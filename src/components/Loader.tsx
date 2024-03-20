import { Blocks } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <Blocks color="#f5901d" height={50} width={50} />
    </div>
  );
};
