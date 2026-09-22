import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {Post} from '../../models/post';

@Component({
  imports: [MatTableModule],
  selector: 'app-dashboard-user-tab',
  styleUrl: './dashboard-user-tab.css',
  templateUrl: './dashboard-user-tab.html',
})
export class DashboardUserTab {
}
