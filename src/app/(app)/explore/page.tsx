"use client"
import JobCard from '@/components/JobCard'
import React from 'react'

export default function page() {
  return (
    <div className='text-white h-min-screen'>
      <div className="flex justify-between py-6 px-5">
        <h1 className='text-2xl font-extrabold '>Discover Your Next Remote Opportunity</h1>
        <div className="text-sm text-gray-500">203 jobs found</div>
      </div>
      <div className="grid grid-cols-3">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  )
}
