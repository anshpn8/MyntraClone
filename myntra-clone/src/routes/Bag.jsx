import { useSelector } from "react-redux";
import BagItem from "../Component/BagItem";
import BagSummary from "../Component/BagSummary";
const Bag = () => {
  
    const bagItems=useSelector(store=>store.bag);
    const items =useSelector(store=>store.items);
    const itemInBag=items.filter(item=>{
      const itemIndex=bagItems.indexOf(item.id);
      return itemIndex>=0;
    });
  return (

      <main>
        <div className="bag-page">
          <div className="bag-items-container">
         {itemInBag.map(item=> <BagItem item={item}/>) }
          </div>
          
          <BagSummary></BagSummary>
        </div>
      </main>
  );
};

export default Bag;
