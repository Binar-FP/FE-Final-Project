import React, { useEffect } from 'react'
import { Navbar, LoginComponent, Footer } from '../../components'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


function useQuery() {
  const { search } = useLocation();
  const history = useNavigate()
  const checkLogin = useSelector(state => state.auth.isLoggedIn)

  useEffect(() => {
    if (checkLogin === true) {
      history('/')
    }
  }, [checkLogin, history])


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
