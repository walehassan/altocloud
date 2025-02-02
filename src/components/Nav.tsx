"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" }
];

export const Nav = () => {
    const pathname = usePathname();
    return ( <nav className="flex gap-8">
    {links.map((link, index)=>{
      return (
      <Link 
        href={link.href} 
        key={link.label} 
        className={`${
          link.href === pathname &&
          "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
        {link.label}
      </Link>
      );
    })}
  </nav>
);
}
    
 
