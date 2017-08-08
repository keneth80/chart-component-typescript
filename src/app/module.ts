import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MiChartComponent } from './component/chart/mi-chart.component';
import { MiLegendComponent } from './component/legend/mi-legend.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        MiChartComponent,
        MiLegendComponent
    ],
    exports: [
        MiChartComponent,
        MiLegendComponent
    ]
})
export class MiChartModule { }
