import {Dispatch, FC, SetStateAction} from "react";
import {RatingItem, RatingItemLabel, RatingItemSelect, RatingListStyled, RatingSales} from "@/components";
import {IChartData} from "@/types";

interface RatingList {
    chartData: IChartData[];
    shownLines: { 'green': boolean, 'red': boolean, 'blue': boolean }
    setShownLines: Dispatch<SetStateAction<{ green: boolean, red: boolean, blue: boolean }>>
}

export const RatingList: FC<RatingList> = ({chartData, shownLines, setShownLines}) => {
    const countSales = (key: 'blue' | 'red' | 'green'): number => {
        return chartData.reduce((acum, next) => {
            return acum + next[key]!
        }, 0)
    }

    return <RatingListStyled>
        <RatingItem>
            <RatingItemLabel isChecked={shownLines.blue} bgColor='#18A0FB'>
                <RatingItemSelect checked={shownLines.blue}
                                  onChange={() => setShownLines(prev => ({...prev, blue: !prev.blue}))}/>
                Rating 94%
            </RatingItemLabel>
            <RatingSales>
                {countSales("blue")} sales
            </RatingSales>
        </RatingItem>
        <RatingItem>
            <RatingItemLabel isChecked={shownLines.red} bgColor='#ED2D95'>
                <RatingItemSelect checked={shownLines.red}
                                  onChange={() => setShownLines(prev => ({...prev, red: !prev.red}))}/>
                Rating 94%
            </RatingItemLabel>
            <RatingSales>
                {countSales("red")} sales
            </RatingSales>
        </RatingItem>
        <RatingItem>
            <RatingItemLabel isChecked={shownLines.green} bgColor='#3CDC86'>
                <RatingItemSelect checked={shownLines.green}
                                  onChange={() => setShownLines(prev => ({...prev, green: !prev.green}))}/>
                Rating 94%
            </RatingItemLabel>
            <RatingSales>
                {countSales("green")} sales
            </RatingSales>
        </RatingItem>
        <RatingItem>
            <RatingItemLabel isChecked={false} bgColor='#F4A732'>
                <RatingItemSelect checked={false}
                                  onChange={() => console.log('#F4A732')}/>
                Rating 94%
            </RatingItemLabel>
            <RatingSales>
                {0} sales
            </RatingSales>
        </RatingItem>
        <RatingItem>
            <RatingItemLabel isChecked={false} bgColor='#9B53F8'>
                <RatingItemSelect checked={false}
                                  onChange={() => console.log('#9B53F8')}/>
                Rating 94%
            </RatingItemLabel>
            <RatingSales>
                {0} sales
            </RatingSales>
        </RatingItem>
    </RatingListStyled>
}