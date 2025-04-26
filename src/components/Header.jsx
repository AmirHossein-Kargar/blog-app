// "use client";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Button } from "@mui/material";
import NavLink from "./NavLink";

const navLinks = [
  {
    id: 1,
    children: "Home",
    path: "/",
  },
  {
    id: 2,
    children: "Blogs",
    path: "/blogs",
  },
];

export default function Header() {
  // const { user, isLoading } = useAuth();
  return (
    <>
      <ul className="flex gap-4 items-center">
        {navLinks.map((navLink) => {
          return (
            <li className="text-sm" key={navLink.id}>
              <NavLink path={navLink.path}>{navLink.children}</NavLink>
            </li>
          );
        })}
        <span>/</span>
        <li>
          <Button
            size="small"
            style={{
              padding: "0",
              backgroundColor: "transparent",
            }}
          >
            Sign In
            <LoginOutlinedIcon color="primary" fontSize="small" />
          </Button>
          {/* <Button
            size="small"
            style={{
              padding: "0",
              backgroundColor: "transparent",
            }}
          >
            Profile
            <PersonOutlineOutlinedIcon color="primary" fontSize="small" />
          </Button> */}
        </li>
      </ul>
    </>
  );
}
