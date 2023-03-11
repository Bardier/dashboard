import {FC, useState} from "react";
import {UserContext} from '@/context';
import {Routes, Route} from 'react-router-dom';
import {SignInScreen, ErrorScreen, SignUpScreen, DashboardScreen} from "@/screens";
import {GlobalStyles} from "@/styles";

export const App: FC = () => {
    const [userToken, setUserToken] = useState<string | null>(null);

    return <>
        <UserContext.Provider value={{userToken, setUserToken}}>
            <GlobalStyles/>
            <Routes>
                <Route path='/dashboard/' element={<DashboardScreen/>}/>
                <Route path='/dashboard/sign-in' element={<SignInScreen/>}/>
                <Route path='/dashboard/sign-up' element={<SignUpScreen/>}/>

                <Route path='/dashboard/cards' element={<DashboardScreen/>}/>
                <Route path='/dashboard/product' element={<DashboardScreen/>}/>
                <Route path='/dashboard/wear-tear' element={<DashboardScreen/>}/>
                <Route path='/dashboard/games' element={<DashboardScreen/>}/>
                <Route path='/dashboard/settings' element={<DashboardScreen/>}/>

                <Route path='*' element={<ErrorScreen/>}/>
            </Routes>
        </UserContext.Provider>
    </>
}

