import {Author} from "../common/interfaces/author.interface";
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function MinAuthorsAmountValidator(authorsList: Author[], requiredAmount: number): ValidatorFn {
  return (control: AbstractControl) :  ValidationErrors | null => {
 return (authorsList.length<requiredAmount) ? {lessThenRequired: true} : null
  }
}
