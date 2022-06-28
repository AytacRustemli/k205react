import React from 'react'
import Category from '../components/Category/Category'
import Product from '../components/Product/Product'
import Slider from '../components/Slider/Slider'
import { useSelector } from 'react-redux';

const Home = () => {
  const getProduct = useSelector((state) => state.products.products.message)

  const categories = [
    {
      id: 1,
      name: "Telefon",
      parentCategoryId: null,
      parentCategory: null
    },
    {
      id: 2,
      name: "Planset",
      parentCategoryId: null,
      parentCategory: null
    }
  ]

    return (
        <>
            
            <Product />
            <Slider />
            {
                categories.map((e)=>(
                    <div className="div">
                    <Category catName={e.name} />

                    </div>

                ))
            }
        </>
    )
}

export default Home