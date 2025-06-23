"use client";

import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("componente lançando um error");
  }, []);

  return <h2>sadkfjksd</h2>;
};
