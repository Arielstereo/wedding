import Link from "next/link"

const BackButton = () => {
  return (
    <div className="bg-slate-900 hover:bg-slate-50 text-white hover:text-black transition rounded-full p-3 fixed top-5 left-8 cursor-pointer" >
      <Link className="flex justify-center items-center" href="/">
      <span className="icon-[material-symbols--arrow-back-ios-new] text-2xl md:text-3xl animate-pulse"></span>
      </Link>
    </div>
  )
}

export default BackButton