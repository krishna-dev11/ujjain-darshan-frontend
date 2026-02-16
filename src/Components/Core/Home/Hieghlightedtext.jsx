// import React from 'react'

// const Hieghlightedtext = ({color , data}) => {
//   return (
//     <span className={color}>{data}</span> 
//   )
// }

// export default Hieghlightedtext


// // text-2xl font-semibold







import React from 'react'

const Hieghlightedtext = ({color , data}) => {
  return (
    <span className={`${color} px-2`}>{data}</span> 
  )
}

export default Hieghlightedtext;