const Overview = () => {
  const photoURL = null;
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* main div 1 */}
      <div className="border border-gray-100 shadow-md rounded-xl ">
        <div className="text-xl bg-gray-300 font-bold p-2 pl-3  rounded-t-xl">
          My Profile
        </div>
        <div className="avatar border-2 p-1 shadow-xl rounded-full bg-white m-3">
          <div className="w-24 md:w-32 rounded-full">
            <img src={photoURL} />
          </div>
        </div>
        <div className="flex justify-between px-2 md:px-8 mt-2">
          <p className="text-lg font-semibold">Jashim Ali</p>
          <p className="font-semibold bg-green-300 bg-opacity-85 pt-1 md:px-3 rounded-full px-2 ">
            Edit
          </p>
        </div>
        <p className="mt-3 text-lg font-medium md:ml-5 ml-2 mb-3">
          012222222222
        </p>
      </div>
      {/* main div 2 */}
      <div className=" border border-gray-100 shadow-md rounded-xl bg-green-300 ">
        <div className="text-xl bg-gray-300 font-bold p-2 pl-3 rounded-t-xl">
          My Email Address
        </div>
        <div className="text-lg font-semibold flex justify-center items-center h-full  bg-opacity-85">
          <p className="bg-[#1C444D] text-white p-3 rounded-md break-all m-5 md:m-0">
            hadiurahman139@gmail.com
          </p>
        </div>
      </div>
      {/* main div 3 */}
      <div className=" border border-gray-200 shadow-md rounded-xl md:col-span-2 flex justify-evenly p-3 flex-col md:flex-row">
        <p className="text-lg font-semibold">Account Balance : </p>
        <p className="text-lg font-medium break-all">34394394</p>
      </div>
    </section>
  );
};

export default Overview;