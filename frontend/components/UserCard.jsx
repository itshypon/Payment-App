/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function UserCard({ label, user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex space-x-2 items-center">
        <div className="rounded-full flex justify-center items-center w-10 h-10 text-sm bg-slate-200">
          U
        </div>
        <div className="text-md">{label}</div>
      </div>

        <button onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }} className="rounded-lg bg-black text-white p-2 text-sm">
          Send Money
        </button>

    </div>
  );
}
