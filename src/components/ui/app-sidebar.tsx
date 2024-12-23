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
    Moon,
    Linkedin
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
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

import Link from "next/link";
import { Toggle } from "./toggle";

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "About",
        url: "/about",
        icon: User,
    },
    {
        title: "Projects",
        url: "/projects",
        icon: Briefcase,
    },
    {
        title: "Experience",
        url: "/experience",
        icon: FileText,
    },
    {
        title: "Articles",
        url: "/blogs",
        icon: Book,
    },
    {
        title: "Contact",
        url: "/contact",
        icon: Mail,
    },
];

export function AppSidebar() {
    const { setTheme, theme } = useTheme();

    const togleTheme = () => {
        setTheme((theme) => theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Sidebar className="bg-transparent shadow-lg h-screen w-52 flex flex-col justify-between">
            {/* Profile Section */}
            <div className="py-8 px-4 bg-gradient-to-r  text-gray-800 dark:text-gray-100 shadow-gray-100 dark:shadow-gray-900 rounded-b-lg shadow-md">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 rounded-full overflow-hidden shadow-md">
                        {/* Profile Image Placeholder */}
                        <Avatar>
                            <AvatarImage src="https://helloaman.vercel.app/_next/image?url=https%3A%2F%2Fheyaman.vercel.app%2Fstatic%2Fmedia%2Faman.842c793b15d3d928b477.jpg&w=640&q=75" alt="Aman kohare" />
                            <AvatarFallback>AK</AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <Link href={"/"}>
                            <h3 className="text-sm font-semibold">Aman Kohare</h3>
                        </Link>
                        <p className="text-xs opacity-50">Wev Developer</p>
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
                                            <item.icon className="w-5 h-5 " />
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
            <div className="sidebar-footer border p-6 rounded-t-lg shadow-lg ">
                {/* Social Icons */}
                <div className="flex justify-center mb-6">
                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Facebook className="w-6 h-6 " />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Twitter className="w-6 h-6  " />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Instagram className="w-6 h-6 " />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Linkedin className="w-6 h-6  " />
                        </a>
                    </div>
                </div>

                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between space-x-4">
                        <button
                            className="bg-gradient-to-r
                             from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-950 text-white 
                             dark:from-white dark:to-gray-50 dark:text-black dark:hover:from-gray-100 dark:hover:to-gray-200
                            text-xs py-3 px-6 rounded-full shadow-xl transition-all duration-200 transform hover:scale-95"
                        >
                            Resume
                        </button>
                        <Toggle onClick={togleTheme}
                         className="p-3  dark:border-gray-600">
                            {theme === 'dark' ? (
                                <Sun className="w-40 h-40" />
                            ) :
                                <Moon className="w-40 h-40" />
                            }
                        </Toggle>
                </div>

            </div>

        </Sidebar>
    );
}
