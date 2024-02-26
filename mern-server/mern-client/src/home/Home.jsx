import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellBooks'
import FavBooks from './FavBook'
import PromoBanner from './PromoBanner'

import Review from './Review'


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBooks/>
      <PromoBanner/>
      <Review/>
    </div>
  )
}

export default Home