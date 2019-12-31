import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaljualanPage } from './haljualan.page';

describe('HaljualanPage', () => {
  let component: HaljualanPage;
  let fixture: ComponentFixture<HaljualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaljualanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaljualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
