import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BayarPage } from './bayar.page';

describe('BayarPage', () => {
  let component: BayarPage;
  let fixture: ComponentFixture<BayarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BayarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
