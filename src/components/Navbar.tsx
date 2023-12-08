import Image from 'next/image';
import { TbLink } from 'react-icons/tb';
import { TbUserCircle } from 'react-icons/tb';
import { TbEye } from 'react-icons/tb';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <Image
            src="/icon.png"
            alt="icon"
            width={25}
            height={25}
            loading="eager"
          />
          <span className="hidden lg:inline-block">linkshare</span>
        </a>
      </div>

      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>
              <TbLink size={20} />
              <span className="hidden lg:inline-block">Links</span>
            </a>
          </li>
          <li>
            <a>
              <TbUserCircle size={20} />
              <span className="hidden lg:inline-block">Profile Details</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          <TbEye size={20} className="inline-block lg:hidden" />
          <span className="hidden lg:inline-block">Preview</span>
        </a>
      </div>
    </nav>
  );
}
