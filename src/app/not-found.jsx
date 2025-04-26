"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

import ComputerSvg from "@/assets/computer.png";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { useMoveBack } from "@/hooks/useMoveBack";

export default function notfound() {
  const moveBack = useMoveBack();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center select-none">
      <Image src={ComputerSvg} width={300} height={300} alt="404" />
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button variant="outlined" size="medium" color="error" onClick={moveBack}>
        Go Back
        <ArrowRightAltOutlinedIcon fontSize="medium" />
      </Button>
    </div>
  );
}
