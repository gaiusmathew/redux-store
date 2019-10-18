import { Injectable } from '@angular/core';
import { selectUserList } from '../store/selectors/user.selector';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { GetConfig } from '../store/actions/config.actions';
import { selectConfig } from '../store/selectors/config.selector';
import { GetUsers } from '../store/actions/user.actions';

@Injectable({
    providedIn: 'root'
})
export class KiwiService {

    constructor(
        private store: Store<IAppState>
    ) { }

    getUsers() {
        return this.store.pipe(select(selectUserList));
    }

    fetchUsers(): any {
        return this.store.dispatch(new GetUsers());
    }
}
