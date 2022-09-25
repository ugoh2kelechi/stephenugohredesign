import { Component } from '@angular/core';
import { HelperService } from 'src/app/components/services/helper.service';
import data from '../../../data/gallery.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent extends HelperService {
  public gallery = data;
}
