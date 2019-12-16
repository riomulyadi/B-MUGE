import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderanPage } from './orderan.page';

describe('OrderanPage', () => {
  let component: OrderanPage;
  let fixture: ComponentFixture<OrderanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
