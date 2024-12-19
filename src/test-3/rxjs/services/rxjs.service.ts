import { Injectable } from "@angular/core";
import { Observable, delay, of, throwError } from "rxjs";

@Injectable()
export class RxjsService {
    public getUpdaters(): Observable<string>[] {
        return [
            this.updater1('store1', 'data1'), 
            this.updater2('store2', 'data2'),
            this.updater3('store3', 'data3'),
            this.updater4('store4', 'data4'),
        ];
    }

    private updater1(storage: string, data: unknown): Observable<string> {
        return of('Обновление 1 завершено').pipe(delay(1000));
    }

    private updater2(storage: string, data: unknown): Observable<string> {
        return of('Обновление 2 завершено').pipe(delay(1000));
    };

    private updater3(storage: string, data: unknown): Observable<string> {
        return throwError(() => new Error('Ошибка в обновлении 3'));
    };

    private updater4(storage: string, data: unknown): Observable<string> {
        return of('Обновление 4 завершено').pipe(delay(1000));
    };
}