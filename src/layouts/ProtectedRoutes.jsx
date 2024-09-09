import { Navigate } from "react-router-dom"


function ProtectedRoutes({children,admin}) {
 if(admin) {
    return children;
 } else {
    return <Navigate to="/login"/>
 }
}

export default ProtectedRoutes