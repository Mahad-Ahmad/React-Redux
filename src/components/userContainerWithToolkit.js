import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "../redux/reduxToolKit/reduxSaga";

function UserContainer() {
  let users = useSelector((state) => state.users);
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
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
      <Button
        variant="contained"
        onClick={() => dispatch(getUsers())}
        size="large"
      >
        Get Users
      </Button>
    </>
  );
}

export default UserContainer;
