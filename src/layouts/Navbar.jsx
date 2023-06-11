import { Link } from "react-router-dom";
import { WannIcon } from "../icons";

export default function Header() {
  return (
    <header className="flex flex-row bg-white shadow-lg sticky top-0 z-10 items-center justify-end font-mono">
      <div className="py-2 justify-self-start p-3 flex-1">
        <Link to="/home">
          <WannIcon />
        </Link>
      </div>
      <div className="flex justify-around gap-10 p-4 ">
        <div>Home</div>|<div>Proflie</div>
      </div>
    </header>
  );
}
