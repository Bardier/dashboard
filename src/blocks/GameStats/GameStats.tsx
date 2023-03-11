import {FC, useEffect, useState} from "react";
import {WrapperStyled} from "@/ui";
import {
    LocationWrapper,
    GameStatsStyled,
    GameStatsTitle,
    LocationActive,
    LocationList,
    LocationItem,
    GameStatsBody, GameStatsBodyTitle, GameStatsBodyPersents, GameStatsBodyText, GameStatsList, GameStatsItem
} from "@/blocks";
import {PieChartCustom} from "@/components";
import {ActiveIcon, ArrowDownGeneralSalesIcon} from "@/assets";

const data = {
    locations: ['Charlottetown', 'Halifax', 'Naperville', 'Vernon', 'Montreal'],
    percent: 85
}

export const GameStats: FC = () => {
    const [location, setLocation] = useState<string>('Naperville')
    const [locationPopup, setLocationPopup] = useState(false)

    useEffect(() => {
        window.addEventListener('click', () => setLocationPopup(false))

        return () => window.removeEventListener('click', () => setLocationPopup(false))
    }, [])

    const locationMenuHandler = () => {
        setLocationPopup(prev => !prev)
    }

    return <GameStatsStyled>
        <WrapperStyled display='flex' justifyContent='space-between' margin='0 0 32px 0'>
            <GameStatsTitle>
                Game Stats
            </GameStatsTitle>
            <LocationWrapper>
                Location
                <LocationActive onClick={e => e.stopPropagation()} isActive={locationPopup}>
                    {location} <ArrowDownGeneralSalesIcon onClick={locationMenuHandler}/>
                    {locationPopup && <LocationList>
                        {data.locations.map(loc => {
                            const classList = loc === location ? 'active' : undefined
                            return <LocationItem key={loc} className={classList} onClick={() => setLocation(loc)}>
                                {loc} {classList && <ActiveIcon/>}
                            </LocationItem>
                        })}
                    </LocationList>}
                </LocationActive>
            </LocationWrapper>
        </WrapperStyled>
        <WrapperStyled display='flex' position='relative' gap='38px'>
            <PieChartCustom/>
            <GameStatsBody>
                <GameStatsBodyTitle>Excessive</GameStatsBodyTitle>
                <GameStatsBodyPersents>{data.percent}%</GameStatsBodyPersents>
                <GameStatsBodyText>+40 418 in the last <br/> 30 days</GameStatsBodyText>
            </GameStatsBody>
            <GameStatsList>
                <GameStatsItem circleColor='#18A0FB'>Roles</GameStatsItem>
                <GameStatsItem circleColor='#ED2D95'>Users</GameStatsItem>
                <GameStatsItem circleColor='#3CDC86'>Policies</GameStatsItem>
            </GameStatsList>
        </WrapperStyled>
    </GameStatsStyled>
}