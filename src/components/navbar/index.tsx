import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
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
        <Link to={"/"}>KopalMuhamad</Link>
        <ul className="hidden sm:flex items-center justify-center gap-4">
          <li>
            <Link to={"#"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>About</Link>
          </li>
          <li>
            <Link to={"#"}>Project</Link>
          </li>
          <li>
            <Link to={"#"}>Contact</Link>
          </li>
        </ul>
        <div className="block sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to={"/"}>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/"}>About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/"}>Project</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/"}>Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
