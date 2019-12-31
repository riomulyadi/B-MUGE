import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatejualanPage } from './updatejualan.page';

describe('UpdatejualanPage', () => {
  let component: UpdatejualanPage;
  let fixture: ComponentFixture<UpdatejualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatejualanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatejualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
