import React, { useEffect, useState } from "react";
import BestSeller from "../../data/bestSeller"
import Allcard from "../../components/ui/Allcard";
import Filter from "../../components/ui/Filter";
import Category from "../../components/ui/Category";
import { provideData } from "../../components/Provider/ContextData";
import { useThemeMode } from "flowbite-react";
export default function Products() {
  const {dataSeller,setDataSeller,category,addTocard,setaddToCard} = provideData()
  const [defaultCategoryShow, setDefaultCategoryShow] = useState(3);
  const [dataCard,setData] = useState(dataSeller)
  const [categoryShow,setCategoryShow] = useState(category)
  const [LengCate,setLengthCate] = useState(category.length)
  const [lenthItem,setLengthItem] =useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          const documentHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;
          // console.log("Current Scroll Position:", scrollPosition);
          if (scrollPosition + windowHeight >= documentHeight) {
              if (!isLoading) { 
                if(defaultCategoryShow<LengCate){
                  console.log("You've reached the bottom of the page!");
                  setIsAtBottom(true);
                  setLoading(true); 
                  setTimeout(() => {
                      setDefaultCategoryShow(prev => prev + 1);
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
  function getCountData(idCate,dataCard) {
    const count = dataCard.filter((data) => data.category ==idCate);
    return count.length;
  }

  return (
    <div>





      <section className="bg-gray-50 py-16 sm:py-12 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

          <Filter withFilter={true} setDataProduct={setData} setLengthCate={setLengthCate} setLengthItem={setLengthItem} setCategoryShow={setCategoryShow}/>
          {
            categoryShow.slice(0, defaultCategoryShow).map((categories,index)=>(
              getCountData(categories.key,dataCard) > 0 &&
              <>
                <Category key={categories.key} category={categories.category} seemore={true} idCategory={categories.key}/>
                <Allcard typeCategory={categories.key} dataSeller={dataSeller} dataCard={dataCard} setData={setData} lenthItem={lenthItem}/>
              </>
            ))
          }

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
