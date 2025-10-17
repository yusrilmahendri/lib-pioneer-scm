import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterModule],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  isCollapsed:  boolean = true;

    toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
