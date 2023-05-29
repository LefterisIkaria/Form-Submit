import React from "react";
import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

function UserList({ users }) {
  return (
    <Card styleClass={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
