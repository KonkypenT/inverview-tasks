// Задание:
// Есть сервис RxjsService, который может вернуть Observable[]
// Необходимо последовательно выполнять запросы из списка
// В случае ошибки не прерывать выполнение последующих запросов

// Дополнительно:
// Выполнять запроса параллельно

import { Component, OnInit, inject } from "@angular/core";
import { RxjsService } from "./services/rxjs.service";
import { catchError, concatMap, from, of } from "rxjs";

@Component({
    selector: 'app-rxjs',
    template: '',
    standalone: true,
    providers: [RxjsService]
})
export class RxjsComponent implements OnInit {
    private readonly rxjsService = inject(RxjsService);
 
    public ngOnInit(): void {
        from(this.rxjsService.getUpdaters())
        .pipe(concatMap((updater) => updater.pipe(catchError((error) => {
            return of(error)
        }))))
        .subscribe((res) => console.log(res))
    }
}