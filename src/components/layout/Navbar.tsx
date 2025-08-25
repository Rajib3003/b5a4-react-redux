import { useState } from "react"
import { Link } from "react-router-dom"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/borrow">Borrow</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-gray-100 to-gray-200 p-6 dark:from-gray-800 dark:to-gray-900 no-underline"
                          to="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed components built with Tailwind CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          {/* <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Docs</Link>
          </NavigationMenuLink> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/books">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

              {/* Add more items as needed */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mode Toggle */}
        <ModeToggle />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/borrow"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200"
              >
                Borrow
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200"
              >
                Books
              </Link>
            </li>
            {/* <li>
              <Link
                to="/components"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200"
              >
                Components
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </header>
  )
}
