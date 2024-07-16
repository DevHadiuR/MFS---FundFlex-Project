import { FaCheckCircle } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";


const UserManageByAdmin = () => {
  return (
    <section className="w-[90%] mx-auto mt-10">
      {/* <Helmet>
  <title>NovaHomes | Admin Manage Agent Added Properties , Page</title>
</Helmet> */}
      {/* <>
  <DynamicTitleDesc
    title={"Property Verification Control Center"}
    subTitle={
      "Empower administrative control over agent-added properties with advanced verification tools. Review, verify, or reject properties with precision. Enhance platform integrity by ensuring only verified properties are showcased, providing users with trusted listings."
    }
  />
</> */}
      {/* main div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" border-2 border-[#39474F] bg-white p-3 py-5 rounded-2xl space-y-3 ">
          <div className="">
            <div className="avatar flex justify-center mb-2">
              <div className="w-12 md:w-14 mask mask-squircle">
                <img referrerPolicy="no-referrer" src="/blogo1.jpg" />
              </div>
            </div>

            <p className="text-xl font-semibold  py-2 ">
              <span>User Name : </span>
              <span className="opacity-85 break-all">heloodddddddddddddd</span>
            </p>
            <p className="text-xl font-semibold  py-2 ">
              <span>User ID : </span>
              <span className="opacity-85 break-all">
                hloooodddddddddddddddddddddddddddd
              </span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Email : </span>
              <span className="opacity-85 break-all">
                {" "}
                hedddddddddddddddddddddloo
              </span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Phone Number : </span>
              <span className="opacity-85"> hdddddeloo</span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Account Status : </span>
              <span className="opacity-85"> heloo</span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Requested Role : </span>
              <span className="opacity-85"> heloo</span>
            </p>
          </div>

          <div className="flex justify-center gap-5">
            <p
              // onClick={() => handleUsersReviewDelete(review._id)}
              className="hover:scale-110 transition-all p-2 rounded-xl cursor-pointer mr-5 bg-red-400"
            >
              <ImBlocked className="text-2xl text-white" />
            </p>
            <p
              // onClick={() => handleUsersReviewDelete(review._id)}
              className="hover:scale-110 transition-all p-2 rounded-xl cursor-pointer mr-5 bg-green-400"
            >
              <FaCheckCircle className="text-2xl text-white" />
            </p>
          </div>
        </div>
        <div className=" border-2 border-[#39474F] bg-white p-3 rounded-2xl ">
          <div className="">
            <div className="avatar">
              <div className="w-12 md:w-14 mask mask-squircle">
                <img referrerPolicy="no-referrer" src="/blogo1.jpg" />
              </div>
            </div>

            <p className="text-xl font-semibold  py-2 ">
              <span>User Name : </span>
              <span className="opacity-85">heloo</span>
            </p>
            <p className="text-xl font-semibold  py-2 ">
              <span>User ID : </span>
              <span className="opacity-85">hloooo</span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Email : </span>
              <span className="opacity-85"> heloo</span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Phone Number : </span>
              <span className="opacity-85"> heloo</span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Account Status : </span>
              <span className="opacity-85"> heloo</span>
            </p>
            <p className="text-xl font-semibold  py-2">
              <span>Requested Role : </span>
              <span className="opacity-85"> heloo</span>
            </p>
          </div>

          <div className="flex">
            <p
              // onClick={() => handleUsersReviewDelete(review._id)}
              className="hover:scale-110 transition-all p-2 rounded-xl cursor-pointer mr-5 bg-red-400"
            >
              <ImBlocked className="text-2xl text-white" />
            </p>
            <p
              // onClick={() => handleUsersReviewDelete(review._id)}
              className="hover:scale-110 transition-all p-2 rounded-xl cursor-pointer mr-5 bg-green-400"
            >
              <FaCheckCircle className="text-2xl text-white" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserManageByAdmin;
