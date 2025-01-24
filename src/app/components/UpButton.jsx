import Link from "next/link"


const UpButton = () => {
  return (
    <div className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full py-3 px-4 fixed bottom-3 md:bottom-5 right-6 md:right-8 cursor-pointer " >
      <Link href="#home">
      <span className="icon-[tabler--arrow-big-up-lines-filled] text-2xl md:text-3xl animate-pulse"></span>
      </Link>
    </div>
  )
}

export default UpButton