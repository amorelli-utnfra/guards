import { CanDeactivateFn } from '@angular/router';
import { FormComponent } from '../components/form/form.component';

export const canDeactivateGuard: CanDeactivateFn<FormComponent> = (component, currentRoute, currentState, nextState) => {
  const invalid = component.form.invalid;

  if (invalid) {
    console.log("El formulario no esta completo");
    return false;
  } else {
  
    console.log("puede salir del componente");
    
    return true;
  }

};
