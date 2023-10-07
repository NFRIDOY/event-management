import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'


export default function PrivateRoutes({ children }) {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
}

PrivateRoutes.prototype = {
    children: PropTypes.node
}