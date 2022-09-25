import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OSenhorDosAneisPage } from './o-senhor-dos-aneis.page';

describe('OSenhorDosAneisPage', () => {
  let component: OSenhorDosAneisPage;
  let fixture: ComponentFixture<OSenhorDosAneisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OSenhorDosAneisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OSenhorDosAneisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
