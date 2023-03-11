import {ChangeEvent, FC} from 'react';
import {RadioContainer, RadioInput, RadioLabel} from "@/components";


interface RadioProps {
    id: string;
    value: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
};

export const Radio: FC<RadioProps> = ({id, value, checked, onChange, label, ...props}) => {
    return (
        <RadioContainer>
            <RadioInput id={id} value={value} checked={checked} onChange={onChange} {...props} />
            <RadioLabel htmlFor={id} checked={checked}>
                {label}
            </RadioLabel>
        </RadioContainer>
    );
};

