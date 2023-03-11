import {FC} from "react";
import {PieChart, Pie, Cell} from 'recharts';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
];

const COLORS = ['#18A0FB', '#3CDC86', '#ED2D95',];

export const PieChartCustom: FC = () => {
    return <PieChart width={230} height={230}>
        <Pie
            data={data}
            cx={110}
            cy={110}
            innerRadius={95}
            outerRadius={115}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            cornerRadius={15}
            stroke="none"
        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
            ))}
        </Pie>
    </PieChart>
};