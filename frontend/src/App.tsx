import { adminRoutes, publicRoutes, userRoutes } from "./routes/index"
import { MainContext } from "./context/main.context"; 
import { Routes, Route } from "react-router-dom"
import { Layout } from "./layout/layout";
import { useContext, useEffect } from "react"

export function App() {

  const { loged, admin } = useContext(MainContext);

  return (
    <Routes>
      {publicRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={ <Layout>{route.component}</Layout> }
        />
      ))}
      { loged ? userRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={ <Layout>{route.component}</Layout> }
        />
      )) : <></> }
      { admin ? adminRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={ <Layout>{route.component}</Layout> }
        />
      )) : <></> }
    </Routes>
  )
}
