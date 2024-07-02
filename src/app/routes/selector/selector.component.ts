import { Component } from '@angular/core';
import { ProjectSelectComponent } from '../../project/components/project-select/project-select.component';
import { BranchSelectComponent } from '../../branch/components/branch-select/branch-select.component';
import { ReleaseSelectComponent } from '../../release/components/release-select/release-select.component';
import { CommitSelectComponent } from '../../commit/components/commit-select/commit-select.component';
import { CommitTableComponent } from '../../commit/components/commit-table/commit-table.component';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [
    ProjectSelectComponent,
    BranchSelectComponent,
    ReleaseSelectComponent,
    CommitSelectComponent,
    CommitTableComponent,
  ],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {

}