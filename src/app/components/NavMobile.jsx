import Link from "next/link";

const NavMobile = () => {
  return (
    <nav className="fixed md:hidden z-30 bg-transparent right-0 left-0 top-2">
      <ul className="flex justify-center gap-4 py-2 px-6 mx-auto w-fit mt-4">
        <li className="border border-gray-500 bg-black shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="/">
            <span className="icon-[ion--home] text-white text-2xl"></span>
          </Link>
        </li>
        <li className="border border-gray-500 bg-black shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="#history">
            <span className="icon-[solar--gallery-bold] text-white text-2xl"></span>
          </Link>
        </li>
        <li className="border border-gray-500 bg-black shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="#invitation">
            <span className="icon-[mingcute--invite-fill] text-white text-2xl"></span>
          </Link>
        </li>
        <li className="border border-gray-500 bg-black shadow-sm shadow-yellow-400 px-3 pt-2 pb-1 rounded-xl transform transition-transform active:scale-110">
          <Link href="#">
            <span className="icon-[zondicons--camera] text-white text-2xl"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
