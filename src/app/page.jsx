"use client";
import { Button } from "@mui/material";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-mint-500">
      <h1 className="mb-8 text-2xl font-bold text-center md:text-5xl text-primary">
        Blog Application
      </h1>
      <div>
        <p className="text-lg text-center">
          A place where you can manage a complete blog application,
          <br /> create blogs, leave comments, and monitor everything happening
          in your dashboard.
        </p>
      </div>
      <div className="flex justify-center w-full mt-10 gap-x-8">
        <Button variant="outlined">
          <Link href="/blogs">Read Blogs</Link>
        </Button>
        <Button color="primary" variant="contained">
          <Link href="/profile">Manage Blogs</Link>
        </Button>
      </div>
    </div>
  );
}
