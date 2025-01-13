import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import ReturnPolicy from "./Pages/ReturnPolicy"
import TermAndCondition from "./Pages/TermAndCondition"
import ShoppingPolicy from "./Pages/ShoppingPolicy"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import FAQ from "./Pages/FAQ"
import Testing from "./Pages/testing"


let router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
          index:true,
          element:<Home/>
      },
      {
        path:"about",
        element:<AboutUs/>
      },
      {
        path:"contact",
        element:<ContactUs/>
      },
      {

        path:"shopping-policy",
        element:<ShoppingPolicy/>
      },
      {

        path:"return-policy",
        element:<ReturnPolicy/>
      },
      {
        path:"term-and-condition",
        element:<TermAndCondition/>
      },
      {
        path:"privacy-policy",
        element:<PrivacyPolicy/>
      },
      {
        path:"faq",
        element:<FAQ/>
      },
      {
        path:"testing",
        element:<Testing/>
      }
    ]
  }
])
function App() {

  return (
    <>
     
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
