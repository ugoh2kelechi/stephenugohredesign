import { Component } from '@angular/core';
import { EventHelperService } from 'src/app/components/services/event-helper.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent extends EventHelperService {

}
