import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahjualanPage } from './tambahjualan.page';

describe('TambahjualanPage', () => {
  let component: TambahjualanPage;
  let fixture: ComponentFixture<TambahjualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahjualanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahjualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
