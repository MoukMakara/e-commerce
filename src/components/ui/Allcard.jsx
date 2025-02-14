import React, { useEffect, useState } from 'react'
import Card from './Card'
import { provideData } from '../Provider/ContextData'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Allcard({typeCategory,dataSeller,dataCard,setData,lenthItem}) {
  const [param,setParam] = useSearchParams()
  useEffect(function(){
    if(param.get("sort")=="increase-price"){
      const newFilter = dataCard.sort((a, b) => a.price - b.price) 
      setData(newFilter)
    }else if(param.get("sort")=="decrease-price"){
      const newFilter = dataCard.sort((a, b) => b.price - a.price) 
      setData(newFilter)
    }
    else if(param.get("sort")=="discount"){
      const newFilter = dataCard.sort((a, b) => b.discount - a.discount) 
      setData(newFilter)
    }
    else{
      // setData(dataSeller)
    }
  },[param])

  
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">
    {
      lenthItem ?

        dataCard.filter((data) => data.category === typeCategory)
        .slice(0, 8) 
        .map((dataFill, index) => (
            <Card  dataFill={dataFill} categoryId={typeCategory} />
          ))
          :
        dataCard.filter((data) => data.category === typeCategory)
        .map((dataFill, index) => (
            <Card  dataFill={dataFill} categoryId={typeCategory} />
          ))
          
    }
  </div>

  )
}
