import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {

  const auth = inject(AuthService);

  if(auth.getUser()) {
    console.log("Puede pasar");
    return true;
  }
  console.log("No puede pasar");
  
  return false;
};
