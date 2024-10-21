"use client"
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex sticky top-0 z-50 justify-center flex-col items-center w-full">
      <nav className="bg-[#000] w-full flex items-center justify-between p-1 lg:p-2 shadow-md shadow-slate-600">
        <Link href={'/'} className="relative h-6 lg:h-12 w-[100px]">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="object-contain mr-10"
            sizes="(max-width: 768px) 100px, (min-width: 769px) 150px"
            priority
          />
        </Link>

        <ul className="flex gap-4 lg:gap-12 mr-7 lg:mr-20 items-center">
          <li>
            <Link
              className="text-gray-500 hover:text-white hover:underline text-xs lg:text-lg transition-all"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              className="text-gray-500 hover:text-white hover:underline text-xs lg:text-lg transition-all"
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-500 hover:text-white hover:underline text-xs lg:text-lg transition-all"
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-500 hover:text-white hover:underline text-xs lg:text-lg transition-all"
              href="/feedback"
            >
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
