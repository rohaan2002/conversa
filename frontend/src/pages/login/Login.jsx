import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-[2rem] shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          LOGIN TO
          <span className="conversa-thematic text-4xl"> Conversa.</span>
        </h1>

        <form action="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-12 rounded-[2rem]" />
          </div>
            <label htmlFor="" className="label">
                <span className="text-base label-text">
                Password
                </span>
            </label>
            <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-12 rounded-[2rem]" />
          <div>

                <Link to="/signup" className="text-base hover:underline hover:text-blue-300 m-2 inline-block">
                    Don't have an account? Sign Up.
                </Link>

                <div>
                    <button className="btn btn-block btn-base text-base mt-2">Login</button>
                </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
