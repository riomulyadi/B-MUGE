import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahsaldoPage } from './tambahsaldo.page';

describe('TambahsaldoPage', () => {
  let component: TambahsaldoPage;
  let fixture: ComponentFixture<TambahsaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahsaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahsaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
