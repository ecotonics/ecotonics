'use client'

import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { servicesData } from '@/app/data/services'

const Services = () => {
    // Track a single open service index per section (by section index).
    // Initialize so the first service (index 0) of each section is open by default.
    const [open, setOpen] = useState<Record<number, number | null>>(() => {
        const init: Record<number, number | null> = {}
        servicesData.forEach((_, i) => {
            init[i] = 0
        })
        return init
    })

    const toggle = (sIndex: number, index: number) => {
        setOpen((prev) => ({
            ...prev,
            [sIndex]: prev[sIndex] === index ? null : index,
        }))
    }

    return (
        <>
            {servicesData.map((section, sIndex) => (
                <div key={sIndex} className='px-6 lg:px-24 pb-12 lg:pb-24'>
                    <div>
                        <span className='bg-primary text-white rounded-3xl px-3 py-1'>
                            {section.category}
                        </span>
                        <p className='text-secondary mt-6 font-medium text-4xl lg:text-6xl'>
                            {section.category} <span className='text-primary'>Solutions</span>
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-6`}>
                        {/* Description + Image */}
                        <div className={`mt-6 ${sIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <p className='text-secondary'>{section.description}</p>
                            <div className='mt-6 rounded-3xl overflow-hidden'>
                                <img src={section.image} alt={section.category} />
                            </div>
                        </div>

                        {/* Accordion */}
                        <div className={`mt-6 space-y-6 ${sIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                            {section.services.map((service, index) => {
                                const key = `${sIndex}-${index}`
                                return (
                                    <div
                                        key={key}
                                        className='rounded-3xl border border-gray-300 p-6 cursor-pointer transition-all duration-300 ease-in-out'
                                    >
                                        <div
                                            onClick={() => toggle(sIndex, index)}
                                            className='flex justify-between items-center'
                                        >
                                            <p className='text-secondary font-medium text-4xl lg:text-5xl'>
                                                {service.title}
                                            </p>
                                            {open[sIndex] === index ? (
                                                <ChevronUp className='text-secondary w-8 h-8 transition-transform duration-300' />
                                            ) : (
                                                <ChevronDown className='text-secondary w-8 h-8 transition-transform duration-300' />
                                            )}
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${open[sIndex] === index
                                                ? 'max-h-[500px] opacity-100 mt-4'
                                                : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <p className='mt-6 text-secondary'>{service.description}</p>
                                            <div className='mt-6 flex flex-wrap gap-3 text-secondary'>
                                                {service.benefits.map((benefit, bIndex) => (
                                                    <div
                                                        key={bIndex}
                                                        className='px-3 py-1 rounded-3xl border border-gray-400 w-auto'
                                                    >
                                                        {benefit}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Services