import {FC, useEffect, useRef, useState} from "react";
import {IGeneralSalesTime, ISalesFilter} from "@/types";
import {WrapperStyled} from "@/ui";
import {GeneralSalesSettingsWrapper, GeneralSalesStyled, GeneralSalesTitle} from "@/blocks";
import {GeneralSalesSettings, GeneralSalesTable} from "@/components";
import {ArrowDownGeneralSalesIcon, InfoGeneralSalesIcon, SettingsGeneralSalesIcon} from "@/assets";

interface GeneralSalesProps {
    data: IGeneralSalesTime[]
}

export const GeneralSales: FC<GeneralSalesProps> = ({data}) => {
    const settingsRef = useRef<HTMLDivElement>(null)
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState<ISalesFilter>({
        model: true,
        card_name: true,
        card_number: true,
        type: true,
        limited: true,
        operations: true,
        date: true,
        rating: true,
        status: true,
        price: true
    })

    useEffect(() => {
        const closeSettings = () => {
            if (!modal) {
                settingsRef.current?.classList.remove('active');
                setModal(false)
            }
        }
        window.addEventListener('click', closeSettings);

        return () => window.removeEventListener('click', closeSettings);
    }, [])

    const settingsHandler = () => {
        settingsRef.current?.classList.toggle('active');
        setModal(prev => !prev)
    }

    return <GeneralSalesStyled>
        <WrapperStyled display='flex' justifyContent='space-between'>
            <GeneralSalesTitle>
                General Sales / Time
                <InfoGeneralSalesIcon/>
            </GeneralSalesTitle>
            <GeneralSalesSettingsWrapper ref={settingsRef} onClick={e => e.stopPropagation()}>
                <SettingsGeneralSalesIcon/>
                Table settings
                <ArrowDownGeneralSalesIcon onClick={settingsHandler} className='arrow'/>
                {modal && <GeneralSalesSettings filter={filter} setFilter={setFilter}/>}
            </GeneralSalesSettingsWrapper>
        </WrapperStyled>

        <GeneralSalesTable data={data} filter={filter}/>
    </GeneralSalesStyled>
}