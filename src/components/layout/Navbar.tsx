import { useState } from "react"
import { Link } from "react-router-dom"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [withIconOpen, setWithIconOpen] = useState(false);

  return (
    // <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-black">
    //   <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5">
        
    //     <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white">
    //       MyWebsite
    //     </Link>

    <header className="sticky top-0 z-50 w-full bg-white shadow-md dark:bg-black">
  {/* Full width background */}

  <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
    {/* Logo */}
    <Link
      to="/"
      className="text-xl font-bold text-blue-600 dark:text-white"
    >
      MyWebsite
    </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>                
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <Link to="/"><div className="text-base font-bold">Home</div></Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-bold">List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/borrow">
                          <div className="font-medium">Borrow Book</div>   
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/books">
                          <div className="font-medium">Documentation</div>                  
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="#">
                          <div className="font-medium">Blog</div>                   
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-bold">Simple</NavigationMenuTrigger>
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
              
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex">
          
          <NavigationMenu viewport={false}>
            <NavigationMenuList>                
              
              <NavigationMenuItem >
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute right-0 origin-top-right">
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
          <Bell />
          <ModeToggle />
        </div>

        {/* Mode Toggle */}
        {/* <ModeToggle /> */}

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
            {/* With Icon menu */}
            <li>
              <button
                onClick={() => setWithIconOpen(!withIconOpen)}
                className="flex justify-between items-center w-full text-lg font-medium text-gray-800 dark:text-gray-200"
              >
                With Icon
                <span className="ml-2">
                  {withIconOpen ? "▲" : "▼"}
                </span>
              </button>

              {withIconOpen && (
                <ul className="flex flex-col gap-2 mt-2 ml-4">
                  <li>
                    <Link
                      to="#"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <CircleHelpIcon />
                      Backlog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <CircleIcon />
                      To Do
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <CircleCheckIcon />
                      Done
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Add more mobile menu items here */}
          </ul>
        </div>
      )}
    </header>
  )
}
