import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenulainPage } from './menulain.page';

describe('MenulainPage', () => {
  let component: MenulainPage;
  let fixture: ComponentFixture<MenulainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenulainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
