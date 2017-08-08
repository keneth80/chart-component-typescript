import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { COLUMN } from '../../chart-configuration/index';
import { COLUMN_SET } from '../../chart-configuration/index';
import { BAR } from '../../chart-configuration/index';
import { BAR_SET } from '../../chart-configuration/index';
import { PIE } from '../../chart-configuration/index';
import { PIE_SET } from '../../chart-configuration/index';
import { LINE } from '../../chart-configuration/index';

export function FakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    // configure fake backend
    const data: any = {
        'column': COLUMN,
        'column-set': COLUMN_SET,
        'bar': BAR,
        'bar-set': BAR_SET,
        'pie': PIE,
        'pie-set': PIE_SET,
        'line': LINE
    };
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
            console.log('connection subscribe => ', connection.request.url);
            if (connection.request.url.indexOf('/api/chart') > -1 && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                const params: any = JSON.parse(connection.request.getBody());
                const startidx: number = connection.request.url.lastIndexOf('/') + 1;
                const endidx: number = connection.request.url.length;
                const charttype: string = connection.request.url.substring(startidx, endidx);
                console.log('fake url : ', connection.request.url, charttype);

                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200, body: data[charttype] })
                ));
            }

        }, 500);

    });

    return new Http(backend, options);
}

export let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: FakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
