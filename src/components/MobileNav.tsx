"use client";
import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Blog",
        path: "/blog"
    }
]

const MobileNav = () => {
    const pathName = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl ">
                <Link href="/" className="text-4xl font-semibold ">
                    <h1>AltoCloud<span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;