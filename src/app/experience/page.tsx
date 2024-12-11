import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import experiences from "./experienceData"


function Experience() {
  return (
    <div className="min-h-screen bg-background px-8 py-12 md:px-24 lg:py-18">
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl font-semibold ">{exp.company}</CardTitle>
                <div className="mt-2 flex justify-between items-start">
                  <span className="text-sm font-medium ">{exp.role}</span>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    
    </div>
  )
}

export default  Experience