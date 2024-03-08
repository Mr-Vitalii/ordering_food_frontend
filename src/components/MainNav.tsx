import React from "react";
import { Button } from "./ui/button";

export const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-orange-500 hover:bg-white"
    >
      Log In
    </Button>
  );
};