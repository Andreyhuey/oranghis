import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Nav } from "../components";

const Homepage = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        `${process.env.PORT}`,
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <Nav />
      <div className="vh-100 d-flex align-items-center justify-content-center ">
        <div className="">
          <h1>
            Welcome <span>{username}</span>
          </h1>
          <h2 className="text-center">
            ONDO STATE CONTRIBUTORY HEALTH COMMISSION (ODCHC)
          </h2>
          <h2 className="display-1 fw-bold text-center">ORANGHIS</h2>
        </div>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Homepage;
