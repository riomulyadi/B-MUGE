import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PakaianPage } from './pakaian.page';

describe('PakaianPage', () => {
  let component: PakaianPage;
  let fixture: ComponentFixture<PakaianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakaianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PakaianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
