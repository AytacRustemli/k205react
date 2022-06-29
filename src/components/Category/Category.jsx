import React from 'react'
import { useSelector } from 'react-redux';

const Category = ({catName}) => {
  const getProduct = useSelector((state) => state.products.products.message)

  return (
    <div>
        <h5>{catName}</h5>
        <div className="row">
            {
                getProduct.filter(x=>x.categoryName === catName).map((pro) =>(
                    <div className='col-lg-3' key={pro.id}>
                        {pro.name} <br />
                        <img width="100px" src={pro.coverPhoto} alt="" />
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Category