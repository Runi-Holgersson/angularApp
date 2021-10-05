import { ChangeBorderDirective } from './change-border.directive';

describe('ChangeBorderDirective', () => {
  it('should create an instance', () => {
    const elemRef = {
      nativeElement: {
        style:{
          borderColor: "",
        }
      }
    }
    const directive = new ChangeBorderDirective(elemRef);
    expect(directive).toBeTruthy();
  });

});
