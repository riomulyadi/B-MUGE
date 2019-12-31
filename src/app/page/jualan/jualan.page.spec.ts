import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JualanPage } from './jualan.page';

describe('JualanPage', () => {
  let component: JualanPage;
  let fixture: ComponentFixture<JualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JualanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
