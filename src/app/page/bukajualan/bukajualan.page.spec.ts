import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BukajualanPage } from './bukajualan.page';

describe('BukajualanPage', () => {
  let component: BukajualanPage;
  let fixture: ComponentFixture<BukajualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukajualanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BukajualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
