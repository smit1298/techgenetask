import React, {useState, useEffect} from "react";
import like from "../../assets/svg/like.svg";
import unlike from "../../assets/svg/unlike.svg";


const WishList = ({item}) => {
  const [liked, setLike] = useState(true);
  const [isInCart, setIsInCart] = useState(0)
  const [pointer, setPointer] = useState("");
  const [response, setResponse] = useState({})
  const [itemState, setItemState] = useState(item)


 
  

  const Liked = () => {

    if (itemState?.Redemption_method == 1&&itemState?.branch_code == undefined){
     
      
    }else{
    setPointer("none")
    let data =  JSON.stringify({redemption_method: itemState.Delivery_method == 3? 3: itemState.Delivery_method,
    "branch": itemState.branch_code,
    "item_code":itemState.Merchandize_item_code?itemState.Merchandize_item_code:itemState?.Item_code ,
    "item_price":itemState.Billing_price_in_points?itemState?.Billing_price_in_points:itemState?.Price,
    "item_quantity": 1,
    "remark":itemState.item_attr_id,
    "type":2 })
   
    }

    setLike(false);
  };

  useEffect(()=>{
    if (response?.status == 1 || response == 3){
      setLike(true)
    }
  }, [response?.status])

  return (
    <div>
      { response?.status == 1 || isInCart?.status == 1 || isInCart?.status == 3  || response?.status == 3?  <button className="flex  mb-2" style={{pointerEvents:pointer}}>
       <img src={like} />
      </button>:  <button className="flex mb-2" onClick={Liked}>
       <img src={unlike} />
      </button>}
     
    </div>
  );
};

export default WishList;
