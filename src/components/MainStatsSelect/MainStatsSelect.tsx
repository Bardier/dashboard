import {ChangeEvent, FC} from "react";
import {Radio, MainStatsSelectItem, MainStatsSelectList} from "@/components";

interface MainStatsSelectProps {
    selectedType: string
    handleSelectedTypeChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const MainStatsSelect: FC<MainStatsSelectProps> = ({selectedType, handleSelectedTypeChange}) => {

    return <MainStatsSelectList>
        <MainStatsSelectItem>
            <Radio id='Diagrams'
                   value='Diagrams'
                   onChange={handleSelectedTypeChange} label='Diagrams'
                   checked={selectedType === 'Diagrams'}/>
        </MainStatsSelectItem>
        <MainStatsSelectItem>
            <Radio id='Graph'
                   value='Graph'
                   onChange={handleSelectedTypeChange} label='Graph'
                   checked={selectedType === 'Graph'}/>
        </MainStatsSelectItem>
        <MainStatsSelectItem>
            <Radio id='Table'
                   value='Table'
                   onChange={handleSelectedTypeChange} label='Table'
                   checked={selectedType === 'Table'}/>
        </MainStatsSelectItem>
        <MainStatsSelectItem>
            <Radio id='Paragraph'
                   value='Paragraph'
                   onChange={handleSelectedTypeChange} label='Paragraph'
                   checked={selectedType === 'Paragraph'}/>
        </MainStatsSelectItem>
    </MainStatsSelectList>
}