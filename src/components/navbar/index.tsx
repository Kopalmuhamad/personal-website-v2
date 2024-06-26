import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Link } from "react-scroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[70px] z-50 ${
        isBlurred ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <RouterLink to={"/"}>KopalMuhamad</RouterLink>
        <ul className="hidden sm:flex items-center justify-center gap-4">
          <li>
            <Link
              className="cursor-pointer"
              to="hero"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              to="project"
              smooth={true}
              duration={500}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="block sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="hero" smooth={true} duration={500}>
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="project" smooth={true} duration={500}>
                  Project
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
