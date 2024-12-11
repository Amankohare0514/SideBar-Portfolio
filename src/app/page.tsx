import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"


function Home() {
  return (
    <div className="min-h-screen bg-background px-8 py-12 md:px-24 lg:py-18">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Hello there! I'm Aman

          </h1>
          <p className="text-md text-muted-foreground">
            Passionate web developer and designer with over 1 year of experience in creating beautiful, functional websites. I specialize in React, Next.js, and Tailwind CSS.
          </p>
          <p className=" text-md text-muted-foreground">
            I completed my Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal. Programming Journey: I'm a self-taught programmer on a quest to explore the exciting world of technology.
          </p>

        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">My Skills</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Frontend Development */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">HTML5</Badge>
                    <Badge variant="secondary">CSS3</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Backend Development */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">Sanity.io</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DevOps & Tools */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">GitHub</Badge>
                    <Badge variant="secondary">Shadcn</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">aceternity</Badge>
                    <Badge variant="secondary">Linux</Badge>
                    <Badge variant="secondary">Netlify</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home