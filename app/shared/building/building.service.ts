import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from "../config";
import { Building } from './building.model';
import { Observable } from 'rxjs';

@Injectable()
export class BuildingsService {

  constructor(private httpService: HttpClient) { }

  getBuildings():Observable<Building> {
    return this.httpService.get(Config.apiBuildingsUrl);
  }

}