import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import styles from "./AddUser.module.css";

function AddUser({ onAddUser }) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangedHandler = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const ageChangedHandler = (event) => {
    const { value } = event.target;
    setAge(value);
  };

  const invalidForm = () => {
    return false;
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    // check username
    if (username.trim() === "") {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username (non-empty)",
      });

      return;
    }

    // check age
    if (age.trim() === "" || age <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    // add user
    onAddUser(username, age);

    // reset inputs
    setUsername("");
    setAge("");
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onOk={clearErrorHandler}
        />
      )}
      <Card styleClass={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Add a name"
            value={username}
            onChange={usernameChangedHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="0"
            value={age}
            onChange={ageChangedHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
