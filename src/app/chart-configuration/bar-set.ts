export const BAR_SET: any = {
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
            'type': 'x',
            'field': 'profit,revenue,ratio',
            'format': null,
            'orient': 'bottom',
            'visible': true,
            'gridline': true,
            'title': 'Profit',
            'tickInfo': {
                'ticks': 5
            }
        },
        {
            'axisClass': 'CategoryAxis',
            'type': 'y',
            'field': 'category',
            'format': null,
            'orient': 'left',
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
             'seriesClass': 'BarSet',
             'visible': true,
             'type': 'group',
             'series': [
                 {
                     'seriesClass': 'BarSeries',
                     'xField': 'profit',
                     'yField': 'category',
                     'visible': true,
                     'displayName': 'Profit'
                 },
                 {
                     'seriesClass': 'BarSeries',
                     'xField': 'revenue',
                     'yField': 'category',
                     'visible': true,
                     'displayName': 'Revenue'
                 },
                 {
                     'seriesClass': 'BarSeries',
                     'xField': 'ratio',
                     'yField': 'category',
                     'visible': true,
                     'displayName': 'Ratio'
                 }
             ]
         }
    ]
};
