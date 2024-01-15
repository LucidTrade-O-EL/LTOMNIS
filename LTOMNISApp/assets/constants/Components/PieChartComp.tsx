// PieChartComp.js
import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import { View } from 'react-native';

const PieChartComp = () => {
    const data = [
        { key: 1, value: 50, svg: { fill: '#600080' }, label: 'Cats 50%' },
        { key: 2, value: 50, svg: { fill: '#9900cc' }, label: 'Dogs 50%' },
        // more data
    ];

    const Labels = ({ slices }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={labelCentroid[0]}
                    y={labelCentroid[1]}
                    fill={'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {data.label}
                </Text>
            );
        });
    };

    return (
        <View>
            <PieChart
                style={{ height: 200 }}
                data={data}
                valueAccessor={({ item }) => item.value}
                outerRadius={'95%'}
            >
                <Labels />
            </PieChart>
        </View>
    );
};

export default PieChartComp;
