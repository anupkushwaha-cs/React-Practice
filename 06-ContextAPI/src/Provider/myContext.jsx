import { Children, createContext } from "react";

export const MyShop= createContext();



 export const myContextProvider = () =>{

    



    return <MyShop.Provider>
        <Children/>
    </MyShop.Provider> 
}

export default myContextProvider;