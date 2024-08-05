import React from "react";
//! comps
import CardWrapper from "@/components/auth/card-wrapper";

type LoginFormProps = {};

const LoginForm = ({}: LoginFormProps) => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
