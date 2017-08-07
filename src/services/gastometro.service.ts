import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

const URLSERVER = "https://minhacidade.top/api/v1/cidades/joao-pessoa";

@Injectable()
export class GastometroService {
  constructor(public http: Http) { }

  getGastometroPorArea(area: string) {
    return this.http.get(URLSERVER + "?area=" +area)
                    .map((res: Response) => res.json());
  }

  getGastometroPorAreaAno(area, ano: string) {
    return this.http.get(URLSERVER + "?area=" +area+"&ano="+ano)
                    .map((res: Response) => res.json());
  }
}
