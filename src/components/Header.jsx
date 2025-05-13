import Image from "next/image";
import NavLink from "./NavLink";

function Header() {
  const navLinks = [
    {
      id: 1,
      children: "خانه",
      path: "/",
    },
    {
      id: 2,
      children: "محصولات",
      path: "/blogs",
    },
  ];
  return (
    <header className="sticky top-0 border-b border-b-secondary-300 bg-gray-50 px-4 text-secondary-400 z-50">
      <nav className="container xl:max-w-screen-xl mx-auto">
        <ul className="flex items-center justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
          <div className="flex items-center gap-x-2">
            <p className="font-black">رسادنت</p>
            <Image src="/images/logo.webp" width="28" height="28" alt="logo" />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
