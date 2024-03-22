"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signInAction } from "./auth.action";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export const SignInButton = () => {
  return (
    <LoginLink>Sign in</LoginLink>
  );
};
