"use client";
import {
    Home,
    User,
    Briefcase,
    FileText,
    Book,
    Mail,
    Facebook,
    Twitter,
    Instagram,
    Sun,
    Moon
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/home",
        icon: Home,
    },
    {
        title: "About",
        url: "#",
        icon: User,
    },
    {
        title: "Projects",
        url: "#",
        icon: Briefcase,
    },
    {
        title: "Experience",
        url: "#",
        icon: FileText,
    },
    {
        title: "Blogs",
        url: "#",
        icon: Book,
    },
    {
        title: "Contact",
        url: "#",
        icon: Mail,
    },
];

export function AppSidebar() {
    const { setTheme } = useTheme()

    return (
        <Sidebar className="bg-white dark:black shadow-lg h-screen w-64 flex flex-col justify-between">
            {/* Profile Section */}
            <div className="p-4 bg-gradient-to-r  text-gray-800 dark:text-gray-100 shadow-gray-300 dark:shadow-gray-800 rounded-b-lg shadow-md">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 rounded-full overflow-hidden shadow-md">
                        {/* Profile Image Placeholder */}
                        <Avatar>
                            <AvatarImage src="https://helloaman.vercel.app/_next/image?url=https%3A%2F%2Fheyaman.vercel.app%2Fstatic%2Fmedia%2Faman.842c793b15d3d928b477.jpg&w=640&q=75" alt="Aman kohare" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Aman Kohare</h3>
                        <p className="text-sm opacity-75">Wev Developer</p>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <SidebarContent className="flex-1 mt-5 overflow-y-auto">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a
                                            href={item.url}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                        >
                                            <item.icon className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                                            <span className="text-gray-800 dark:text-gray-100">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer Section */}
            <div className="sidebar-footer bg-gray-100 dark:bg-gray-800 p-4 rounded-t-lg shadow-md">
                {/* Social Icons */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Facebook className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Twitter className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        </a>
                    </div>
                </div>

                {/* Dark Mode Toggle */}
                <div className="text-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    < div />
                </div>
            </div>
        </Sidebar>
    );
}
