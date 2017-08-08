export interface SeriesConfiguration {
    condition: SeriesConditions;
    margin: any;
    type: any;
    target?: any;
    plugin?: any;
};

export interface SeriesConditions {
    xField: string;
    yField: string;
    displayName: string;
    displayKey?: string;
    visible: boolean;
    seriesLabel: {
        show: boolean
    };
    label?: {
        visible: boolean,
        side: string
    };
}

export interface AxisConfiguration {
    conditions: AxisConditions;
    target?: any;
    margin: any;
    width: number;
    height: number;
    domain?: Array<any>;
    data?: Array<any>;
    isStacked: boolean;
}

export interface AxisConditions {
    field: string;
    format: any;
    visible: boolean;
    gridline: boolean;
    title: string;
    type: string;
    orient: string;
    tickInfo?: any;
}
