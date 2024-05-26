/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios";

export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  // add debouncing here (Common usecase)
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        .then(response => {
            setUsers(response.data.user)
        })

  }, [filter])

  return (
    <div className="mt-4">
      <div className="text-lg pb-2">Users</div>
      <input
        type="text"
        placeholder="Search users..."
        className="border p-2 rounded-lg w-full"
        onChange={(e) => {
            setFilter(e.target.value);
        }}
      />
      <div className="pt-4">
        {users.map((user) => (
          <UserCard label={user.firstName} user={user} />
        ))}
      </div>
    </div>
  );
}
