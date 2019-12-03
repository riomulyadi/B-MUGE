import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TokosayaPage } from './tokosaya.page';

describe('TokosayaPage', () => {
  let component: TokosayaPage;
  let fixture: ComponentFixture<TokosayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokosayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TokosayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
