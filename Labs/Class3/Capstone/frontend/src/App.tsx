

import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "@/Layout.tsx";
import Home from "@/pages/Home.tsx"
import WidgetPage from "@/pages/WidgetPage.tsx";

function App() {


  return (

      <Router>
          <Layout>
              <Routes>
                  <Route path={"/"} element={<Home />}/>
                  <Route path={"/widget/:id"} element={<WidgetPage />}/>
              </Routes>
          </Layout>
      </Router>


  )
}

export default App
