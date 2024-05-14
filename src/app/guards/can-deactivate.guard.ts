import { CanDeactivateFn } from '@angular/router';
import { FormComponent } from '../components/form/form.component';

export const canDeactivateGuard: CanDeactivateFn<FormComponent> = (component, currentRoute, currentState, nextState) => {
  const hasUnsavedChanges = component.form.dirty;

  if (hasUnsavedChanges) {
    console.log("Tiene datos sin guardar");
    return false;
  } else {
    // No unsaved changes, allow navigation
    console.log("puede salir del componente");
    
    return true;
  }

};
