'use client'
import Image from "next/image";
import Link from "next/link";
import { Sun } from "lucide-react";
import cn from 'clsx';
import styles from './Sidebar.module.scss'
import {MENU} from './sidebar.data'
import { getServerPathName } from "@/server-actions/get-path-name"; 
import { usePathname } from "next/navigation";

export function Sidebar() {
    const pathname = usePathname()

    return <aside className={styles.sidebar}>
        <Image src='/icon.svg' priority alt='' width={45} height={45} />
        <div>
        {MENU.map(item => (
            <Link href={item.url} key={item.url} className={
                cn({
                    [styles.active]: pathname === item.url,
                })
            }>
                <item.icon size={27} />
            </Link>
        ))}
        </div>
        <Sun size={27} />
    </aside>
}