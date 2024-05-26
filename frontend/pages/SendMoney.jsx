import { InputBox } from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState();

  return (
    <div className="flex justify-center h-screen bg-gray-100 items-center">
      <div className="border h-min max-w-md p-4 space-y-4 w-96 bg-white shadow-lg rounded-lg">
        <div className="text-4xl font-bold text-center pt-2">Send Money</div>
        <div className="flex space-x-4 items-center">
          <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center">
            {name[0].toUpperCase()}
          </div>
          <div className="text-xl font-medium">{name}</div>
        </div>
        <div>
          <InputBox
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            label={"Amount (in Rs)"}
            placeholder={"Enter Amount"}
          />
        </div>
        <div className="pb-4">
          <button
            onClick={() => {
              axios.post("http://localhost:3000/api/v1/account/transfer", {
                amount: amount,
                to: id,
              },{
                headers : {
                  Authorization : "Bearer " + localStorage.getItem("token")
                }
              });
            }}
            className="bg-green-500 w-full text-white rounded-lg p-2"
          >
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
