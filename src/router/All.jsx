import React from 'react'
import Navbar from './NavBar'
import './All.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const products = [
  {
    name: "Fruits & Vegetables",
    image: "https://cdn.zeptonow.com/production/cms/category/38047553-95f3-47c6-a1ff-4794e1227d3a.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/dc4a299d-521f-4a64-8205-c5ba8e1d13e3.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/031c2a24-d40f-4272-8c71-8a566252495e.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/ec7b14c6-2640-4165-b3ae-68c09a249ae0.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/8d4fb022-bae0-432d-92c8-2b12d97ee6cc.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/20d9687b-58a4-4bf7-a561-99198b4d5ca1.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/366e5b7d-2028-4935-b9f1-75bfa085c3d7.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/db346f5e-644f-426a-85af-92d707e086ac.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/3b0ce887-3b38-4450-b7da-9da0ad8b799d.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/474e6e58-1894-4378-86f1-168cc7266d1a.png",
  },
  {
    name: "",
    image: "https://cdn.zeptonow.com/production/cms/category/59d2c0cc-e776-407c-9142-7e69898d9eab.png",
  },
  {
    name: "",
    image:"https://cdn.zeptonow.com/production/cms/category/90b2faee-1461-465a-a8c6-8c84716dd7dc.png",
  },
  {
    name: "",
    image:"https://cdn.zeptonow.com/production/cms/category/1237afd6-40bf-4942-a266-25f23025e86c.png",
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/ab241d87-da5b-4830-b38f-1a6cd30d0d41.png",
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/f078a8dc-a9b6-41a6-9c6f-721d4892b8ee.png",
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/9b88fff5-73f5-46fd-999f-1622db4203d7.png",
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/91b5ee91-38a4-4654-93db-ba948f6265ea.png",
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/b1909dfd-726c-412b-beb7-9553bc909363.png",
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/e4fe52ef-96d9-4289-afb1-1c1ca7efd85b.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/eb6fe22a-f8b8-4189-8d9a-deb32ff659c9.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/acfa1279-d46b-408c-8f74-6fcd71bd89f9.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/b322b3db-e75e-45e5-a11d-7ee37561c426.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/b5cfc944-9611-4f08-b4f9-a071d07b1aad.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/c42610fc-a94c-40f6-9e74-d30c4a1f5895.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/c084c75c-82ca-497f-857c-5069c6723194.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/a4d7f18e-3a58-4c85-b912-f15f0be533ab.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/2b267097-f22b-4269-be34-1ea534ced3d4.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/bc5f6b57-fa3a-4a71-b498-7b8cb83323f9.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/f4371151-d6ed-42d6-9338-8f7391d03fec.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/227b70d5-d1cf-428b-a276-1392c5067eb3.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/0da227bf-f9c1-4688-b26a-8ee28dcdaa8e.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/e6336a1b-eead-42d5-9c4d-23e22e3ebf2d.png"
  },
  {
    image:"https://cdn.zeptonow.com/production/cms/category/6d26710a-1dd8-4d53-9884-33bbaebc4bf4.png"
  },
  
]


const All = () => {
  return (
    <>
        <Navbar />
        <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={`${product.name} image`} className="product-image" />
          </div>
        ))}<IoIosArrowDroprightCircle />

      </div>
    </>
  )
}

export default All
