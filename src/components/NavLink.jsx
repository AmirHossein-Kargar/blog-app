"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children }) {
  const pathName = usePathname();

  return (
    <Link
      className={`block py-2 transition-all ease-out ${
        pathName === path ? "text-blue-500" : ""
      }`}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
