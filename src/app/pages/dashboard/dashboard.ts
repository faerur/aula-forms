import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { DashboardUserTab } from '../../components/dashboard-user-tab/dashboard-user-tab'
import { DashboardPostTab } from '../../components/dashboard-post-tab/dashboard-post-tab';
@Component({
  imports: [MatTabsModule, DashboardUserTab, DashboardPostTab],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
