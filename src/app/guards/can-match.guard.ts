import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const canMatchGuard: CanMatchFn = (route, segments) => {

  const auth = inject(AuthService);

  if(auth.getUser()) {
    console.log("puede pasar");
    return true
  }

  console.log("no puede pasar");
  return  false;
};
