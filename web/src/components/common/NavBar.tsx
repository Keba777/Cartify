import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FiUser, FiSearch } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";

const links = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Collections", href: "/collections" },
  { label: "Outlet", href: "/outlet" },
];

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-2 text-primary">
      <div className="flex space-x-24">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-28 " />
        </Link>

        <ul className="flex items-center space-x-5 font-semibold">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-2">
        <IoCartOutline />
        <FiSearch />
        <FiUser />
        <LuHeart />
      </div>
    </nav>
  );
};

export default NavBar;
