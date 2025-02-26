import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center px-4">
          <Heading label="Sign Up" />
          <SubHeading label="Enter your information to create an account" />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label="First Name"
            placeholder="John"
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label="Last Name"
            placeholder="Doe"
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label="Email"
            placeholder="johndoe@example.com"
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
          />
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username: username,
                  password: password,
                  firstName: firstName,
                  lastName: lastName,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"Sign up"}
          />
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Login"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
