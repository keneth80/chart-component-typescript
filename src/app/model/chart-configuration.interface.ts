export module SeriesType {
    export class SeriesTypes {
        static COLUMN_SERIES = 'ColumnSeries';
        static COLUMN_SET = 'ColumnSet';
        static BAR_SERIES = 'BarSeries';
        static BAR_SET = 'BarSet';
        static PIE_SERIES = 'PieSeries';
        static PIE_SET = 'PieSet';
        static LINE_SERIES = 'LineSeries';
    }

    export class SetTypes {
        static STACKED_SET = 'stacked';
        static GROUP_SET = 'group';
    }

    export class SeriesLabelFormat {
        static BASE: Function = function(d: any) { return d; };
        static DOLLAR: Function = function(d: any) { return d + '$'; };
        static PERCENT: Function = function(d: any) { return d + '%'; };
    }
}

export module AxisType {
    export class AxisTypes {
        static NUMERIC_AXIS = 'NumericAxis';
        static DATETIME_AXIS = 'DateTimeAxis';
        static CATEGORY_AXIS = 'CategoryAxis';
    }

    export class AxisOrients {
        static TOP = 'top';
        static BOTTOM = 'bottom';
        static LEFT = 'left';
        static RIGHT = 'right';
    }
}

export module  PluginType {
    export class PluginTypes {
        static DRAG_BASE = 'DragBase';
    }

    export class PluginDirection {
        static HORIZONTAL = 'horizontal';
        static VERTICAL = 'vertival';
        static BOTH = 'both';
    }
}
