import { Details, Home, Products, } from "./src/screens"

import { useState } from "react"
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [CategorySelected, setCategorySelected] = useState('')
  const [productSelected, setProductSelected] = useState()

  if (!fontsLoaded) {
    return null
  }
  
  return productSelected ? (
    <Details product={productSelected}/>
 ) : CategorySelected ? (
  <Products category={CategorySelected} setProductSelected={setProductSelected} />
 ) : (
  <Home setCategorySelected={setCategorySelected} />
 )
} 