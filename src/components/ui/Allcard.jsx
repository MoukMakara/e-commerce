import React from 'react'
import Card from './Card'
import { provideData } from '../Provider/ContextData'

export default function Allcard({typeCategory}) {
  const {dataSeller} = provideData()
  console.log("Here : ",typeCategory)
  console.log("data : ",dataSeller)
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">
    {
        dataSeller.filter((data) => data.category === typeCategory)
        .slice(0, 8) // Display dynamic number of items
        .map((dataFill, index) => (
            <Card  dataFill={dataFill} categoryId={typeCategory} />
          ))
    }
  </div>

  )
}
