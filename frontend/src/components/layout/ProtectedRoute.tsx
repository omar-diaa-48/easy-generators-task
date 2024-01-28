import React, { PropsWithChildren, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();

    const { isAuthenticated } = useAppSelector((state: RootState) => state.user)

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/sign-in");
        }
    }, [isAuthenticated])

    return (
        children
    )
}

export default ProtectedRoute