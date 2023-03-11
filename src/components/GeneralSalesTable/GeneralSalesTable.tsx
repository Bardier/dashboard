import {FC} from "react";
import {
    GeneralSalesTableImage,
    GeneralSalesTableBody,
    GeneralSalesTableHead,
    GeneralSalesTableStyled,
    GeneralSalesTableTd,
    GeneralSalesTableTh,
    GeneralSalesTableTr,
    GeneralSalesTableSpan
} from "@/components";
import {IGeneralSalesTime, ISalesFilter} from "@/types";
import {WrapperStyled} from "@/ui";
import {ActionMenuGeneralSalesIcon} from "@/assets";
import cardImgDefault from '@/assets/icons/generalSales/card-default-img.png'

interface GeneralSalesTableProps {
    data: IGeneralSalesTime[]
    filter: ISalesFilter
}

export const GeneralSalesTable: FC<GeneralSalesTableProps> = ({data, filter}) => {

    function formatDate(dateStr: string): string {
        const date = new Date(dateStr.split('-').reverse().join('.'));
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    return <GeneralSalesTableStyled>
        <GeneralSalesTableHead>
            <GeneralSalesTableTr>
                {filter.model && <GeneralSalesTableTh>Card model</GeneralSalesTableTh>}
                {filter.card_name && <GeneralSalesTableTh>Card name</GeneralSalesTableTh>}
                {filter.type && <GeneralSalesTableTh>Type</GeneralSalesTableTh>}
                {filter.limited && <GeneralSalesTableTh textAlign='center'>Limited</GeneralSalesTableTh>}
                {filter.operations && <GeneralSalesTableTh textAlign='center'>№ Operations</GeneralSalesTableTh>}
                {filter.date && <GeneralSalesTableTh>Date of lost operations</GeneralSalesTableTh>}
                {filter.rating && <GeneralSalesTableTh>Rating</GeneralSalesTableTh>}
                {filter.status && <GeneralSalesTableTh>Status</GeneralSalesTableTh>}
                {filter.price && <GeneralSalesTableTh>Price</GeneralSalesTableTh>}
                <GeneralSalesTableTh textAlign='right' padding='0 50px 0 0'>Options</GeneralSalesTableTh>
            </GeneralSalesTableTr>
        </GeneralSalesTableHead>

        <GeneralSalesTableBody>
            {data.map((card, i) => (<GeneralSalesTableTr key={i}>
                {filter.model && <GeneralSalesTableTd>
                    <WrapperStyled display='flex' gap='16px' maxWidth='160px'>
                        <GeneralSalesTableImage src={card.model.image || cardImgDefault} alt={card.model.name}/>
                        {card.model.name}
                    </WrapperStyled>
                </GeneralSalesTableTd>}
                {filter.card_name && <GeneralSalesTableTd>
                    {card.card_name}
                    <GeneralSalesTableSpan>Card {card.card_number}</GeneralSalesTableSpan>
                </GeneralSalesTableTd>}
                {filter.type && <GeneralSalesTableTd>{card.type}</GeneralSalesTableTd>}
                {filter.limited && <GeneralSalesTableTd textAlign='center'>{card.limited}</GeneralSalesTableTd>}
                {filter.operations && <GeneralSalesTableTd textAlign='center'>{card.operations}</GeneralSalesTableTd>}
                {filter.date && <GeneralSalesTableTd>{formatDate(card.date)}</GeneralSalesTableTd>}
                {filter.rating && <GeneralSalesTableTd>{card.rating}%</GeneralSalesTableTd>}
                {filter.status && <GeneralSalesTableTd>{card.status}</GeneralSalesTableTd>}
                {filter.price && <GeneralSalesTableTd>{card.price}</GeneralSalesTableTd>}
                <GeneralSalesTableTd textAlign='right'
                                     padding='0 60px 0 0'><ActionMenuGeneralSalesIcon/></GeneralSalesTableTd>
            </GeneralSalesTableTr>))}
        </GeneralSalesTableBody>
    </GeneralSalesTableStyled>
}