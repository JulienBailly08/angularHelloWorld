import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { Driver } from '../models/Driver';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokemon = new Car("pikachu", "japon", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pokemon_%2831599837283%29.jpg/330px-Pokemon_%2831599837283%29.jpg", 0.5, 154);

  public addCar(item: Car) {
    this.dataCars.push(item);
  }

  private dataCars: Car[] = [
    this.pokemon,
    {
      name: "pagani huayra",
      pays: "italie",
      coverImage: "./assets/img/cars/pagani.jpg",
      power: 765,
      perf: 3.2,
    },
    {
      name: "koenigsegg agera rs",
      pays: "suède",
      coverImage: "./assets/img/cars/koenigsegg.jpg",
      power: 1383,
      perf: 2.6

    },
    {
      name: "zenvo tsr s",
      pays: "danemark",
      coverImage: "./assets/img/cars/zenvo.jpg",
      power: 1200,
      perf: 2.8
    },
    {
      name: "bugatti chiron",
      pays: "france",
      coverImage: "./assets/img/cars/bugatti.jpg",
      power: 1500,
      perf: 2.4
    },
    {
      name: "mercedes amg one",
      pays: "allemagne",
      coverImage: "./assets/img/cars/mercedes.jpg",
      power: 1000,
      perf: 2.2
    },
    {
      name: "ferrari sf90",
      pays: "italie",
      coverImage: "./assets/img/cars/ferrari.jpg",
      power: 1000,
      perf: 2.5
    }
  ];

  getAllCars() {
    return this.dataCars;
  };

  getAllDrivers() {
    return this.dataDrivers;
  };

  pilote2ouf = new Driver("juju","Drôme","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYbpsDKFGEuJMaIvK5pNNRSNbakxql3-HxQ&usqp=CAU","fun");
  
  public addDriver(item: Driver) {
    this.dataDrivers.push(item);
  }
  
  private dataDrivers: Driver[] = [
    this.pilote2ouf,
    {
      fullName: "ken block",
      pays: "usa",
      coverImage: "./assets/img/drivers/kenblock.jpg",
      category: "gymkhana",
      likeIts: -1
    },
    {
      fullName: "danica patrick",
      pays: "usa",
      coverImage: "./assets/img/drivers/danicapatrick.jpg",
      category: "nascar",
      likeIts: 0
    },
    {
      fullName: "sebastien loeb",
      pays: "france",
      coverImage: "./assets/img/drivers/Loeb.jpg",
      category: "rallye",
      likeIts: 1
    },
    {
      fullName: "molly taylor",
      pays: "australie",
      coverImage: "./assets/img/drivers/mollytaylor.jpg",
      category: "rallye",
      likeIts: -1
    },
    {
      fullName: "collin mcrae",
      pays: "écosse",
      coverImage: "./assets/img/drivers/colin.jpg",
      category: "rallye",
      likeIts: 0
    },
    {
      fullName: "shirley muldowney",
      pays: null,
      coverImage: "./assets/img/drivers/shirleymuldowney.jpg",
      category: "drag",
      likeIts: 0
    },
    {
      fullName: "michael schumacher",
      pays: "allemagne",
      coverImage: "./assets/img/drivers/schumacher.jpg",
      category: "formule 1",
      likeIts: 0
    },
    {
      fullName: "erica enders",
      pays: "usa",
      coverImage: "./assets/img/drivers/ericaenders.jpg",
      category: "drag",
      likeIts: 0
    },

  ];


  getNbBestDrivers(nb: number) {
    let dataDriversSlice = this.dataDrivers.slice(0, this.dataDrivers.length);

    dataDriversSlice.sort(function compare(a: { likeIts: number }, b: { likeIts: number }) {
      if (a.likeIts > b.likeIts) {
        return -1;
      }
      if (a.likeIts < b.likeIts) {
        return 1;
      }
      return 0;
    });

    return dataDriversSlice.slice(0, nb);
  };

  getNbPowerfullCars(nb: number) {
    let dataCarsSlice = this.dataCars.slice(0, this.dataCars.length);

    dataCarsSlice.sort(function compare(a: { power: number }, b: { power: number }) {
      if (a.power > b.power) {
        return -1;
      }
      if (a.power < b.power) {
        return 1;
      }
      return 0;
    });

    return dataCarsSlice.slice(0, nb);
  };

  constructor() { }
}
