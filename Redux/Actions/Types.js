import { ADD_TO_CART } from '../Getdata'; 



export const addtoCart = (data) =>{
    return{
        type:ADD_TO_CART,
        data:data

    }
}