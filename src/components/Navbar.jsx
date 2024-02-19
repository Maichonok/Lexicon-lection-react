import "./Navbar.css";

export function Navbar() {
  //   const number = 10;
  //   const home = "Home";
  //   const about = "About";
  //   const contact = "Contact";
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  //   let contact = "Contact";
  //   contact="Something else";
  //   if (number === 10) {
  //    contact = "The number is 10";
  //      }
  //   return (
  //     <nav className="navbar">
  //       <a href="#">{home}</a>
  //       <a href="#">{about}</a>
  //       <a href="#">{contact}</a>
  //     </nav>
  //   );
  return (
    <nav className="navbar">
      {links.map((link) => {
        return (
          <a key={link.id} href={link.path}>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}
