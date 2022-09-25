import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ACasaDoDragaoPage } from './a-casa-do-dragao.page';

describe('ACasaDoDragaoPage', () => {
  let component: ACasaDoDragaoPage;
  let fixture: ComponentFixture<ACasaDoDragaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ACasaDoDragaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ACasaDoDragaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
