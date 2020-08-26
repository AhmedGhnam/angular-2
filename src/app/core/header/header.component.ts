import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe();
  }

  onFetchData() {
    this.dataStorageService.getRecipes();

  }

  onLogOut() {
    this.authService.logOut();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
