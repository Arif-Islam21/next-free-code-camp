import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const links = (
    <>
      {navItems.map((item, idx) => (
        <li>
          <Link href={item.path} key={idx}>
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="navbar container shadow-md mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Webpage logo"
              height={30}
              width={70}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-6">
          <Link href="/">
            <IoBagOutline size={24} />
          </Link>
          <Link href="/">
            <IoSearchOutline size={24} />
          </Link>
          <Link href="/" className="btn btn-primary btn-outline px-8">
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
