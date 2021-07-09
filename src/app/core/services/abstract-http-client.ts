import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

export abstract class AbstractHttpClient {

    constructor() { }

    protected httpOptions = (): {} => ({ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });

    protected endpoint = (...resources: any[]): string => `${ environment.webServiceApi }/${ resources.join('/') }`;

}
