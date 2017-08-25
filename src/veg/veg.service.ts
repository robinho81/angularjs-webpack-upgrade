import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VegService {
    constructor(private http: Http) {
        console.log("The veg service started");
    }
}