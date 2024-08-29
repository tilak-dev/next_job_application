"use client"
import JobCard from '@/components/JobCard'
import React from 'react'

export default function page() {
  return (
    <div className='text-white h-full px-3'>
      <div className="flex justify-between py-8 px-5 items-center">
        <h1 className='lg:text-4xl font-bold '>Discover Your Next Remote Opportunity</h1>
        <div className="text-sm text-gray-400">203 jobs found</div>
      </div>
      <div className="grid grid-cols-3">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  )
}
