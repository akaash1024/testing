// import { BestBrandsOnOffer } from "./Layout/UI/Main--Component/BestBrandsOnOffer";
// import { IndianWearReimagined } from "./Layout/UI/Main--Component/IndianWearReimagined";
// import { TheWestSideStore } from "./Layout/UI/Main--Component/WestSideStore";
// import { Header } from "./Layout/layout/Header";
// import { QuickLinks } from "./Layout/UI/QuickLinks";
// import { TopSlideBar } from './Layout/UI/TopSlideBar';
// import { Footer } from './Layout/layout/Footer';
// import { HotBoyFits } from './Layout/UI/Main--Component/HotBoyFit';
// import { NextGenFashion } from './Layout/UI/Main--Component/NextGenFashion';
// import { HomeChecklist } from './Layout/UI/Main--Component/HomeCheckList';
// import { GedgetDen } from "./Layout/UI/Main--Component/GadgetDen";
// import { WatchThisSpace } from './Layout/UI/Main--Component/WatchTimeSpace';
// import { FullyFramed } from './Layout/UI/Main--Component/FullyFrame';
// import { ShineOn } from './Layout/UI/Main--Component/ShineOn';
// import { TrustAndAuth } from "./Layout/UI/Main--Component/TrustAndAuth";



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BestBrandsOnOffer, IndianWearReimagined, TheWestSideStore, Header, QuickLinks, TopSlideBar, Footer, HotBoyFits, NextGenFashion, HomeChecklist, GedgetDen, WatchThisSpace, FullyFramed, ShineOn, TrustAndAuth, AppLayout, ErrorPage404 } from './IMPORT_EXPORT'
import { Home } from './Pages/Home';

import { MenProducts } from './Pages/MenProducts';
import { WomenProducts } from './Pages/WomenProducts';
import { ElectronicProducts } from './Pages/ElectronicProducts';
import { JeweleryProducts } from './Pages/JeweleryProducts';
import { getMoreDetails } from './API/getMoreDetails';



import { ProductDetail } from './Pages/ProductDetail';


import { CartProvider } from './Cart/CartProvider';
import { AuthProvider } from './Auth/AuthProvider';
import { Login } from './Pages/Login';

import { ProtectedRoute } from './ProtectedRoute';
import { Cart } from './Pages/Cart';
import { SignUp } from './Pages/Signup';








const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:mensID',
        element: <MenProducts />
      },
      {
        path: '/:womensID',
        element: <WomenProducts />
      },
      {
        path: '/:electronicsID',
        element: <ElectronicProducts />
      },
      {
        path: '/:jeweleryID',
        element: <JeweleryProducts />
      },
      {
        path: 'products/:DetailID',
        element: <ProductDetail />,
        loader: getMoreDetails
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      }

    ]
  }
])




const App = () => {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </>
  )
}






export default App;