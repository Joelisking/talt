'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NavItem } from './navItems';
import { smoothScrollTo } from '@/lib/utils';

interface MobileNavItemProps extends NavItem {
  setMenuOpen: (open: boolean) => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  text,
  url,
  subItems,
  setMenuOpen,
  isScrollLink,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (url) {
      if (isScrollLink) {
        // For scroll links, close the menu and scroll to section
        setMenuOpen(false);
        const elementId = url.replace('#', '');
        smoothScrollTo(elementId);
      } else {
        // For regular links, just close the menu
        setMenuOpen(false);
      }
    } else if (subItems) {
      // Toggle dropdown if it has subitems
      setOpen(!open);
    }
  };

  const handleSubItemClick = (subItemUrl?: string) => {
    if (subItemUrl && subItemUrl.startsWith('#')) {
      // For scroll links, close the menu and scroll to section
      setMenuOpen(false);
      const elementId = subItemUrl.replace('#', '');
      smoothScrollTo(elementId);
    } else {
      // For regular links, just close the menu
      setMenuOpen(false);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded">
        {url ? (
          <div className="text-black w-full block">{text}</div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className="text-black">{text}</span>
            {subItems && (
              <ChevronDown
                className={`w-4 h-4 text-black transition-transform ${
                  open ? 'rotate-180' : ''
                }`}
              />
            )}
          </div>
        )}
      </div>

      {subItems && open && (
        <div className="pl-4">
          {subItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSubItemClick(item.url)}
              className="block p-2 text-black hover:bg-gray-100 rounded cursor-pointer">
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MobileNavItem;
