import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDetialsComponent } from './profiles-detials.component';

describe('ProfilesDetialsComponent', () => {
  let component: ProfilesDetialsComponent;
  let fixture: ComponentFixture<ProfilesDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
