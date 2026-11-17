import React from 'react'

import { MenuItem } from './NabarComponent';


export default function SublinkNavbarComponent() {

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.name}</div>
      <div>
        <div className="text-sm font-semibold">{item.name}</div>
        {item.name && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.name}
          </p>
        )}
      </div>
    </a>
  );
};
}
