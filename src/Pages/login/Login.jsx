import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    // reset,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-4 my-20 md:container lg:max-w-6xl lg:mx-auto md:px-8 ">
      {/* <Helmet>
      <title>NovaHomes | Register Page</title>
    </Helmet> */}
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-green-500">
          YOUR LOG IN
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-[#39474F]">
          FORM
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-2/6"></div>
        <div className="w-full lg:w-4/6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-xl text-[#39474F] grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* User Number or Email input */}
            <div className="mt-5 form-control">
              <label>
                Number / Email <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Number or Email"
                name="identifier"
                type="text"
                size="md"
                color="green"
                {...register("identifier", { required: true })}
                className="py-3 text-xl"
              />
              {errors.identifier && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* User 5 digit pin input */}
            <div className="mt-5 form-control">
              <label>
                PIN <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your 5 digit PIN"
                name="pinNumber"
                type="number"
                size="md"
                color="green"
                {...register("pinNumber", { required: true })}
                className="py-3 text-xl"
              />
              {errors.pinNumber && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="mt-10">
              <Button
                type="submit"
                color="green"
                className=" text-base rounded-full px-10"
              >
                LOGIN
              </Button>
              {/* <ToastContainer /> */}
            </div>
          </form>
          <div className="mt-10 ">
            <h1 className="text-[#39474F] text-xl">
              New To This Website ? Please{" "}
              <Link className="text-blue-500 underline" to="/register">
                REGISTER
              </Link>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
