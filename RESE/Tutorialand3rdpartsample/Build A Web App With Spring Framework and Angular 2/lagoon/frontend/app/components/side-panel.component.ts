import {Component} from 'angular2/core';
import {PhotoRow} from './photo-row.component';

@Component ({
  selector: 'side-panel',
  directives: [PhotoRow],
  templateUrl: 'app/components/side-panel.component.html'
})
export class SidePanel {

}
