import React, { useEffect, useState } from "react";
import BestSeller from "../../data/bestSeller"
import Allcard from "../../components/ui/Allcard";
import Filter from "../../components/ui/Filter";
import Category from "../../components/ui/Category";
import { provideData } from "../../components/Provider/ContextData";
import { useParams, useSearchParams } from "react-router-dom";
import Card from "../../components/ui/Card";
export default function ProductCategory() {
  const {dataSeller,setDataSeller} = provideData()
  const [defaultitemShow, setDefaultitemShow] = useState(12); 
  const [data,setData]=useState([])
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [waitsetDataLoading, setdataLoading] = useState(false);
  const [param,setParam] = useSearchParams()
  const {product} = useParams()
  useEffect(function(){
    const filter =dataSeller.filter((data)=> data.category==param.get("id"))

    if(param.get("sort")=="increase-price"){
          const newFilter = filter.sort((a, b) => a.price - b.price) 
          setData(newFilter)
        }else if(param.get("sort")=="decrease-price"){
          const newFilter = filter.sort((a, b) => b.price - a.price) 
          setData(newFilter)
        }
        else if(param.get("sort")=="discount"){
            const newFilter = filter.sort((a, b) => b.discount - a.discount) 
          setData(newFilter)
        }
        else{
          setData(filter)
        }
        setdataLoading(true)

  },[param])


  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          const documentHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;
        //   console.log("Current Scroll Position:", scrollPosition);
          if (scrollPosition + windowHeight >= documentHeight) {
              if (!isLoading) { 
                if(defaultitemShow<dataSeller.length){
                  console.log("You've reached the bottom of the page!");
                  setIsAtBottom(true);
                  setLoading(true); 
                  setTimeout(() => {
                      setDefaultitemShow(prev => prev + 6);
                      setLoading(false);
                  }, 1000); 
                }
              }
          } else {
              setIsAtBottom(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [isLoading]);
  return (
    <div>
      <section className="bg-gray-50 py-16 sm:py-12 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <Filter WithFilter={false}/>   
            <Category  category={product} seemore={false} idCategory={param.get("id")}/>
            <div className="mb-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">
                {
                    
                    data.slice(0, defaultitemShow) 
                    .map((dataFill, index) => (
                        <Card  dataFill={dataFill} categoryId={param.get("id")} />
                    ))
                }
            </div>

            {isLoading && (
            <div className="flex justify-center">
                <div className="spinner-4"></div>
            </div>
            )}
        </div>
      </section>
    </div>
  );
}
