// * This is a React component that displays a post card with an image and title.
"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// * Icons
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Author from "./Author";

export default function PostCard({
  coverImage,
  title,
  slug,
  author,
  authorName,
  readingTime,
}) {
  return (
    <div className="shadow-md border border-gray-200 rounded-lg mb-5">
      <Link href={`/blogs/${slug}`}>
        <Image
          className="rounded-t-lg w-full h-48 object-cover"
          src={`${process.env.NEXT_PUBLIC_API_URL}/${coverImage}`}
          width={100}
          height={100}
          alt={title}
        />
      </Link>

      <div className="flex flex-col px-5">
        <Link href={`/blogs/${slug}`}>
          <h5 className=" text-2xl tracking-tight my-2">{title}</h5>
        </Link>
        <p className="mb-3  font-normal line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          voluptas itaque natus, ullam ipsam quisquam quas qui placeat delectus
          quos.
        </p>
      </div>

      {/* Post Author and ReadingTime */}
      <Author author={author} authorName={authorName} readingTime={readingTime}/>

      <div className="p-5">
        <Link href={`/blogs/${slug}`}>
          <Button size="small" variant="outlined" className="max-sm:w-full">
            Read More
            <ReadMoreIcon fontSize="small" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
