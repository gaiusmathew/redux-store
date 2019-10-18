import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiwiModule } from './kiwi/kiwi.module';


const routes: Routes = [{
    path: 'kiwi',
    loadChildren: './kiwi/kiwi.module#KiwiModule'
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        KiwiModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
