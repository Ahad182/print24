import React from 'react'
import Hero from '../Component/Hero/Hero'
import Brands from '../Component/Brands/Brands'
import ProductCategory from '../Component/ProductCategory/ProductCategory'
import ProductList from '../Component/ProductList/ProductList'
import BoxPacking from '../Component/BoxPacking/BoxPacking'
import WhyChoose from '../Component/WhyChoose/WhyChoose'
import Testimonial from '../Component/Testimonial/Testimonial'
import TrandSet from '../Component/TrandSet/TrandSet'
import Instruction from '../Component/Instructions/Instruction'

const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <ProductCategory/>
      <ProductList/>
      <BoxPacking/>
      <WhyChoose/>
      <Testimonial/>
      <TrandSet/>
      <Instruction/>
    </>
  )
}

export default Home
