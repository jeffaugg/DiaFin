import React, { createContext, useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { localStorageKeys } from "../config/constants";
import { userService } from "../services/userService";
import toast from 'react-hot-toast';
import { LaunchScreen } from "../../view/components/LaunchScreen";

interface IAuthContextValue {
    signedIn: boolean
    signin(acessToken: string) : void
    signout(): void 
}

export const AuthContext = createContext({} as  IAuthContextValue)

export function AuthProvider({ children}: { children: React.ReactNode}){
    const queryClient = useQueryClient()

    
    const [signedIn, setSignedIn] = useState<boolean>(() => {
        const storedAcessToken = localStorage.getItem(localStorageKeys.ACCESSTOKEN);
        return !!storedAcessToken;
    })
    
    const signin = useCallback((acessToken: string) => {
        localStorage.setItem(localStorageKeys.ACCESSTOKEN, acessToken)
        setSignedIn(true);
    }, [])
    
    const signout = useCallback(() => {
        localStorage.removeItem(localStorageKeys.ACCESSTOKEN);
		queryClient.removeQueries({ queryKey: ['users', 'me'] });
		setSignedIn(false);
	}, [queryClient]);

    const { isError, isFetching, isSuccess} = useQuery({
        queryKey: ['user', 'me'],
        queryFn: async () => userService.me(),
        enabled: signedIn,
        staleTime: Infinity,
    })


    useEffect(() => {
        if(isError) {
            toast.error('Sua sessão expirou')
            signout();
        }
    }, [isError, signout])


    return (
        <AuthContext.Provider
            value={{
				signedIn: isSuccess && signedIn,
				signin,
				signout,
			}}
        >
            <LaunchScreen isLoading={isFetching} />
            {!isFetching && children}
        </AuthContext.Provider>
    )
}