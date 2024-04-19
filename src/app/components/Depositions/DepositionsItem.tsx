import React from 'react'
import { DepositionsItemProps } from './types'
import Image from 'next/image'

export default function DepositionsItem({
  description,
  name,
  imgUrl,
}: DepositionsItemProps) {
  return (
    <div className="flex flex-col justify-between gap-6 text-zinc-50 md:flex-row md:items-start md:gap-10">
      <figure className="space-y-6">
        <Image
          width={50}
          height={50}
          src={'/icons/quotation.svg'}
          alt="Quotation"
          className="mb-14"
        />
        <p className="w-full leading-8 lg:max-w-[324px] xl:max-w-[488px]">
          {description}
        </p>
        <span className="hidden font-bold md:block">{name}</span>
      </figure>

      <Image
        width={1000}
        height={1000}
        src={imgUrl}
        className="h-[255px] w-full rounded-lg border-2 border-[#f6c263] bg-cover bg-center object-cover sm:h-full md:h-[538px] md:w-[328px] lg:max-w-[626px]"
        alt={`error`}
      />
      <span className="text-center font-bold sm:hidden">{name}</span>
    </div>
  )
}
