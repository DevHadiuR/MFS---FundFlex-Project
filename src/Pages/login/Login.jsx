import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    // reset,
    formState: { errors },
  } = useForm();

  //   const { data: userInfo = [], refetch } = useQuery({
  //     queryKey: ["singleUserInfo"],
  //     queryFn: async () => {
  //       const res = await axiosPublic.get("/login-for-userInfo");
  //       return res.data;
  //     },
  //   });

  const onSubmit = (data) => {
    console.log(data);

    if (data) {
      axiosPublic
        .post("/login-for-userInfo", data)
        .then((res) => {
          const data = res.data;

          const newDataWithoutPin = {
            photoUrl: data.photoUrl,
            name: data.name,
            number: data.number,
            email: data.email,
            status: data.status,
          };
          const newDataString = JSON.stringify(newDataWithoutPin);

          if (newDataString) {
            navigate("/overview");

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
                    Swal.fire({
                      title: "Congratulation!",
                      text: "You Have Successfully Loged In!",
                      icon: "success",
                    });
                    //   setLoader(false);
                  }
                });
              }
            }
          }

          //
          console.log(data);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    }
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
                name="loginPinNumber"
                type="number"
                size="md"
                color="green"
                {...register("loginPinNumber", { required: true })}
                className="py-3 text-xl"
              />
              {errors.loginPinNumber && (
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
