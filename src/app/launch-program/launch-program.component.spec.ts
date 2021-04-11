import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LaunchProgramComponent } from './launch-program.component';

describe('LaunchProgramComponent', () => {
  let component: LaunchProgramComponent;
  let fixture: ComponentFixture<LaunchProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramComponent ],
      imports:[RouterTestingModule,HttpClientModule]
    })
    .compileComponents();
  }));


  describe(':', () => {
    function setup() {
      const fixture = TestBed.createComponent(LaunchProgramComponent);
      const app = fixture.debugElement.componentInstance;
      return { fixture, app };
    }

    it('should create the Launch Program Component', async(() => {
      const { app } = setup();
      expect(app).toBeTruthy();
    }));

    it('should have h2 tag as \'SpaceX Launch Programs\'', async(() => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const h2tag = compile.querySelector('h2');
      expect(h2tag.textContent).toBe('SpaceX Launch Programs');
    }));
  })
  
});
