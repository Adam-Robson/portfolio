"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import type { ProjectListProps } from '@/lib/types'

export default function Projects({ projects }: ProjectListProps) {
  return (
    <div className="hover:cursor-pointer">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`p-6 m-4`}
          >
            <div>
              <div className='text-center font-normal text-lg/6 sm:text-xl/7 md:text-2xl/8 subpixel-antialiased underline'>{project.title}</div>
            </div>
            <div className={`card shadow-sm rounded-md p-4 mt-2`}>
              <div className="w-full px-4 pt-2 pb-6">
                {project.description}
              </div>

              <div className="w-full flex justify-evenly items-baseline mx-auto">
                <Link className="proj-link text-sm/4 md:text-lg/5" href={project.githubLink}>GitHub Repository</Link>
                <Link className="proj-link text-sm/4 md:text-lg/5" href={project.liveLink}>Live Deploy</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
