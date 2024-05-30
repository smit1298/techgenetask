import React, { useState, useEffect } from "react";

const AddToCart = ({item}) => {
  const [addToCart, setAddToCart] = useState(false);
  const [response, setResponse] = useState({});
  const [deleteResponse, setDeleteResponse] = useState({})
  const [label, setLabel] = useState("Add To Cart")
  const [pointer, setPointer] = useState("")
  const [dynamicStyle, setDynamicStyle] = useState({backgroundColor:"#ffc107", color:"#000", borderColor:"#000"})

  const Add = () => {
    setLabel("Adding To Cart ...")
    if (item?.Redemption_method == 1&&item?.branch_code == undefined){
      setLabel("Select a branch")
      
    }else{
      
      setPointer("none")
      if (window.location.pathname === '/wish-list'){
      }
    let data =  JSON.stringify({redemption_method: item.Delivery_method == 3? 1: item.Delivery_method,
    "branch": item.branch_code,
    "item_code":item.Merchandize_item_code?item?.Merchandize_item_code:item?.Item_code,
    "item_price":item.Billing_price_in_points?item.Billing_price_in_points:item?.Item_price?item?.Item_price:item?.Price,
    "item_quantity": item.item_quantity?item.item_quantity:1,
    "remark":item.item_attr_id,
    "type": 1
  })
  
    }
   
  };
  
  useEffect(() => {
    if (response?.status == 1 || response?.status == 3){
      setLabel("Added To Cart");
      setDynamicStyle({backgroundColor:"#fff", borderColor:"#198754", color:"#198754"})
      setPointer("none")
      if (window.location.pathname === '/wish-list'){
        window.location = '/wish-list'
        console.log('deleted', deleteResponse)
      }else{
        console.log("none")
      }
    }else if (response?.status != undefined){
      setLabel("Can not Add to Cart")
      setPointer("none")
      
    }else{
      setLabel("Add to Cart")
      setPointer("")
    }
    console.log('add to cart', response)
  }, [response?.status]);


  return (
    <div>
   
        <button style={{pointerEvents:pointer, borderColor:dynamicStyle.borderColor, color:dynamicStyle.color, backgroundColor:dynamicStyle.backgroundColor }} 
          onClick={Add}
          className="mt-6 w-full justify-center font-bold text-base flex mx-auto py-3 px-[17px] bg-add rounded border-2 border-solid border-black"
        >
          {label}
        </button>
 
    </div>
  );
};

export default AddToCart;
