import Link from "next/link"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";
import { FaBell, FaBox, FaChartBar, FaCog, FaGrid, FaChevronRight, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa';

export function Dashboard() {
  return (
    <div className="flex flex-1">
import SideNav from "@/components/SideNav";
      <main className="w-full p-4 h-full flex-1 flex flex-col grid-cols-1 gap-4">
        <div className="border rounded-md dark:bg-gray-950 dark:border-gray-800 p-4 w-full h-min">
          <h2 className="text-2xl font-bold mb-2">
            Welcome to the Dashboard
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Explore the key metrics and insights for your business.
          </p>
        </div>
        <div className="w-full h-full flex-1 flex flex-col gap-6 md:grid md:grid-cols-8 md:gap-2">
          <div className="border rounded-md bg-white p-3 dark:bg-gray-950 dark:border-gray-800 md:col-span-1 h-full">
            <h4 className="text-lg font-bold mb-2">Column 1</h4>
            <p className="text-gray-500 dark:text-gray-400">
              Content for column 1.
            </p>
          </div>
          <div className="border rounded-md bg-white p-3 dark:bg-gray-950 dark:border-gray-800 md:col-span-1 h-full">
            <h4 className="text-lg font-bold mb-2">Column 2</h4>
            <p className="text-gray-500 dark:text-gray-400">
              Content for column 2.
            </p>
          </div>
          <div className="border rounded-md bg-white p-3 dark:bg-gray-950 dark:border-gray-800 md:col-span-6 h-full">
            <h4 className="text-lg font-bold mb-2">Column 3</h4>
            <p className="text-gray-500 dark:text-gray-400">
              Content for column 3.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

