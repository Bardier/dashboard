import {FC, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {DashboardLoading, GameStats, GeneralSales, LeftSideBar, StatisticBar} from "@/blocks";
import {useDashboard} from "@/hooks";
import {UserContext} from "@/context";
import {WrapperStyled} from "@/ui";
import {subBgColor} from "@/styles";
import {PageHeader} from "@/blocks";
import {MainStats} from "@/blocks";

export const Dashboard: FC = () => {
    const {userToken} = useContext(UserContext);
    const navigate = useNavigate();
    const {mutate: getDashboard, data: dashboardData, isLoading, isError} = useDashboard();

    useEffect(() => {
        if (isError) {
            alert('Something went wrong! Try to reload window.');
        }
    }, [isError])

    useEffect(() => {
        const localUserToken = localStorage.getItem('userToken');
        if (userToken) {
            getDashboard(userToken)
        } else if (typeof localUserToken === 'string') {
            getDashboard(localUserToken)
        } else {
            navigate('/sign-in')
        }
    }, [])

    return <>

        {isLoading && <DashboardLoading>Loading...</DashboardLoading>}

        {dashboardData && <WrapperStyled display='flex' minHeight='100vh'>
            <LeftSideBar/>
            <WrapperStyled backgroundColor={subBgColor} flexGrow={1} minHeight='100vh' padding='16px 48px 28px 32px'>
                <PageHeader title='Dashboard'/>
                <StatisticBar statistic={dashboardData.statistic}/>
                <WrapperStyled display='flex' gap='16px' margin='0 0 16px 0'>
                    <MainStats data={dashboardData}/>
                    <GameStats/>
                </WrapperStyled>
                <GeneralSales data={dashboardData.general_sales_time}/>
            </WrapperStyled>
        </WrapperStyled>}
    </>
}