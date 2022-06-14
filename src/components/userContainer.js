import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  let users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  return (
    <>
      {users.loading ? (
        <h2>loading</h2>
      ) : users.error ? (
        <h2>{users.error}</h2>
      ) : (
        <div>
          <ul>
            {users.users.map((user) => (
              <li>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
      <Button
        variant="contained"
        onClick={() => dispatch(fetchUsers())}
        size="large"
      >
        Get Users
      </Button>
    </>
  );
}

export default UserContainer;
