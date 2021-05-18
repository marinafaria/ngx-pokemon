import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';

import { PokedexService } from './pokedex.service';

jest.mock('../../../../__mocks__/pokedexTestService.ts');

describe('PokedexService', () => {
  let service: PokedexService;
  let renderResult: RenderResult<PokedexService>;

  beforeEach( async () =>  {
    renderResult = await render(PokedexService, {

    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
