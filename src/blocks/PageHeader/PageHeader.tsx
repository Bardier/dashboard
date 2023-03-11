import {FC, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {WrapperStyled} from "@/ui";
import {HeaderIconWrapper, HeaderInfo, HeaderTitle} from "@/blocks";
import {UserContext} from "@/context";
import {useUser} from "@/hooks";
import {UserIcon} from "@/assets";

interface PageHeaderProps {
    title: string;
}

export const PageHeader: FC<PageHeaderProps> = ({title}) => {
    const {setUserToken, userToken} = useContext(UserContext);
    const navigate = useNavigate();
    const {mutate: getUser, data: userData, isLoading, isError} = useUser();

    useEffect(() => {
        getUser(localStorage.getItem('userToken') || '')
    }, [])

    const signOut = () => {
        localStorage.clear();
        setUserToken(null)
        navigate('/sign-in')
    }

    useEffect(() => {
        if (userToken && !userData) getUser(userToken)
    }, [])

    return <WrapperStyled display='flex'
                          justifyContent='space-between'
                          margin='0 0 40px'
                          alignItems='center'>
        <HeaderTitle>{title}</HeaderTitle>

        <HeaderInfo>
            <HeaderIconWrapper><UserIcon onClick={signOut}/></HeaderIconWrapper>
            {isLoading && 'Loading...'}
            {userData?.user.email}
        </HeaderInfo>

    </WrapperStyled>
}