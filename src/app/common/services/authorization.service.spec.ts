import {TestBed} from '@angular/core/testing';
import {AuthorizationService} from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationService);
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  })
  it('should set login in localstorage', () => {
    service.email = 'test@mail.com';
    service.password = '123';
    service.logIn();
    expect(localStorage.getItem('login')).toEqual('test@mail.com');
  })
});
