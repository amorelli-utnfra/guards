import { CanActivateFn } from '@angular/router';

export const miGuardGuard: CanActivateFn = (route, state) => {
  
  const role = route.data['role'];
  const user = "vendedor";

  return user === role;


};
