import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuksesPage } from './sukses.page';

describe('SuksesPage', () => {
  let component: SuksesPage;
  let fixture: ComponentFixture<SuksesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuksesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuksesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
