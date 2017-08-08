import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
    title = 'app works!';
    currentType: string;
    chartinfo: any;
    axis: any;
    series: any;
    plugin: any;
    legendinfo: any;
    data: Array<any>;
    chartTypeClick$: Subject<string> = new Subject();
    currentConfiguration: any;
    currentConfigurationString: string;
    responseStream: Observable<any>;

    constructor(
        // private mipchartS: MipChartService
        private chartService: AppService
    ) {
        this.chartTypeClick$.subscribe((type: string) => {
            console.log('click : ', type);
            this.currentType = type;
            this.chartService.getChartConfiguration(type)
                                .subscribe((res: any) => {
                                    console.log(res);
                                    this._setDefaultData();
                                    this._chartDrawSetting(res);
                                });
            ;
            // this.mipchartS.getChartConfiguration(type).then((res: any) => {
            //     console.log(res);
            //     this._setDefaultData();
            //     this._chartDrawSetting(res);
            // }).catch((err: any) => {
            //     console.log('Error : ', err);
            // });
        });
    }

    ngOnInit() {
        this.currentType = 'column';

        // default chart configuration setting

        this.chartinfo = {
            selector: '',
            uid: 'chart01_uid',
            size: {
                width: 800,
                height: 400
            },
            margin: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            },
            data: this.data
        };
        this.axis = [
            {
                axisClass: 'NumericAxis',
                type: 'y',
                field: 'profit,revenue,ratio',
                format: undefined,
                orient: 'left',
                visible: true,
                gridline: true,
                title: 'Profit',
                tickInfo : {
                    ticks: 5,
                    tickFormat: function(d: any) { return '$' + d3.format(',.0f')(d); }
                }
            },
            {
                axisClass: 'CategoryAxis',
                type: 'x',
                field: 'category',
                format: undefined,
                orient: 'bottom',
                visible: true,
                gridline: false,
                title: 'Category',
                tickInfo: {
                    rotate: false,
                    ticks: 5
                }
            },
            {
                axisClass: 'DateTimeAxis',
                type: 'x',
                field: 'date',
                format: undefined,
                orient: 'top',
                visible: true,
                gridline: false,
                title: 'date',
                tickInfo: {
                    ticks: 12
                }
            },
            {
                axisClass: 'NumericAxis',
                type: 'y',
                field: 'rate',
                format: undefined,
                orient: 'right',
                visible: true,
                gridline: false,
                title: 'Rate',
                tickInfo : {
                    ticks: 5,
                    tickFormat: function(d: any) { return d3.format(',.0f')(d) + '%'; }
                }
            }
        ];
        this.series = [
            {
                seriesClass: 'ColumnSeries',
                xField: 'category',
                yField: 'profit',
                visible: true,
                displayName: 'Profit'
            },
        ];

        this.plugin = [
            {
                pluginClass: 'DragBase',
                direction: 'horizontal'
            }
        ];

        this.legendinfo = {
            selector: '#div_02',
            orient: 'bottom',
            series: this.series
        };
    }

    rerun() {
        this._chartDrawSetting(JSON.parse(this.currentConfigurationString));
    }

    _setDefaultData() {
        this.data = [];
        for (let i = 0; i < 20; i++) {
            this.data.push( {  category: 'B' + i,
                date: new Date(2017, 0, i).getTime(),
                rate: Math.round( Math.random() * 10 ),
                ratio: Math.round( Math.random() * 110  ),
                revenue: Math.round( Math.random() * 120  ),
                profit: Math.round( Math.random() * 100  ) } );
        }
    }

    _chartDrawSetting(data: any) {
        this.currentConfiguration = data;
        this.currentConfigurationString = JSON.stringify(data, undefined, 4);
        this.chartinfo = this.currentConfiguration.chart;
        this.series = this.currentConfiguration.series;
        this.axis = this.currentConfiguration.axis;
        this.plugin = this.currentConfiguration.plugin;

        this.legendinfo = {
            selector: '#div_02',
            orient: 'bottom',
            series: this.series
        };
    }
}
