import { Component } from '@angular/core';
import { RoutingService } from '@core/routing/routing.service';

@Component({
    selector: 'app-home-page',
    styleUrls: ['./home-page.component.less'],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    constructor(private routingService: RoutingService) {}
    
    goToRoute(route: string) {
        this.routingService.toRoute([route]);
    }
}
