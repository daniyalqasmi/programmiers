'use client'
import React, { useState } from 'react'
import Title from '../Title'
import Image from 'next/image'
import AboutMobileAccordion from './AboutMobileAccordion'
import { AboutMock } from '../../../mocks/AboutMock'
import { BiSolidRocket } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'

export default function About() {
  const [openItems, setOpenItems] = useState(
    Array(AboutMock.length).fill(false),
  )

  const toggleAccordion = (index: number) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = [...prevOpenItems]
      newOpenItems[index] = !newOpenItems[index]
      return newOpenItems
    })
  }

  return (
    <section className="container mb-10 mt-28">
      <Title text="About US" />
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        <article className="w-full xl:w-[45.5rem]">
          <h2 className="text-2xl font-semibold leading-9 text-zinc-50">
            Welcome to Programmiers
          </h2>
          <p className="mt-6 leading-8 text-zinc-50">
            PROGRAMMIERS is established firm from 2022 and providing their
            services successfully around the globe. PROGRAMMIERS is the most
            dynamic and fastest growing agency in Pakistan region. Our 100%
            service dedication is to provide 🌟
            <span className="text-[#f6c263]"> quality development </span>
            and ⏰<span className="text-[#f6c263]"> timely services. </span>
            <br />
            <br />
            PROGRAMMIERS announced to provide ⏱️
            <span className="text-[#f6c263]"> timely delivery </span>
            of 🌐
            <span className="text-[#f6c263]">
              {' '}
              Web Development, 📱 Application Development, 🧠 Generative AI{' '}
            </span>
            and 🔍
            <span className="text-[#f6c263]"> SEO. </span>
            PROGRAMMIERS also providing 🛠️
            <span className="text-[#f6c263]"> Maintenance </span>
            and 🔄
            <span className="text-[#f6c263]"> Upgradation </span>
            facility to customers
            <br />
            <br />
            PROGRAMMIERS is a team of highly trained 🛠️
            <span className="text-[#f6c263]"> Professional Engineers </span>
            and<span className="text-[#f6c263]"> Developers </span>
            <br />
            <br />
            PROGRAMMIERS committed to provide 🌟
            <span className="text-[#f6c263]"> quality services </span>
            in
            <span className="text-[#f6c263]"> advanced Technology </span>
          </p>
          <Image
            width={688}
            height={337}
            alt="Picture of a computer on a table"
            src={'/About02.png'}
            className="mt-5 xl:m-0 xl:hidden xl:w-[416px]"
          />
          <div className="mt-4 hidden grid-cols-2 gap-4 sm:grid">
            <article className="rounded border border-[#f6c263] p-4 pl-0 text-zinc-50 transition-all duration-500 ease-out sm:border-none">
              <div className="flex items-center justify-between">
                <figure className="flex items-center gap-4">
                  <BiSolidRocket className="h-8 w-8 text-[#f6c263]" />
                  <h2 className="font-bold">Our Mission</h2>
                </figure>
              </div>
              <p className="mt-5 leading-8 transition-all duration-500 ease-out">
                Our mission is to provide innovative and 🌟
                <span className="text-[#f6c263]">
                  {' '}
                  Quality Services & Solutions{' '}
                </span>
                to our Customers. Our Objective of 📚
                <span className="text-[#f6c263]"> continuous learning </span>
                serves our purpose of better understanding to market needs
                through constant 🔄
                <span className="text-[#f6c263]"> upgradation </span>
                of our offerings.
              </p>
            </article>
            <article className="rounded border border-[#f6c263] pt-4 text-zinc-50 transition-all duration-500 ease-out sm:border-none">
              <div className="flex items-center justify-between">
                <figure className="flex items-center gap-4">
                  <IoEyeSharp className="h-8 w-8 text-[#f6c263]" />
                  <h2 className="font-bold">Our Vision</h2>
                </figure>
              </div>
              <p className="mt-5 leading-8 transition-all duration-500 ease-out">
                Our solutions streamline workflows and provide the tools to
                achieve greater efficiency and productivity. This translates to
                a smoother customer experience and better decision-making based
                on 📊
                <span className="text-[#f6c263]"> valuable data. </span>
                With 🛠️
                <span className="text-[#f6c263]">
                  {' '}
                  unmatched after-delivery support,{' '}
                </span>
                you ensure businesses can
                <span className="text-[#f6c263]"> 🌱 adapt and grow </span>
                alongside their customers.
              </p>
            </article>
          </div>
          <article className="mt-10 hidden rounded border border-[#f6c263] text-zinc-50 transition-all duration-500 ease-out sm:block sm:border-none">
            <div className="flex items-center justify-between">
              <figure className="flex items-center gap-4">
                <AiFillLike className="h-8 w-8 text-[#f6c263]" />
                <h2 className="font-bold">Our Values</h2>
              </figure>
            </div>
            <p className="mt-5 leading-8 transition-all duration-500 ease-out">
              🌟 Our Values: At Programmiers, we are defined by:
              <span className="text-[#f6c263]">🤝 Collaboration </span>
              Thriving on teamwork, fostering open communication.
              <span className="text-[#f6c263]">🚀 Innovation </span>
              Embracing new and
              <span className="text-[#f6c263]"> ideas </span>
              and
              <span className="text-[#f6c263]"> technologies </span>
              to lead our industry.
            </p>
          </article>
        </article>
        <Image
          width={416}
          height={780}
          alt="Picture of a computer on a table"
          src={'/about.png'}
          className="hidden bg-cover xl:block"
        />

        {AboutMock.map((about) => (
          <AboutMobileAccordion
            key={about.id}
            text={about.text}
            title={about.title}
            icon={about.icon}
            open={openItems[about.id]}
            onClick={() => toggleAccordion(about.id)}
          />
        ))}
      </div>
    </section>
  )
}
