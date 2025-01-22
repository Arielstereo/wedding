import Link from "next/link";

const NavMobile = () => {
  return (
    <nav className="absolute md:hidden z-30 bg-transparent inset-0">
      <ul className="flex justify-center items-center gap-4 py-2 px-6 mx-auto w-fit mt-4">
        <li className="border border-gray-500 shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="/">
            <span className="icon-[ion--home] text-white text-2xl"></span>
          </Link>
        </li>
        <li className="border border-gray-500 shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="#">
            <span className="icon-[solar--gallery-bold] text-white text-2xl"></span>
          </Link>
        </li>
        <li className="border border-gray-500 shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="#">
            <span className="icon-[mingcute--invite-fill] text-white text-2xl"></span>
          </Link>
        </li>
        <li className="border border-gray-500 shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="#">
            <span className="icon-[zondicons--camera] text-white text-2xl"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
