import Link from "next/link"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible"

import { FaBox, FaChartBar, FaCog, FaChevronRight, FaUserPlus } from "react-icons/fa"

export default function SideNav() {
  return (
    <nav className="hidden h-full w-40 flex-col border-r bg-white p-4 dark:border-gray-800 dark:bg-gray-950 md:flex">
      <div className="space-y-4">
        <Link
          className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
          href="#"
        >
          <FaBox className="h-5 w-5" />
          Dashboard
        </Link>
        <Collapsible className="space-y-1">
          <CollapsibleTrigger className="flex items-center justify-between rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            <div className="flex items-center gap-2">
              <FaCog className="h-5 w-5" />
              Customers
            </div>
            <FaChevronRight className="h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-6">
            <Link
              className="flex items-center gap-2 rounded-md py-1 px-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              <FaCog className="h-5 w-5" />
              All Customers
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md py-1 px-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              <FaUserPlus className="h-4 w-4" />
              New Customer
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Link
          className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
          href="#"
        >
          <FaBox className="h-5 w-5" />
          Products
        </Link>
        <Link
          className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
          href="#"
        >
          <FaChartBar className="h-5 w-5" />
          Analytics
        </Link>
        <Link
          className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
          href="#"
        >
          <FaCog className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </nav>
  )
}
