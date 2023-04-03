import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  loggedIn: boolean;
  children: React.ReactNode;
};

export default function Protected({ loggedIn, children }: Props) {
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children}</div>;
}
