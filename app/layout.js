import { Inter } from "next/font/google"
import "./globals.css"
import TopNavigation from "../components/TopNavigation"
import SideNav from "../components/SideNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full flex-col">
          <TopNavigation />
          <div className="flex flex-1">
            <SideNav />
            <main className="w-full p-4 h-full flex-1 flex flex-col grid-cols-1 gap-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
