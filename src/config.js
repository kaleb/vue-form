import {VueFormConfig, assign} from './util';
import {validators as DefaultValidators} from './validators';
import VueFormComponent from './components/vue-form';
import ValidateComponent from './components/validate';
import MessagesComponent from './components/messages';
import FieldComponent from './components/field';
import VueFormValidator from './directives/vue-form-validator';

const GLOBAL = (function(){return this;})();
const PromiseRef = typeof Promise === 'function' ? Promise : null;

export default function VueFormConfigMixin({
  formComponent='VueForm',
  formTag='form',
  messagesComponent='FieldMessages',
  messagesTag='div',
  validateComponent='Validate',
  fieldComponent='Field',
  fieldTag='div',
  Promise=PromiseRef,
  validators,
  formClasses: {
    dirty: formDirtyClass='vf-form-dirty',
    pristine: formPristineClass='vf-form-pristine',
    valid: formValidClass='vf-form-valid',
    invalid: formInvalidClass='vf-form-invalid',
    touched: formTouchedClass='vf-form-touched',
    untouched: formUntouchedClass='vf-form-untouched',
    submitted: formSubmittedClass='vf-form-submitted',
    pending: formPendingClass='vf-form-pending',
  }={},
  validateClasses: {
    dirty: validateDirtyClass='vf-field-dirty',
    pristine: validatePristineClass='vf-field-pristine',
    valid: validateValidClass='vf-field-valid',
    invalid: validateInvalidClass='vf-field-invalid',
    touched: validateTouchedClass='vf-field-touched',
    untouched: validateUntouchedClass='vf-field-untouched',
    pending: validatePendingClass='vf-field-pending',
  }={},
  inputClasses: {
    dirty: inputDirtyClass='vf-dirty',
    pristine: inputPristineClass='vf-pristine',
    valid: inputValidClass='vf-valid',
    invalid: inputInvalidClass='vf-invalid',
    touched: inputTouchedClass='vf-touched',
    untouched: inputUntouchedClass='vf-untouched',
    pending: inputPendingClass='vf-pending',
  }={},
}={}) {
  if (this == null || this === GLOBAL) {
    throw new TypeError('VueForm should be called as a constructor with the `new` keyword');
  }
  this.provide = {
    [VueFormConfig]: {
      formTag,
      messagesTag,
      fieldTag,
      validators: assign({}, DefaultValidators, validators),
      formClasses: {
        dirty: formDirtyClass,
        pristine: formPristineClass,
        valid: formValidClass,
        invalid: formInvalidClass,
        touched: formTouchedClass,
        untouched: formUntouchedClass,
        submitted: formSubmittedClass,
        pending: formPendingClass,
      },
      validateClasses: {
        dirty: validateDirtyClass,
        pristine: validatePristineClass,
        valid: validateValidClass,
        invalid: validateInvalidClass,
        touched: validateTouchedClass,
        untouched: validateUntouchedClass,
        pending: validatePendingClass,
      },
      inputClasses: {
        dirty: inputDirtyClass,
        pristine: inputPristineClass,
        valid: inputValidClass,
        invalid: inputInvalidClass,
        touched: inputTouchedClass,
        untouched: inputUntouchedClass,
        pending: inputPendingClass,
      },
    },
  };
  this.components = {
    [formComponent]: VueFormComponent,
    [messagesComponent]: MessagesComponent,
    [validateComponent]: ValidateComponent,
    [fieldComponent]: FieldComponent,
  };
  this.directives = {VueFormValidator};
}