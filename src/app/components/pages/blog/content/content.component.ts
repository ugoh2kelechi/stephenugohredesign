import { Component } from '@angular/core';
import { BlogHelperService } from '../../../services/blog-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends BlogHelperService {
  
}
