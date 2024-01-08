

const SectionTitel = ({ heading, subHeading }) => {
     return (
          <div className="text-center py-10  space-y-4 ">
               <p className="text-yellow-400">---{subHeading}---</p>
               <div>
                    <h3 className="w-8/12 sm:w-7/12 md:w-5/12 lg:w-3/12 mx-auto  border-t-4 border-b-4 border-yellow-300  py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extralight text-black uppercase">{heading}</h3>
               </div>
          </div>
     );
};

export default SectionTitel;