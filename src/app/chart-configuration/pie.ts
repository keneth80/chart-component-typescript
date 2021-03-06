export const PIE: any = {
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
             'seriesClass': 'PieSeries',
             'xField': 'profit',
             'yField': 'profit',
             'visible': true,
             'displayName': 'Profit',
             'displayKey': 'category',
             'label': {
               'visible': true,
               'side': 'out'
             }
         }
    ]
};
