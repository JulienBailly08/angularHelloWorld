import { Injectable } from "@angular/core";


@Injectable()

export class BananeService {

    fruit:string="Banane Plantain - FROM API";
    prix:number=4;

    constructor(){}

    getFruit():string{
        return this.fruit;
    }
}