
import { HashLoader } from 'react-spinners'

const Spinner = ({ smallHeight }) => {
     return (

          <div
               className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
                    flex 
                    flex-col 
                    justify-center 
                    items-center `}
          >
               <HashLoader size={60} color='#F43F5E' />

          </div>



     );
};

export default Spinner;