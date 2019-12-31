import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AksesorisPage } from './aksesoris.page';

describe('AksesorisPage', () => {
  let component: AksesorisPage;
  let fixture: ComponentFixture<AksesorisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksesorisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AksesorisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
