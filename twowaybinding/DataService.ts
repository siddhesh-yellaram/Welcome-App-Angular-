import { Injectable } from "@angular/core";
import { Observable, Observer, Subscriber } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    getData(): Number {
        let random = Math.random() * 100;
        return random;
    }

    getDataAsync() {
        let observable = new Observable((observer: Observer<Number>) => {
            let n1 = Math.random() * 100;
            let n2 = Math.random() * 100;
            observer.next(n1);
            observer.next(n2);
            observer.complete();
        });
        return observable;
    }

}