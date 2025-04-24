import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../../components/dashboard/menu/menu.component";

@Component({
  selector: 'dashboard-page-component',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent {}
