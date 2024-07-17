import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
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
          REGISTRATION
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
            {/* user photo url input*/}
            <div className="mt-5 form-control">
              <label>
                Photo URL<span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Plase provide a photo Url"
                name="photoUrl"
                type="url"
                size="md"
                color="green"
                {...register("photoUrl", { required: true })}
                className="py-3 text-xl"
              />
              {errors.photoUrl && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* User name input */}
            <div className="mt-5 form-control">
              <label>
                Name <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Name"
                name="name"
                type="text"
                size="md"
                color="green"
                {...register("name", { required: true })}
                className="py-3 text-xl"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* User Number input */}
            <div className="mt-5 form-control">
              <label>
                Number <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Number"
                name="number"
                type="number"
                size="md"
                color="green"
                {...register("number", { required: true })}
                className="py-3 text-xl"
              />
              {errors.number && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* User Email input */}
            <div className="mt-5 form-control">
              <label>
                Email <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Email"
                name="email"
                type="email"
                size="md"
                color="green"
                {...register("email", { required: true })}
                className="py-3 text-xl"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* User Expected role input */}
            <div className="mt-5  form-control">
              <label>
                Expected Role <span className="text-red-400">*</span>{" "}
              </label>
              <select
                name="expectedRole"
                className="select select-success w-full text-base mt-2"
                {...register("expectedRole", { required: true })}
              >
                <option>User</option>
                <option>Agent</option>
                <option>Admin</option>
              </select>

              {errors.expectedRole && (
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
                REGISTER
              </Button>
              {/* <ToastContainer /> */}
            </div>
          </form>
          <div className="mt-10 ">
            <h1 className="text-[#39474F] text-xl">
              Already Have An Account ? Please{" "}
              <Link className="text-blue-500 underline" to="/login">
                Login
              </Link>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
