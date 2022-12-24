import React from 'react'
import { Navbar, Footer, ResetPasswordComponent } from '../../components'
import { useLocation} from "react-router-dom";
// import { useSelector } from 'react-redux';


function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const ResetPassword = () => {
  let query = useQuery();
  let tokenVerify = query.get("token");
  let id = query.get("id");

  return (
    <div>
      <Navbar />
      <ResetPasswordComponent tokenVerify={tokenVerify} id={id}/>
      <Footer />
    </div>
  )
}

export default ResetPassword
