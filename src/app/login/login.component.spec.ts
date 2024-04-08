// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { Router } from '@angular/router';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let routerMock: any;

//   beforeEach(async () => {
//     routerMock = jasmine.createSpyObj('Router', ['navigate']);

//     await TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       providers: [{ provide: Router, useValue: routerMock }],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the LoginComponent', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to register page when Register is called', () => {
//     component.Register();
//     expect(routerMock.navigate).toHaveBeenCalledWith(['register']);
//   });

//   it('should navigate to forgotpassword page when forgotpassword is called', () => {
//     component.forgotpassword();
//     expect(routerMock.navigate).toHaveBeenCalledWith(['forgotpassword']);
//   });
// });
