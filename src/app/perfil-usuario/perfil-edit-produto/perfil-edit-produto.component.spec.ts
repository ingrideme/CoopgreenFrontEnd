import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditProdutoComponent } from './perfil-edit-produto.component';

describe('PerfilEditProdutoComponent', () => {
  let component: PerfilEditProdutoComponent;
  let fixture: ComponentFixture<PerfilEditProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEditProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEditProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
