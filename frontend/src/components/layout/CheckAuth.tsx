import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useAppDispatch } from '../../store/hooks';
import useAddTokenHook from '../../hooks/use-add-token-hook';
import { logoutAction, verifyTokenAsyncAction } from '../../store/reducers/user.reducer';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const CheckAuth: React.FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [isTokenAdded] = useAddTokenHook()
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        if (isTokenAdded) {
            dispatch(verifyTokenAsyncAction())
                .then((data) => {
                    if (data.meta.requestStatus !== "fulfilled") {
                        dispatch(logoutAction())
                        navigate('/sign-up')
                    }

                    setIsAuthenticating(false)
                })
        }
    }, [isTokenAdded])

    if (!isTokenAdded || isAuthenticating) {
        return (
            <Loader />
        )
    }


    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default CheckAuth