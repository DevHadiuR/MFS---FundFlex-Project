import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const regex = /^\d{5}$/;
    if (!regex.test(data.pinNumber)) {
      Swal.fire({
        title: "PIN must be 5 digit number!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // const userInfo = {
    //   email: data.email,
    // };
    const newData = {
      ...data,
      status: "Pending",
    };

    console.log(newData);

    axiosPublic
      .post("/allUsers", newData)
      .then((userRes) => {
        const data = userRes.data;
        console.log(data);
        if (data.message) {
          Swal.fire({
            icon: "info",
            title: data.message,
          });
          //   navigate(from, { replace: true });
        }

        if (data.insertedId) {
          navigate("/overview");
          Swal.fire({
            title: "Congratulation!",
            text: "You Have Successfully Registered!",
            icon: "success",
          });

          const newDataWithoutPin = {
            photoUrl: newData.photoUrl,
            name: newData.name,
            number: newData.number,
            email: newData.email,
            status: newData.status,
          };

          const newDataString = JSON.stringify(newDataWithoutPin);
          if (newDataString) {
            localStorage.setItem("user-info", newDataString);
            const storedDataString = localStorage.getItem("user-info");
            if (storedDataString) {
              const storedData = JSON.parse(storedDataString);
              const storedEmail = storedData.email;
              if (storedEmail) {
                const userInfo = {
                  email: storedEmail,
                };

                axiosPublic.post("/jwt", userInfo).then((res) => {
                  console.log(res.data);
                  if (res.data.token) {
                    localStorage.setItem("access-token", res.data.token);
                    window.location.reload();
                    //   setLoader(false);
                  }
                });
              }
            }
          }
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: err,
        });
      });
  };

  //   const email = localStorage.getItem("user-info", email);
  //   if (email) {
  //     console.log("email from local", email);
  //   }
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
