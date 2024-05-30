import React, { useEffect, useState } from "react";
import { OrderPickUpItems } from "../../CardItems/CardItem";
import arrivals from "../../../../cart";
import dress from "../../../../assets/images/dress-up.png";
import { categoryStore, doGet, getData, storeData } from "../../../../config/helper";
import { Dna } from "react-loader-spinner";
import Err404 from "../../../../assets/images/err404.png";


const OrderPickUpList = () => {
  const [arrivalItems, setArrivalItems] = useState([]);
  const [categories, setCategories] = useState(getData(categoryStore)?.data);
  const [subCategories, setSubCategories] = useState()
  const [categoryItems, setCategoryItems] = useState([])
  const [label, setLabel] = useState("Select a category")


  const fetchCategoryItems = (categoryName, setter, endpoint) => {
    setArrivalItems([])
    setLabel(categoryName);
    doGet(setter, endpoint);
  }

  const getNestedCategories = (categoryID) => {
    let subCat = []
    setLabel("Select a sub-category");
    setArrivalItems([])
    categories?.map((category)=>{
       
        category.sub_categories.map((subcategory)=> {
          if (subcategory.Merchandize_category_id == categoryID){
            subcategory.sub_categories.map((sub) => 
            
            subCat.push({"sub_cat_name":sub.Merchandize_category_name, "sub_cat_id":sub.Merchandize_category_id})
            
            )
          }
          
        })
      
    })
    setSubCategories(subCat)
  }

  useEffect(() => {
    if(!getData(categoryStore)?.data){
      doGet(setCategories, 'api/multi_categories?token='+ process.env.APPLICATION_TOKEN)
      storeData(categoryStore, categories?.Categories)
    }
  }, [categories]);



  return (
    <div>
      <div className="pt-4 space-y-4">
        <div className="flex gap-2 ml-4 overflow-x-scroll scrollbar-hide sm:gap-3">
        {categories?.length > 0 ? categories?.map((category) =>
           category.sub_categories.map( (subCat) => 
            
              <button key={subCat.Merchandize_category_id + category.Merchandize_category_id} className="font-bold py-2 uppercase flex border-sub border-solid border rounded-xl px-4 items-center text-lg leading-product tracking-loyal text-center" onClick={ ()=>{
                getNestedCategories(subCat?.Merchandize_category_id)
               }}>
               {subCat?.Merchandize_category_name.toLowerCase()}
             </button>
               
            
           )
          ): ''}

        </div>

        <div className="flex gap-2 ml-4 overflow-x-scroll scrollbar-hide sm:gap-3">
        {
          subCategories?.map((subcategory)=>
          <button key={subcategory?.sub_cat_id} className="font-bold py-2 flex border-sub border-solid uppercase border rounded-xl px-4 items-center text-lg leading-product tracking-loyal text-center" onClick={ ()=>{
            fetchCategoryItems(subcategory?.sub_cat_name.toUpperCase(), setArrivalItems, 'api/delivery_items_categories/' + subcategory?.sub_cat_id)
           }}>
           {subcategory?.sub_cat_name.toLowerCase()}
          
         </button>
          )
        }
          
        </div>

        <div className="flex flex-col">
          <h2 className="mx-auto text-list w-fit my-8 text-2xl font-bold leading-product tracking-loyal">
            
            {label}

          </h2>
          <div
            className="flex mx-auto flex-wrap pl-[5%] gap-3 sm:px-3 sm:gap-4 sm:w-[85%]"
          >
           
            
            {
            arrivalItems?.data ?
            arrivalItems?.data?.map((item, index) =>
          
              index <= 12 ? <OrderPickUpItems key={index} card={item} /> : ''
            ) : <div className="flex py-12 justify-center" style={{margin:"0px auto"}}>
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>}
          </div>
          <div className="mx-auto mt-7 mb-14 w-fit py-1 px-16 text-base leading-loyalty font-bold rounded border-solid border-2 border-list capitalize sm:mt-14 sm:mb-28">
            load more
          </div>
          <img className="w-[82%] mx-auto" src={dress} alt="your advert here" />
        </div>
      </div>
    </div>
  );
};

export default OrderPickUpList;
