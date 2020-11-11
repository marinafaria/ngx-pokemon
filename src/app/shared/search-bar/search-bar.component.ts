import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  form: FormGroup;
  destroy$ = new Subject();
  formSubscription: Subscription;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      searchInput: ''
    });
    this.handleForm();
  }

  handleForm(): void {
    this.form.controls.searchInput.valueChanges
    .pipe(
      takeUntil(this.destroy$),
      debounceTime(1000)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
