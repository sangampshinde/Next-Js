// make entire component client component
// 'use client'

// import React from 'react'

// const ProductCart = () => {
//   return (

//     <div>
//         ProductCart
//         <button onClick={()=>{console.log('click')}}>Add to cart</button>
//     </div>
    
//   )
// }

// export default ProductCart

// ---------------------------------
import React from 'react'
import AddToCart from './AddToCart'

const ProductCart = () => {
  return (

    <div>
        ProductCart
        <AddToCart/>
    </div>
    
  )
}

export default ProductCart