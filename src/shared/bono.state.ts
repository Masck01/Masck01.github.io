import { State, Action, StateContext, NgxsOnInit } from '@ngxs/store';
import { Bono } from '../app/models/bono';
import { BonoStateChange, BonoStart } from './bono.actions';
import { Injectable } from '@angular/core';
import { EstadoServiceService } from '../app/services/estado-service.service';
import { pluck } from 'rxjs/operators';
import { SubSink } from 'subsink';

@State<Bono>({
  name: 'bono',
  defaults: {
    estado: true,
  },
})
@Injectable()
export class BonoState implements NgxsOnInit {
  sub$ = new SubSink();
  constructor(private estadoService: EstadoServiceService) {}
  ngxsOnInit(ctx?: StateContext<any>) {
    const state = ctx.getState();
    chrome.storage.sync.get('estado', (keys: Bono) => {
      ctx.setState({
        ...state,
        estado: keys.estado ? keys.estado : false,
      });
    });
  }

  @Action(BonoStart)
  bonoStart({ getState }: StateContext<Bono>) {
    const state = getState();
    return state.estado;
  }

  @Action(BonoStateChange)
  bonoStateChange(ctx: StateContext<Bono>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      estado: !state.estado,
    });
    if (!state.estado) {
      this.estadoService.initSearch();
    } else {
      this.estadoService.stopSearch();
    }
  }
}
