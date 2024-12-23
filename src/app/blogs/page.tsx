import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogData from "./BlogData";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-background px-8 py-12 md:px-24 lg:py-18">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlogData.map((blog, index) => (
          <Link href={blog.ctaLink} target="__blank">
            <Card
              key={index}
              className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >

              <div className="relative h-48">
                <img
                  src={blog.src}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold mb-2">
                  {blog.title}
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {blog.description}
                </span>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
