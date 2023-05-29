import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const dummyData = [
  { id: "user1", username: "lefos", age: 24 },
  { id: "user2", username: "maria", age: 20 },
];

function App() {
  const [users, setUsers] = useState(dummyData);

  const addUserHandler = (username, age) => {
    setUsers((oldUsers) => [
      ...oldUsers,
      { id: Math.random().toString(), username, age },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
