import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TariksaldoPage } from './tariksaldo.page';

describe('TariksaldoPage', () => {
  let component: TariksaldoPage;
  let fixture: ComponentFixture<TariksaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariksaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TariksaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
