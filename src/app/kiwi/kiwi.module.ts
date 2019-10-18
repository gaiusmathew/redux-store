import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiwiComponent } from './kiwi.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from '../store/reducers/app.reducers';
import { environment } from '../../environments/environment';
import { ConfigEffects } from '../store/effects/config.effects';
import { UserEffects } from '../store/effects/user.effects';
import { UserService } from '../services/user.service';
import { KiwiService } from './kiwi.service';

const routes: Routes = [{
    path: 'kiwi',
    component: KiwiComponent
}];

@NgModule({
    declarations: [KiwiComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([UserEffects, ConfigEffects]),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [UserService, KiwiService]
})
export class KiwiModule { }
