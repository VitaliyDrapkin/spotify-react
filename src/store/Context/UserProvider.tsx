import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

interface OwnProps {
  children: React.ReactNode;
}

interface PropsFromState {}

interface PropsFromDispatch {}

type AllProps = OwnProps & PropsFromState & PropsFromDispatch;

const UserProvider = (props: AllProps) => {
  const [name, setName] = useState("zxc");

  const addLetter = () => {
    setName(name + "a");
  };

  return (
    <UserContext.Provider value={{ name, addLetter }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
