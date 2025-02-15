import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { provideData } from '../Provider/ContextData'

export default function Filter({withFilter,setDataProduct, setLengthCate,setLengthItem,setCategoryShow}) {
      const {category,dataSeller,setDataSeller}=provideData()
      const [param,setParam]=useSearchParams()
      const [showSort,setSort] = useState(false)
      const [showFilter,setFilter] = useState(false)
      const [advanceFilter,setAdvanceFilter] = useState(false)
      const [filterCategory,setFilterCategory] = useState({})
      const [valueFilter,setValueFilter] = useState({
        mindiscount:0,
        maxdiscount:0,
        minprice:0,
        maxprice:0,
        rate:5,
        view:"0-500",
      })
      function handleAdvanceFilter(){
        setAdvanceFilter(true)
      }
      function handleBrandFilter(){
        setAdvanceFilter(false)
      }
      function handleShowFilter(){
        
        setSort(!showSort)
      }
      function handleShowFilters(){
        setFilter(!showFilter)
      }

      useEffect(()=>{
        const groupedData = category.reduce((acc, item) => {
          const firstLetter = item.category[0]; 
            if (!acc[firstLetter]) {
                acc[firstLetter] = []; 
            }
            acc[firstLetter].push(item); 
            return acc;
        }, {});
        setFilterCategory(groupedData)
      },[])

      function getCountData(idCate) {
        const count = dataSeller.filter((data) => data.category ==idCate);
        return count.length;
    }


      const [checkedItems, setCheckedItems] = useState({});
      const handleChange = (event) => {
        const { name, checked } = event.target;
        console.log(name,checked)
        setCheckedItems((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
      };

      const handleSubmit = (e) => {
        
        if (!advanceFilter){
          const selectedValues = Object.keys(checkedItems)
            .filter((key) => checkedItems[key])
            .map((key) => parseInt(key));
          const newFilter = []
          const newCategory=[]
          selectedValues.forEach((select)=>{
          const dataFilter= dataSeller.filter((item)=>item.category == select)
            if (dataFilter.length>0){
              newFilter.push(...dataFilter)
            }
          
            const dataFilterCate= category.filter((item)=>item.key == select)
              if (dataFilterCate.length>0){
                newCategory.push(...dataFilterCate)
            }
            

          })
          setFilter(!showFilter)
          console.log(newCategory)
        if(selectedValues.length==0){
          setDataProduct(dataSeller)
          setLengthItem(true)
          setCategoryShow(category)
        }else{
          setDataProduct(newFilter)
          setLengthItem(false)
          setCategoryShow(newCategory)
        }
      }
      else{ 
        const viewSplit= valueFilter.view.split('-')
        const dataFilter= dataSeller.filter((item)=>item.price >= valueFilter.minprice && item.price <= valueFilter.maxprice && item.discount >= valueFilter.mindiscount && item.discount <= valueFilter.maxdiscount && item.view >= Number(viewSplit[0]) && item.view <= Number(viewSplit[1]) && item.rate >= 0 && item.rate <= valueFilter.rate)
        const filterCategory = [...new Set(dataFilter.map(item => item.category))];
        const newCategory=[]
        filterCategory.forEach((select)=>{
          const dataCategory = category.filter((categories)=> categories.key==select)
          newCategory.push(...dataCategory)
        })
        setFilter(!showFilter)
        setDataProduct(dataFilter)
        setLengthItem(false)
        setCategoryShow(newCategory) 
      }
     
      };
      const handleReset = () => {
        if (!advanceFilter){
          setCheckedItems({});
        }
        else{
            setValueFilter({
              mindiscount:0,
              maxdiscount:0,
              minprice:0,
              maxprice:0,
              rate:5,
              view:"0-500",
            }) 
          setDataProduct(dataSeller)
          setLengthItem(true)
          setCategoryShow(category)
        }
      };



  return (
<>

   <div className=" flex justify-end w-full">
               <div className="flex fixed items-center top-[95px] sm:top-[80px] md:top-[90px] space-x-4">
                {
                  withFilter && (
                    <button
                      onClick={handleShowFilters}
                      type="button"
                      className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                    >
                      <svg
                        className="-ms-0.5 me-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                        />
                      </svg>
                      Filters
                      <svg
                        className="-me-0.5 ms-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )
                }
                 <button
                   onClick={handleShowFilter}
                   data-dropdown-toggle="dropdownSort1"
                   type="button"
                   className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                 >
                   <svg
                     className="-ms-0.5 me-2 h-4 w-4"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill="none"
                     viewBox="0 0 24 24"
                   >
                     <path
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                     />
                   </svg>
                   Sort
                   <svg
                     className="-me-0.5 ms-2 h-4 w-4"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill="none"
                     viewBox="0 0 24 24"
                   >
                     <path
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="m19 9-7 7-7-7"
                     />
                   </svg>
                 </button>
                 <div
                  //  id="dropdownSort1"
                   
                   className={`z-50 absolute ${showSort ? '' : 'hidden'}  right-0 top-[40px] w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                   data-popper-placement="bottom"
                 >
                   <ul
                     className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                     aria-labelledby="sortDropdownButton"
                   >
     
                     <li>
                       <button
                         onClick={()=>{
                            if (param.get("id")){
                              setParam({sort:"increase-price",id:param.get("id")})
                              setSort(!showSort)
                            }else{
                              setParam({sort:"increase-price"})
                              setSort(!showSort)
                            }
                         }}
                         className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                       >
                         {" "}
                         Increasing price{" "}
                       </button>
                     </li>
                     <li>
                       <button
                          onClick={()=>{
                            if (param.get("id")){
                              setParam({sort:"decrease-price",id:param.get("id")})
                              setSort(!showSort)
                            }else{
                              setParam({sort:"decrease-price"})
                              setSort(!showSort)
                            }
                         }}
                         className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                       >
                         {" "}
                         Decreasing price{" "}
                       </button>
                     </li>
                     <li>
                       <button
                           onClick={()=>{
                            if (param.get("id")){
                              setParam({sort:"discount",id:param.get("id")})
                              setSort(!showSort)
                            }else{
                              setParam({sort:"discount"})
                              setSort(!showSort)
                            }
                         }}
                         className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                       >
                         {" "}
                         Discount %{" "}
                       </button>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
        <di
          className={`fixed top-0 left-0 h-[100%] ${showFilter ? '' : 'hidden'}  bg-[#0c1a0778]  z-50 w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0`}
        >
          <div className="relative h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-xl md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between rounded-t p-4 md:p-5">
                <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Filters
                </h3>
                <button
                  onClick={handleShowFilters}
                  type="button"
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="filterModal"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="px-4 md:px-5">
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                  <ul
                    className="-mb-px flex flex-wrap text-center text-sm font-medium"
                    id="myTab"
                    data-tabs-toggle="#myTabContent"
                    role="tablist"
                  >
                    <li className="mr-1" role="presentation">
                      <button
                        onClick={handleBrandFilter}
                        className="inline-block pb-2 pr-1"
                        id="brand-tab"
                        data-tabs-target="#brand"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Brand
                      </button>
                    </li>
                    <li className="mr-1" role="presentation">
                      <button
                        onClick={handleAdvanceFilter}
                        className="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                        id="advanced-filers-tab"
                        data-tabs-target="#advanced-filters"
                        type="button"
                        role="tab"
                        aria-controls="advanced-filters"
                        aria-selected="false"
                      >
                        Advanced Filters
                      </button>
                    </li>
                  </ul>
                </div>
                <div id="myTabContent">
                  <div
                    className="grid grid-cols-2 gap-4 md:grid-cols-3"
                    id="brand"
                    role="tabpanel"
                    aria-labelledby="brand-tab"
                  >



                    {Object.keys(filterCategory).map(category => (
                      <div className="space-y-2" key={category}>
                        <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                          {category}
                        </h5>

                        {filterCategory[category].map(itemCate => (
                          <div className="flex items-center" key={itemCate.key}>
                            <input
                              type="checkbox"
                              name={itemCate.key}
                              checked={checkedItems[itemCate.key]}
                              onChange={handleChange}
                              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label
                              htmlFor="apple"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {" "}
                              {itemCate.category} ({getCountData(itemCate.key)}){" "}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}


             

                  </div>
                </div>

                <div
                  className="space-y-4"
                  id="advanced-filters"
                  role="tabpanel"
                  aria-labelledby="advanced-filters-tab"
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="min-price"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {" "}
                          Min Discount{" "}
                        </label>
                        <input
                          onChange={(e)=>{
                            setValueFilter((data)=>{return {...data,mindiscount:e.target.value}})
                            console.log(valueFilter)
                          }
                          }
                          value={valueFilter.mindiscount}
                          id="min-price"
                          type="range"
                          min="0"
                          max="100"
                          step="1"
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="max-price"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {" "}
                          Max Discount{" "}
                        </label>
                        <input
                           onChange={(e)=>{
                            setValueFilter((data)=>{return {...data,maxdiscount:e.target.value}})
    
                          }}
                          value={valueFilter.maxdiscount}
                          id="max-price"
                          type="range"
                          min="0"
                          max="100"
                          step="1"
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                        />
                      </div>
                      <div className="col-span-2 flex items-center justify-between space-x-2">
                        <input
                          type="number"
                          onChange={(e)=>{
                            const newValue = Number(e.target.value);
                            if (newValue > 100) {
                              setValueFilter((data) => ({
                                ...data,
                                mindiscount: 100, 
                              }));
                            } else if (newValue >= 0) {
                              setValueFilter((data) => ({
                                ...data,
                                mindiscount: newValue,
                              }));
                            }
    
                          }}
                          value={valueFilter.mindiscount}
                          id="min-price-input"
                          min="0"
                          max="100"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
                          placeholder=""
                          required
                        />

                        <div className="shrink-0 text-sm font-medium dark:text-gray-300">
                          to
                        </div>

                        <input
                          type="number"
                          onChange={(e)=>{
                            const newValue = Number(e.target.value);
                            if (newValue > 100) {
                              setValueFilter((data) => ({
                                ...data,
                                maxdiscount: 100, 
                              }));
                            } else if (newValue >= 0) {
                              setValueFilter((data) => ({
                                ...data,
                                maxdiscount: newValue,
                              }));
                            }
    
                          }}
                          value={valueFilter.maxdiscount}
                          id="max-price-input"
                          min="0"
                          max="100"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="min-price"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {" "}
                          Min Price{" "}
                        </label>
                        <input
                          id="min-price"
                          type="range"
                          onChange={(e)=>{
                            setValueFilter((data)=>{return {...data,minprice:e.target.value}})
    
                          }}
                          value={valueFilter.minprice}
                          min="0"
                          max="7000"
                          step="1"
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="max-price"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {" "}
                          Max Price{" "}
                        </label>
                        <input
                          id="max-price"
                          onChange={(e)=>{
                            setValueFilter((data)=>{return {...data,maxprice:e.target.value}})
    
                          }}
                          value={valueFilter.maxprice}
                          type="range"
                          min="0"
                          max="7000"
                          step="1"
                          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                        />
                      </div>
                      <div className="col-span-2 flex items-center justify-between space-x-2">
                        <input
                          type="number"
                          onChange={(e)=>{
                            setValueFilter((data)=>{return {...data,minprice:e.target.value}})
    
                          }}
                          value={valueFilter.minprice}
                          id="min-price-input"
                          min="0"
                          max="7000"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
                          placeholder=""
                          required
                        />

                        <div className="shrink-0 text-sm font-medium dark:text-gray-300">
                          to
                        </div>

                        <input
                          type="number"
                          id="max-price-input"
                          onChange={(e)=>{
                            setValueFilter((data)=>{return {...data,maxprice:e.target.value}})
    
                          }}
                          value={valueFilter.maxprice}
                          min="0"
                          max="7000"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>

                  </div>



                  <div className="grid grid-cols-2  gap-4  md:grid-cols-3">

                    <div>
                      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                        Rating
                      </h6>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                
                            value={5}
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,rate:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.rate == 5}
                            type="radio"
                            name="rating"
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="five-stars"
                            className="ml-2 flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>First star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Second star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Third star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fourth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fifth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                
                            type="radio"
                            name="rating"
                            value={4}
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,rate:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.rate == 4}
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="four-stars"
                            className="ml-2 flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>First star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Second star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Third star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fourth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fifth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            
                            type="radio"
                            name="rating"
                            value={3}
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,rate:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.rate == 3}
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="three-stars"
                            className="ml-2 flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>First star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Second star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Third star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fourth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fifth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                          
                            type="radio"
                            name="rating"
                            value={2}
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,rate:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.rate == 2}
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="two-stars"
                            className="ml-2 flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>First star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Second star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Third star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fourth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fifth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                        
                            type="radio"
                            name="rating"
                            value="1"
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,rate:e.target.value}})
                              console.log("one : ",valueFilter)
                            }}
                            checked={valueFilter.rate == 1}
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="one-star"
                            className="ml-2 flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>First star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Second star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Third star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fourth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-300 dark:text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Fifth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                        View of product
                      </h6>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <input
                            
                            type="radio"
                            name="view"
                            value="0-500"
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,view:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.view == "0-500"}
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="five-stars"
                            className="ml-2 flex items-center"
                          >
                            View 0 to 500
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                      
                            type="radio"
                            name="view"
                            value="500-1000"
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,view:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.view == "500-1000"}
                            
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="five-stars"
                            className="ml-2 flex items-center"
                          >
                            View 500 to 1000
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                        
                            type="radio"
                            name="view"
                            value="1000-1500"
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,view:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.view == "1000-1500"}
                            
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="five-stars"
                            className="ml-2 flex items-center"
                          >
                            View 1000 to 1500
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                          
                            type="radio"
                            name="view"
                            value="1500-2000"
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,view:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.view == "1500-2000"}
                            
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="five-stars"
                            className="ml-2 flex items-center"
                          >
                            View 1500 to 2000
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            
                            type="radio"
                            name="view"
                            value="2000-3000"
                            onChange={(e)=>{
                              setValueFilter((data)=>{return {...data,view:e.target.value}})
                              console.log(valueFilter)
                            }}
                            checked={valueFilter.view == "2000-3000"}
                            
                            className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label
                            htmlFor="five-stars"
                            className="ml-2 flex items-center"
                          >
                            View 2000 to 3000
                          </label>
                        </div>

                      </div>
                    </div>

                  </div>

     
                </div>
              </div>

              {/* <!-- Modal footer --> */}
              <div className="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
                <button
                  onClick={handleSubmit}
                  className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
                >
                  Show results
                </button>
                <button
                  type="reset"
                  onClick={handleReset}
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </di>
      </>
  )
}
