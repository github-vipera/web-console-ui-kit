import { Directive, Input, HostListener, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';

@Directive({
  selector: '[afterValueChanged]'
})
export class WCAfterValueChangedDirective implements OnInit, OnDestroy {
  @Output()
  public afterValueChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public valueChangeDelay = 300;

  private stream: Subject<any> = new Subject<any>();
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.subscription = this.stream
      .pipe(debounceTime(this.valueChangeDelay))
      .subscribe((value: any) => this.afterValueChanged.next(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('input', [ '$event' ])
  public onValueChange(value: any): void {
    this.stream.next(value);
  }
}