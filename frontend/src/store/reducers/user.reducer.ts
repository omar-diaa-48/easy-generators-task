import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import api from '../../utilities/api';
import { LOCAL_STORAGE_JWT_KEY } from '../../utilities/constants';
import { ISignInForm, ISignUpForm } from '../../utilities/interfaces/auth-request.interface';
import { IAuthResponse } from '../../utilities/interfaces/auth-response.interface';

export interface UserState {
    data?: {
        name: string;
        email: string;
    },
    isAuthenticated: boolean;
    isLoading: boolean;
}

const initialState: UserState = {
    isAuthenticated: false,
    isLoading: false
}

export const signInAsyncAction = createAsyncThunk<IAuthResponse, ISignInForm>('user/signIn', async (form, { rejectWithValue }) => {
    try {
        const response = await api.post<IAuthResponse>('/auth/sign-in', form)
        const data = response.data;

        const jwtToken = data.token;
        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, jwtToken);
        api.defaults.headers.common["authorization"] = "Bearer " + jwtToken;

        return data;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const signUpAsyncAction = createAsyncThunk<IAuthResponse, ISignUpForm>('user/signUp', async (form, { rejectWithValue }) => {
    try {
        const response = await api.post<IAuthResponse>('/auth/sign-up', form)

        const data = response.data;

        const jwtToken = data.token;
        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, jwtToken);
        api.defaults.headers.common["authorization"] = "Bearer " + jwtToken;

        return data;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const verifyTokenAsyncAction = createAsyncThunk<IAuthResponse, void>('user/verifyToken', async (_, { rejectWithValue }) => {
    try {
        const response = await api.post<IAuthResponse>('/auth/verify')
        const data = response.data;

        return data;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutAction() {
            localStorage.setItem(LOCAL_STORAGE_JWT_KEY, "");
            api.defaults.headers.common["authorization"] = "Bearer ";

            return {
                ...initialState
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            signInAsyncAction.fulfilled,
            (state, { payload }) => ({ ...state, isAuthenticated: true, isLoading: false, data: { name: payload.name, email: payload.email } })
        )

        builder.addCase(
            signUpAsyncAction.fulfilled,
            (state, { payload }) => ({ ...state, isAuthenticated: true, isLoading: false, data: { name: payload.name, email: payload.email } })
        )

        builder.addCase(
            verifyTokenAsyncAction.fulfilled,
            (state, { payload }) => ({ ...state, isAuthenticated: true, isLoading: false, data: { name: payload.name, email: payload.email } })
        )

        builder.addMatcher(isAnyOf(signInAsyncAction.pending, signUpAsyncAction.pending, verifyTokenAsyncAction.pending), (state) => ({ ...state, isLoading: true }))
        builder.addMatcher(isAnyOf(signInAsyncAction.rejected, signUpAsyncAction.rejected, verifyTokenAsyncAction.rejected), (_, { payload }) => {
            if (isAxiosError(payload)) {
                toast.error(payload.response?.data?.message)
            }

            return {
                ...initialState
            }
        })
    }
})

export const { logoutAction } = userSlice.actions

export default userSlice.reducer