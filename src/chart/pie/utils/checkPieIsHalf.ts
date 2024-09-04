import SeriesData, { DefaultDataVisual } from '../../../data/SeriesData';
import PieSeriesModel from '../PieSeries';

interface IPieSourceData {
    emphasis?: {
        label?: {
            show?: boolean;
        }
    };
    itemStyle: {
        color: string;
        opacity?: number;
    };
    label?: {
        show: boolean;
    };
    name?: string;
    value: number;
}

export function checkPieIsHalf(data: SeriesData<PieSeriesModel, DefaultDataVisual>): boolean {
    const source = data?.getStore()?.getSource()?.data as Array<IPieSourceData>;
    if (!source?.length) {
return false;
}
    const last = source[source.length - 1];

    return !!(last?.itemStyle?.color === 'none'
        && last?.itemStyle?.opacity === undefined
        && last?.label?.show === false);

}