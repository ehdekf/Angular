import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//component
import {FooterComponent} from './page/footer';
import {HeaderComponent} from './page/header';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {BoardComponent} from './page/board/board.component';

const appRoutes: Routes = [
    { path: 'dashboard', component:  DashboardComponent},
    { path: 'board', component:BoardComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        BoardComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            //{ enableTracing: true } // <-- debugging purposes only
        ),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
