import {Dispatch, FC, SetStateAction} from "react";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {
    GeneralSalesSettingsStyled,
    GeneralSalesSettingsStyledCheckbox,
    GeneralSalesSettingsStyledLabel,
} from "@/components";
import {ISalesFilter} from "@/types";


interface GeneralSalesSettingsProps {
    filter: ISalesFilter,
    setFilter: Dispatch<SetStateAction<ISalesFilter>>
}

export const GeneralSalesSettings: FC<GeneralSalesSettingsProps> = ({filter, setFilter}) => {
    return (
        <GeneralSalesSettingsStyled>
            <Scrollbars style={{width: 300, height: 300}}>
                <GeneralSalesSettingsStyledLabel isChecked={filter.model}>
                    Card model
                    <GeneralSalesSettingsStyledCheckbox checked={filter.model}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            model: !prev.model
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.card_name}>
                    Card name
                    <GeneralSalesSettingsStyledCheckbox checked={filter.card_name}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            card_name: !prev.card_name
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.type}>
                    Type
                    <GeneralSalesSettingsStyledCheckbox checked={filter.type}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            type: !prev.type
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.limited}>
                    Limited
                    <GeneralSalesSettingsStyledCheckbox checked={filter.limited}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            limited: !prev.limited
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.operations}>
                    № Operations
                    <GeneralSalesSettingsStyledCheckbox checked={filter.operations}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            operations: !prev.operations
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.date}>
                    Date of lost operations
                    <GeneralSalesSettingsStyledCheckbox checked={filter.date}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            date: !prev.date
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.rating}>
                    Rating
                    <GeneralSalesSettingsStyledCheckbox checked={filter.rating}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            rating: !prev.rating
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.status}>
                    Status
                    <GeneralSalesSettingsStyledCheckbox checked={filter.status}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            status: !prev.status
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
                <GeneralSalesSettingsStyledLabel isChecked={filter.price}>
                    Price
                    <GeneralSalesSettingsStyledCheckbox checked={filter.price}
                                                        onChange={() => setFilter(prev => ({
                                                            ...prev,
                                                            price: !prev.price
                                                        }))}/>
                </GeneralSalesSettingsStyledLabel>
            </Scrollbars>
        </GeneralSalesSettingsStyled>
    )
};
