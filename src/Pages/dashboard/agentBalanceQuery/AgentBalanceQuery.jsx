import { TbHomeFilled } from "react-icons/tb";

const AgentBalanceQuery = () => {
  return (
    <section>
    <div className="flex justify-center mt-10">
      <TbHomeFilled className="md:w-40 md:h-40 w-20 h-20 text-[#1C444D]" />
    </div>
    <div className="w-[80%] mt-10 mx-auto">
      <div className="flex justify-between border-b-2 border-green-800 pb-3 mt-5 px-2 gap-2">
        <p className="text-lg font-semibold">Name:</p>
        <p className="break-all">HAdiur rahmansdfdsfsdfsdf</p>
      </div>
      <div className="flex justify-between border-b-2 border-green-800 pb-3 mt-5 px-2 gap-2">
        <p className="text-lg font-semibold">Role:</p>
        <p className="break-all">Agent</p>
      </div>
      <div className="flex justify-between border-b-2 border-green-800 pb-3 mt-10  px-2 gap-2">
        <p className="text-lg font-semibold">A / N :</p>
        <p className="break-all">343434343</p>
      </div>
      <div className="flex justify-between border-b-2 border-green-800 pb-3 mt-10 px-2 gap-2">
        <p className="text-lg font-semibold">Balance :</p>
        <p className="break-all">232323</p>
      </div>
    </div>
  </section>
  );
};

export default AgentBalanceQuery;
