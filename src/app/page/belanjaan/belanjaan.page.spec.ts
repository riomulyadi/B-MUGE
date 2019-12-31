import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BelanjaanPage } from './belanjaan.page';

describe('BelanjaanPage', () => {
  let component: BelanjaanPage;
  let fixture: ComponentFixture<BelanjaanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelanjaanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BelanjaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
