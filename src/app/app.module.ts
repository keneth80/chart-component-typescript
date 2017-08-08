import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiChartComponent } from './component/chart/mi-chart.component';
import { MiLegendComponent } from './component/legend/mi-legend.component';
import { AppService } from './app.service';

// used to create fake backend
import { FakeBackendProvider } from './common/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        MiChartComponent,
        MiLegendComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        MiChartComponent,
        MiLegendComponent
    ],
    providers: [
        AppService,
        FakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
