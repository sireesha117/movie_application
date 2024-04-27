import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('Token')) {
    return true;
  }

  return false;
};


