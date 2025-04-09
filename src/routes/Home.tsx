import React from "react";
import { Search } from "../components/Search";
import { useState } from "react";
import { UserProps } from "../types/user";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  return (
    <div>
      <Search />
    </div>
  );
};
