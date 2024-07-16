import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const CashIn = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-4 my-14 md:container lg:max-w-6xl lg:mx-auto md:px-8">
      {/* <Helmet>
      <title>NovaHomes | Register Page</title>
    </Helmet> */}
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-green-500">
          Cash IN
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal text-[#39474F]">
          ReQuest
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-2/6"></div>
        <div className="w-full lg:w-4/6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-xl text-[#39474F] grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* Agent Number input */}

            <div className="mt-5  form-control">
              <label>
                Select Agent <span className="text-red-400">*</span>{" "}
              </label>
              <select
                name="cashInAgentNumber"
                className="select select-success w-full text-base mt-2"
                {...register("cashInAgentNumber", { required: true })}
              >
                <option>One Piece</option>
                <option>Naruto</option>
              </select>

              {errors.cashInAgentNumber && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Cash out Money Amount input */}
            <div className="mt-5 form-control">
              <label>
                Amount <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Give the amount"
                name="cashInAmount"
                type="Number"
                size="md"
                color="green"
                {...register("cashInAmount", { required: true })}
                className="py-3 text-xl"
              />
              {errors.cashInAmount && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* PIN input */}
            <div className="mt-5 form-control relative">
              <label>
                PIN <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your valid PIN"
                name="cashInnerPin"
                type={showPass ? "text" : "password"}
                size="md"
                color="green"
                {...register("cashInnerPin", { required: true })}
                className="py-3 text-xl"
              />
              <span
                onClick={handleShowPassword}
                className="absolute bottom-3 right-5 text-2xl cursor-pointer"
              >
                {showPass ? (
                  <IoEye className="text-black" />
                ) : (
                  <IoMdEyeOff className="text-black" />
                )}
              </span>
              {errors.cashInnerPin && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mt-10">
              <Button
                type="submit"
                color="green"
                className=" text-base rounded-full px-10"
              >
                MONEY-IN
              </Button>
              {/* <ToastContainer /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CashIn;
