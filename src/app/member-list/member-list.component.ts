import {Component, EventEmitter, Input, Output} from '@angular/core';

import {faMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {

  @Input() members: Map<string, number>;
  @Output() remove = new EventEmitter<string>();

  faMinus = faMinus;

  removeMember(memberKey: string): void {
    this.remove.emit(memberKey);
  }

  returnZero(): number {
    return 0;
  }

  getIndex(key: string): number {
    return Array.from(this.members.keys()).indexOf(key);
  }
}
