import GithubIcon from "./icons/github-icon";
import LinkedInIcon from "./icons/linkedin";
import XIcon from "./icons/x-icon";

export default function NavegationBar() {
  return (
    <nav className="flex flex-row h-16 w-full border-b border-black font-bold">
      <header className="flex-1 flex justify-center items-center text-2xl sm:text-3xl">
        <h1>
          <span className="text-secondary">BYTE</span>
          <span className="text-primary">FEMME</span>
        </h1>
      </header>
      <ul
        className="flex-1 hidden md:flex justify-center items-center gap-5"
        role="menubar"
      >
        <li role="none">
          <a role="menuitem" href="#" className="text-primary">
            HOME
          </a>
        </li>
        <li role="none">
          <a role="menuitem" href="#">
            PROJECTS
          </a>
        </li>
        <li role="none">
          <a role="menuitem" href="#">
            ABOUT
          </a>
        </li>
        <li role="none">
          <a role="menuitem" href="#">
            CONTACT
          </a>
        </li>
      </ul>
      <ul
        className="flex-1 flex justify-center items-center gap-5"
        aria-label="Social Media"
      >
        <li>
          <a href="https://github.com" aria-label="GitHub">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="https://x.com" aria-label="X">
            <XIcon />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
