import React, { useState } from "react";
import { Button, Input, Logo } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { login, logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  // const navigate=useNavigate()
  // constt dispatch=useDispatch()
  const { register, handlesubmit } = useForm();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          // dispatch(userData)
        }
        // navigate("/")
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className=""></div>
    </div>
  );
}
