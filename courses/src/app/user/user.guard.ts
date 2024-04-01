import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
    const item = sessionStorage.getItem('userDetails');
    if(!item)
    return false;
     return true;

};
