//add to cart items

export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

//to remove items-passing items ki id
export const DLT=(id)=>{
    return{
        type:"RMW_CART",
        payload:id
    }
}

export const REMOVE=(item)=>{
    return{
        type:"RMW_ONE",
        payload:item
    }
}