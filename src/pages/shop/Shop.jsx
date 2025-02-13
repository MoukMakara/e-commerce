import React, { useEffect, useState } from "react";
import { provideData } from "../../components/Provider/ContextData";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
  const {dataSeller} = provideData()
  const [data,setData]= useState([])
  const [param,setParam]=useSearchParams();
  const [isLoading,setLoading] = useState(false)
  useEffect(function(){
    const filter =dataSeller.filter((data)=> data.category==param.get("category") && data.key==param.get("card"))
    setData(filter)
    console.log(filter)
    setLoading(true)
    console.log(filter)
  },[])
  return (
    <>
      {
      isLoading && (
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="md:gap-8 md:grid md:grid-cols-3">
        <div>
          <div className="flex items-center mb-6">
            <img
              className="w-28 h-28 rounded-full object-contain"
              src={data[0].image}
              alt=""
            />
            <div className="ml-3 mt-2 text-2xl font-extrabold bg-gradient-to-r from-rose-500 to-yellow-400 bg-clip-text text-transparent dark:text-white">
              <p>{data[0].nameShop}</p>
            </div>
          </div>

          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            {/* rating */}
            <div class="flex items-center">
             
            {[...Array(5)].map((_, index) => {
            if (index < Number(Math.floor(data[0].rate))) {
                return (
                    <svg
                        className="h-4 w-4 text-yellow-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>
                )
            } else {
                return (
                    <svg
                    className="h-4 w-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>
                )
            }
            })}



              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
            {/*  */}
            <li className="flex items-center">
              <svg
                className="w-6 h-6 me-2 text-black "
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                ></path>
              </svg>
              {data[0].address}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 me-2 text-black "
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                ></path>
              </svg>
              {data[0].phone}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 me-2 text-black "
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
              {data[0].datetime_open}
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 me-2 text-black "
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                ></path>
              </svg>
              Opening
            </li>
          </ul>
        </div>
        <div className="col-span-2 mt-2 pt-20 md:mt-0">
          <div className="flex items-start mb-5">
            <div className="pe-4">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text dark:text-white">
                Shop Details
              </h4>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                {
                  data[0].name
                }
              </h4>
            </div>
          </div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {data[0].description}
          </p>
       
        </div>
      </article>
      
    </div>
      )
    }
    </>
  );
}
