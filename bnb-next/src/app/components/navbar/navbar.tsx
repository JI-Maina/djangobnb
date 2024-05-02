import Image from "next/image"
import Link from "next/link"

import { SearchFilters } from "./search-filters"


export const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 py-6 fixed bg-white border-b z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href='/'>
            <Image src='/airbnb.png' alt="AirBnb logo" width={180} height={38} />
          </Link>

          <div className="flex space-x-6">
            <SearchFilters />
          </div>

          <div className="flex items-center">navifgation</div>
        </div>
        
        </div>
    </nav>
  )
}
