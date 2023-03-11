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
                <Route path='/' element={<DashboardScreen/>}/>
                <Route path='/sign-in' element={<SignInScreen/>}/>
                <Route path='/sign-up' element={<SignUpScreen/>}/>

                <Route path='/dashboard' element={<DashboardScreen/>}/>
                <Route path='/cards' element={<DashboardScreen/>}/>
                <Route path='/product' element={<DashboardScreen/>}/>
                <Route path='/wear-tear' element={<DashboardScreen/>}/>
                <Route path='/games' element={<DashboardScreen/>}/>
                <Route path='/settings' element={<DashboardScreen/>}/>

                <Route path='*' element={<ErrorScreen/>}/>
            </Routes>
        </UserContext.Provider>
    </>
}

