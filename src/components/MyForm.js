import { Container, Input, Button } from "@mui/material";
import { useState } from "react";

const MyForm = () => {
  const [user, setuser] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (prop) => (event) => {
    setuser({ ...user, [prop]: event.target.value });
  };
  return (
    <>
      <Container>
        <Input value={user.id} fullWidth disable />
        <Input
          onChange={() => handleChange("name")}
          placeholder="Enter Name"
          value={user.name}
          fullWidth
        />
        <Input
          onChange={() => handleChange("email")}
          placeholder="Enter Email"
          value={user.email}
          fullWidth
        />
        <Input
          onChange={() => handleChange("password")}
          placeholder="Enter Password"
          value={user.password}
          fullWidth
        />
        <Button fullWidth varient="contained">
          Submit
        </Button>
      </Container>
    </>
  );
};

export default MyForm;
