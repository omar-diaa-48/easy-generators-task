import { useEffect, useState } from "react";
import api from "../utilities/api";
import { LOCAL_STORAGE_JWT_KEY } from "../utilities/constants";

export default function useAddTokenHook() {
    const [isTokenAdded, setIsTokenAdded] = useState<boolean>(false)

    useEffect(() => {
        const jwt_token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
        api.defaults.headers.common["authorization"] = "Bearer " + jwt_token;

        setIsTokenAdded(true)
    }, [])

    return [isTokenAdded]
}