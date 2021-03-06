export const COLUMN_SET: any = {
    'chart': {
        'selector': '#div_01',
        'uid': 'chart01_uid',
        'size': {
            'width': 800,
            'height': 400
        },
        'margin': {
            'left': 50,
            'right': 50,
            'top': 50,
            'bottom': 50
        },
        'data': null
    },
    'axis': [
        {
            'axisClass': 'NumericAxis',
            'type': 'y',
            'datatype': 'number',
            'field': 'profit,revenue,ratio',
            'format': null,
            'orient': 'left',
            'visible': true,
            'gridline': true,
            'title': 'Profit',
            'tickInfo': {
                'ticks': 5
            }
        },
        {
            'axisClass': 'CategoryAxis',
            'type': 'x',
            'datatype': 'string',
            'field': 'category',
            'format': null,
            'orient': 'bottom',
            'visible': true,
            'gridline': false,
            'title': 'Category',
            'tickInfo': {
                'rotate': false,
                'ticks': 5
            }
        },
        {
            'axisClass': 'DateTimeAxis',
            'type': 'x',
            'datatype': 'date',
            'field': 'date',
            'format': null,
            'orient': 'top',
            'visible': true,
            'gridline': false,
            'title': 'date',
            'tickInfo': {
                'ticks': 12
            }
        },
        {
            'axisClass': 'NumericAxis',
            'type': 'y',
            'datatype': 'number',
            'field': 'rate',
            'format': null,
            'orient': 'right',
            'visible': true,
            'gridline': false,
            'title': 'Rate',
            'tickInfo': {
                'ticks': 5
            }
        }
    ],
    'series': [
        {
            'seriesClass': 'ColumnSet',
            'visible': true,
            'type': 'group',
            'series': [
                {
                    'seriesClass': 'ColumnSeries',
                    'xField': 'category',
                    'yField': 'profit',
                    'visible': true,
                    'displayName': 'Profit'
                },
                {
                    'seriesClass': 'ColumnSeries',
                    'xField': 'category',
                    'yField': 'revenue',
                    'visible': true,
                    'displayName': 'Revenue'
                },
                {
                    'seriesClass': 'ColumnSeries',
                    'xField': 'category',
                    'yField': 'ratio',
                    'visible': true,
                    'displayName': 'Ratio'
                }
            ],
            'plugin': [
                {
                    'pluginClass': 'SeriesLabel',
                    'orient' : 'top',
                    'total': false
                }
            ]
        }
    ]
};
