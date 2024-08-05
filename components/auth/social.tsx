"use client";
import React from "react";
//! comps
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface SocialProps {}

const Social = (props: SocialProps) => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button size={"lg"} className="w-full" variant={"outline"}>
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button size={"lg"} className="w-full" variant={"outline"}>
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;
