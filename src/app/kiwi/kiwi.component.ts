import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { GetConfig } from '../store/actions/config.actions';
import { selectConfig } from '../store/selectors/config.selector';
import { KiwiService } from './kiwi.service';



@Component({
    selector: 'app-kiwi',
    templateUrl: './kiwi.component.html',
    styleUrls: ['./kiwi.component.scss']
})

export class KiwiComponent implements OnInit {
    kiwiForm: FormGroup;
    buckets: FormArray;

    sample = {
        buckets: [
            { bcName: 'Dave', bcPrice: '150', bcTag: 'DDWA' },
            { bcName: 'Renegrade', bcPrice: '450', bcTag: 'RNAG' }
        ],

        dudeName: 'Gaius Mathew',
        dudeEmail: 'gaiusmatheww@gmail.com'
    };

    title = 'Kiwi Redux Store';
    config = this.store.pipe(select(selectConfig));

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<IAppState>,
        private kiwiService: KiwiService
    ) { }

    ngOnInit() {
        this.kiwiForm = this.formBuilder.group({
            dudeName: '',
            dudeEmail: '',
            buckets: this.formBuilder.array([this.createBuckets()])
        });

        // dispatch from store
        this.store.dispatch(new GetConfig());
    }

    // create buckets form array
    createBuckets(): FormGroup {
        return this.formBuilder.group({
            bcName: '',
            bcPrice: '',
            bcTag: ''
        });
    }

    // append values to bucket dynamically
    addValuesToBucket(bucket) {
        return this.formBuilder.group({
            bcName: bucket.bcName,
            bcPrice: bucket.bcPrice,
            bcTag: bucket.bcTag
        });
    }

    // add new buckets dynamically
    addBucket() {
        this.buckets = this.kiwiForm.get('buckets') as FormArray;
        this.buckets.push(this.createBuckets());
    }


    // remove form bucket
    removeBucket(i) {
        if (this.buckets && this.buckets.length > 1) {
            this.buckets.removeAt(i);
        } else if (i !== 0) {
            this.buckets.removeAt(i);
        } else {
            console.log('Could not remove last bucket');
        }
    }

    // submit buckets
    createKiwiBuckets() {
        console.log('Kiwi form values', this.kiwiForm.value);
    }

    // append sample values to a form array
    appendToKiwi() {
        const bcControl = this.kiwiForm.get('buckets') as FormArray;

        this.sample.buckets.map((bc): any => {
            bcControl.push(this.addValuesToBucket(bc));
        });
    }

    getUser() {
        this.kiwiService.getUsers().subscribe(gUsers => {
            console.log('Get Users =>', gUsers);
        });
    }

    fetchUser() {
        this.kiwiService.fetchUsers().subscribe(fUsers => {
            console.log('Get Users =>', fUsers);
        });
    }

}
