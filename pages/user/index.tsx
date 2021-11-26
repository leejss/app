import React from "react";
import { useUsers } from "../../hooks";

const UserPage = () => {
  const { data } = useUsers();

  return (
    <div>
      <ul>
        {data?.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserPage;
