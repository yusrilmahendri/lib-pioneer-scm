import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSaya } from './profile-saya';

describe('ProfileSaya', () => {
  let component: ProfileSaya;
  let fixture: ComponentFixture<ProfileSaya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSaya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSaya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
