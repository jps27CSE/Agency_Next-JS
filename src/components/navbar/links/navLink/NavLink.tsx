"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  item: {
    title: string;
    path: string;
  };
}

const NavLink: React.FC<Props> = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${styles.container} 
    ${pathname === item.path && styles.active}
    `}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
