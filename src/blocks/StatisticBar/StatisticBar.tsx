import {FC} from "react";
import {IStatistic} from "@/types";
import {StatisticBarList} from "@/blocks";
import {StatisticItem} from "@/components";
import {GamesServiceIcon, KeyholeServiceIcon, SettingServiceIcon, ShareServiceIcon, UserServiceIcon} from "@/assets";

interface StatisticBarProps {
    statistic: IStatistic
}

export const StatisticBar: FC<StatisticBarProps> = ({statistic}) => {
    const statisticData = [
        {
            icon: <UserServiceIcon/>,
            iconBgColor: 'rgba(66, 204, 88, 0.15)',
            statisticCount: statistic.iam_users,
            title: 'IAM Users'
        },
        {
            icon: <SettingServiceIcon/>,
            iconBgColor: 'rgba(73, 152, 238, 0.15)',
            statisticCount: statistic.iam_roles,
            title: 'IAM Roles'
        },
        {
            icon: <KeyholeServiceIcon/>,
            iconBgColor: 'rgba(242, 93, 93, 0.15)',
            statisticCount: statistic.iam_policies,
            title: 'IAM Policies'
        },
        {
            icon: <ShareServiceIcon/>,
            iconBgColor: 'rgba(244, 167, 50, 0.15)',
            statisticCount: statistic.compute_resources,
            title: 'Compute Resources'
        },
        {
            icon: <GamesServiceIcon/>,
            iconBgColor: 'rgba(155, 83, 248, 0.15)',
            statisticCount: statistic.games,
            title: 'Games'
        }
    ]
    return <StatisticBarList>
        {statisticData.map(item => <StatisticItem key={item.title} {...item}/>)}
    </StatisticBarList>
}