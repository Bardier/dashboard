import {FC, ReactNode} from "react";
import {
    StatisticItemCount,
    StatisticItemIconWrapper,
    StatisticItemStyled,
    StatisticItemTitle
} from "@/components";
import {WrapperStyled} from "@/ui";

interface StatisticItemProps {
    icon: ReactNode
    iconBgColor: string;
    statisticCount: number;
    title: string;
}

export const StatisticItem: FC<StatisticItemProps> = ({statisticCount, title, iconBgColor, icon}) => {
    return <StatisticItemStyled>
        <StatisticItemIconWrapper bg={iconBgColor}>
            {icon}
        </StatisticItemIconWrapper>
        <WrapperStyled>
            <StatisticItemCount>
                {statisticCount}
            </StatisticItemCount>
            <StatisticItemTitle>
                {title}
            </StatisticItemTitle>
        </WrapperStyled>
    </StatisticItemStyled>
}