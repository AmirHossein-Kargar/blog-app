import { Suspense } from "react";
import PostLIst from "./_private/PostLIst";
import { CircularProgress } from "@mui/material";

export const metadata = {
  title: "Blogs",
};

export default async function BlogListPage() {
  return (
    <>
      <h1 className=" text-2xl font-bold">
    Blog Page
      </h1>
      <Suspense fallback={<CircularProgress />}>
        <PostLIst />
      </Suspense>
    </>
  );
}
