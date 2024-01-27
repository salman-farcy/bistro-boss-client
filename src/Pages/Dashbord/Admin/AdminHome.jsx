import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
     const {user} = useAuth()
     return (
          <div className="text-3xl font-semibold">
               <span>Hi, Welcome </span>
               {
                    user?.displayName ? user.displayName: 'back'
               }
          </div>
     );
};

export default AdminHome;