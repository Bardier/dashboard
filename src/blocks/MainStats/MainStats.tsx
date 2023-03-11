import {ChangeEvent, FC, useEffect, useRef, useState} from "react";
import {WrapperStyled} from "@/ui";
import {MainStatsSelectSpan, MainStatsSelectWrapper, MainStatsStyled, MainStatsTitle} from "@/blocks";
import {MainStatsSelect, RatingList, StackedAreaChart, UsersList} from "@/components";
import {IDashboard} from "@/types";
import {ArrowDownGeneralSalesIcon} from "@/assets";

interface MainStatsProps {
    data: IDashboard
}

export const MainStats: FC<MainStatsProps> = ({data}) => {
    const selectRef = useRef<HTMLSpanElement>(null);
    const [modal, setModal] = useState(false)
    const [selectedType, setSelectedType] = useState('Graph');
    const [shownLines, setShownLines] = useState({'green': true, 'red': true, 'blue': true})

    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            if (ref.current)
                setWidth(ref.current.offsetWidth);
        }
    }, []);

    const handleSelectedTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedType(event.target.value);
    };

    const chartData = data.chartData.map(el => {
        return {
            blue: shownLines.blue ? el.blue : null,
            red: shownLines.red ? el.red : null,
            green: shownLines.green ? el.green : null,
            date: el.date
        }
    })

    useEffect(() => {
        const closeMenu = () => {
            selectRef.current?.classList.remove('active')
            setModal(false)
        }
        window.addEventListener('click', closeMenu);

        return () => window.removeEventListener('click', closeMenu)
    }, [])


    const menuHandler = () => {
        selectRef.current?.classList.toggle('active')
        setModal(prev => !prev)
    }

    return <MainStatsStyled>
        <WrapperStyled display='flex' justifyContent='space-between'>
            <MainStatsTitle>Game Stats</MainStatsTitle>
            <MainStatsSelectWrapper onClick={e => e.stopPropagation()}>
                Data type
                <MainStatsSelectSpan ref={selectRef}>
                    Graph
                    <ArrowDownGeneralSalesIcon onClick={menuHandler}/>
                </MainStatsSelectSpan>
                {modal &&
                    <MainStatsSelect handleSelectedTypeChange={handleSelectedTypeChange} selectedType={selectedType}/>}
            </MainStatsSelectWrapper>
        </WrapperStyled>
        <WrapperStyled display='flex' gap='50px' margin='30px 0 0 0'>
            <WrapperStyled minHeight='250px' minWidth='300px' flexGrow={1} ref={ref}>
                {selectedType === 'Graph' && <StackedAreaChart width={width} data={chartData}/>}
            </WrapperStyled>
            <RatingList chartData={data.chartData} shownLines={shownLines} setShownLines={setShownLines}/>
            <UsersList users={data.users}/>
        </WrapperStyled>
    </MainStatsStyled>
}