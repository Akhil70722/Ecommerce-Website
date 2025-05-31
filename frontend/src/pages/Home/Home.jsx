// import React, { useState } from 'react'
// import Header from '../../components/Header/Header'
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/ProductDisplay/FoodDisplay'
// import AppDownload from '../../components/AppDownload/AppDownload'

// const Home = () => {

//   const [category,setCategory] = useState("All")

//   return (
//     <>
//       <Header/>
//       <ExploreMenu setCategory={setCategory} category={category}/>
//       <FoodDisplay category={category}/>
//       <AppDownload/>
//     </>
//   )
// }

// export default Home



import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <ProductDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
