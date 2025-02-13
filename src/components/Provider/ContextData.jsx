import React, { createContext, useContext, useEffect, useState } from 'react'
import bestSeller from "../../data/bestSeller"
import category from "../../data/category/category"
const DataContext = createContext();
export default function ContextData({children}) {
    const [dataSeller,setDataSeller] = useState(bestSeller)
    const [addTocard,setaddToCard]=useState([])
    useEffect(function(){
      const card = localStorage.getItem("card")
      const cards= JSON.parse(card)
      if(cards){
        setaddToCard(cards)
      }else{
        setaddToCard([])
      }
    },[])
  return (
    <>
        <DataContext.Provider value={{dataSeller,setDataSeller,category,addTocard,setaddToCard}}>
            {children}
        </DataContext.Provider>

    </>
  )
}
export const provideData = ()=>{
    const data = useContext(DataContext)
    return data
}