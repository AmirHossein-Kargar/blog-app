import { Suspense } from "react";
import CategoryList from "./_private/CategoryList";
import { CircularProgress } from "@mui/material";

export default function layout({ children }) {
  return (
    <div className="h-screen container p-5">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-4 lg:col-span-4 xl:col-span-3">
          <h1 className="text-lg font-bold">Blogs List</h1>
          <Suspense fallback={<CircularProgress />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}
