"use client"
import { getProductAction } from '@/actions/page'
import ProductCard from '@/components/ProductCard'
import { useEffect, useState } from 'react'

const Products = () => {
  const[data, setData] = useState([])
  const getProducts = async ()=>{
    const response = await getProductAction()
    setData(response.data)
  }
  useEffect(()=>{
    getProducts()
  }, [])
  return (
    <>
        <ProductCard productList={data} />
    </>
  )
}

export default Products