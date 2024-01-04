import React from 'react'
import Projects from '../components/Projects'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-start items-center p-2">
      <h1 className="text-center text-6xl sm:text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased mt-8 mb-4">
        projects
      </h1>
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Projects projects={projects} />
      </div>
    </div>
  )
}
