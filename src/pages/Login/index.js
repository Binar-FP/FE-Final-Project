import React from 'react'
import { Navbar, LoginComponent, Footer } from '../../components'
import { useLocation } from "react-router-dom";


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Login = () => {
  let query = useQuery();
  let tokenVerify = query.get("token");

  return (
    <div>
      <Navbar />
      <LoginComponent tokenVerify={tokenVerify}/>
      <Footer />
    </div>
  )
}

export default Login
