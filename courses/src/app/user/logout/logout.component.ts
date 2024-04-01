import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  logout(): void {
    sessionStorage.removeItem('userDetails');
    Swal.fire('!המשתמש יצא בהצלחה')

  }

}
