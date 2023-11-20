

const MemuItem = ({ item }) => {
     const { name, recipe, image, price } = item
     return (
          <div>
               <div className="flex flex-col sm:flex-row gap-4 items-center text-left mb-10">
                    <div className="">
                         <img style={{borderRadius: '0 15px 15px 15px'}} className="w-36" src={image} alt="" />
                    </div>
                    <div className="">
                         <h3>{name}---------</h3>
                         <p>{recipe}</p>
                    </div>
                    <div className="">
                         <p>{price}</p>
                    </div>
               </div>
          </div>
     );
};

export default MemuItem;