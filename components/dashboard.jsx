import Link from "next/link"
import { Layout } from "@/components/layout"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";
import { FaBell, FaBox, FaChartBar, FaCog, FaGrid, FaChevronRight, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa';

export function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-1">
        <nav className="hidden h-full w-40 flex-col border-r bg-white p-4 dark:border-gray-800 dark:bg-gray-950 md:flex">
          <div className="space-y-4">
            <Link
              className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              <FaGrid className="h-5 w-5" />
              Dashboard
            </Link>
            <Collapsible className="space-y-1">
              <CollapsibleTrigger className="flex items-center justify-between rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="flex items-center gap-2">
                  <FaUsers className="h-5 w-5" />
                  Customers
                </div>
                <FaChevronRight className="h-5 w-5 transition-transform group-[data-state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-6">
                <Link
                  className="flex items-center gap-2 rounded-md py-1 px-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <FaUser className="h-4 w-4" />
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
    </Layout>
  )
}

