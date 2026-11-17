'use client';
import { menuList } from '@/lib/menuList'
// import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import Link from 'next/link'
import {usePathname} from "next/navigation";
import React from 'react'

export default function NavabarComponent() {
    const pathName = usePathname();  return (
    <nav>
       {
        menuList.map((p)=>(
            <Link key={p.name} href={p.url}
            style={
                p.url == pathName ? ({color: 'red'}): ({color: 'black'})
            }>{p.name}</Link>
        ))
       }
    </nav>
  )
}
