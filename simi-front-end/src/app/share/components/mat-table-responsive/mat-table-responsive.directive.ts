import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, mapTo, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[matTableResponsive]',
})
export class MatTableResponsiveDirective
  implements OnInit, AfterViewInit, OnDestroy
{
  private onDestroy$ = new Subject<boolean>();

  private thead!: HTMLTableSectionElement;
  private tbody!: HTMLTableSectionElement;

  private theadChanged$ = new BehaviorSubject(true);
  private tbodyChanged$ = new Subject<boolean>();

  private theadObserver = new MutationObserver(() =>
    this.theadChanged$.next(true)
  );
  private tbodyObserver = new MutationObserver(() =>
    this.tbodyChanged$.next(true)
  );

  constructor(private table: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      this.thead = this.table.nativeElement.querySelector('thead');
      this.tbody = this.table.nativeElement.querySelector('tbody');

      this.theadObserver.observe(this.thead, {
        characterData: true,
        subtree: true,
      });
      this.tbodyObserver.observe(this.tbody, { childList: true });

    }, 3000);
  }

  ngAfterViewInit() {
    /**
     * Set the "data-column-name" attribute for every body row cell, either on
     * thead row changes (e.g. language changes) or tbody rows changes (add, delete).
     */
    setTimeout(() => {
      combineLatest([this.theadChanged$, this.tbodyChanged$])
        .pipe(
          mapTo({
            headRow: Array.from(this.thead.rows)[0] as HTMLTableRowElement,
            bodyRows: Array.from(this.tbody.rows) as HTMLTableRowElement[],
          }),
          map(({ headRow, bodyRows }) => ({
            columnNames: Array.from(headRow.children).map(
              (headerCell) => headerCell.textContent!
            ),
            rows: bodyRows.map((row) => Array.from(row.children) as HTMLTableCellElement[]),
          })),
          takeUntil(this.onDestroy$)
        )
        .subscribe(({ columnNames, rows }) =>
          rows.forEach((rowCells) =>
            rowCells.forEach((cell) =>
              this.renderer.setAttribute(
                cell,
                'data-column-name',
                columnNames[cell.cellIndex]
              )
            )
          )
        );

    }, 3000);
  }

  ngOnDestroy(): void {
    this.theadObserver.disconnect();
    this.tbodyObserver.disconnect();

    this.onDestroy$.next(true);
  }
}
