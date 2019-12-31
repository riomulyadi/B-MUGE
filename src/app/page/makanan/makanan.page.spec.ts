import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakananPage } from './makanan.page';

describe('MakananPage', () => {
  let component: MakananPage;
  let fixture: ComponentFixture<MakananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
