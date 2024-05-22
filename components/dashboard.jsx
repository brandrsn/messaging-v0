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

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function BoxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function UserPlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
