import { Component } from '@angular/core';
import { EventHelperService } from 'src/app/components/services/event-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends EventHelperService {


}
