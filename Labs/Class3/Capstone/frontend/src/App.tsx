

import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "@/Layout.tsx";
import Home from "@/pages/Home.tsx"
import WidgetPage from "@/pages/WidgetPage.tsx";
import Results from "@/pages/Results.tsx";
import {AuthProvider} from "@/context/AuthContext.tsx";
import {WidgetProvider} from "@/context/WidgetContext.tsx";
import Login from "@/pages/Login.tsx";
import SignUp from "@/pages/SignUp.tsx";
import {Toaster} from "sonner";
import AddWidget from "@/pages/AddWidget.tsx";

function App() {


  // @ts-ignore
    return (

      <Router>
              <AuthProvider>
                  <WidgetProvider>
                      <Layout>
                          <Routes>
                              <Route path={"/"} element={<Home/>}/>
                              <Route path={"Widgets"} element={<Results/>}/>
                              <Route path={"/widget/:id"} element={<WidgetPage/>}/>
                              <Route path={"Login"} element={<Login/>}/>
                              <Route path={"SignUp"} element={<SignUp/>}/>
                              <Route path={"AddWidget"} element={<AddWidget/>}/>
                          </Routes>
                      </Layout>
                  </WidgetProvider>
              </AuthProvider>
          <Toaster/>
      </Router>


  )
}

export default App
