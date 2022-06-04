import React, { useContext } from "react";

import { Usuario } from "./@types/api";

export const UserContext = React.createContext<Usuario | undefined>(undefined);

export const getUser = () => {
  return useContext(UserContext);
};
