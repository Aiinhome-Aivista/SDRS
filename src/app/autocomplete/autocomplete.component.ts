import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { of, fromEvent, Observable } from 'rxjs'
import { debounceTime, map, distinctUntilChanged, switchMap, tap } from "rxjs/operators"

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('fileNameSearch') fileInputSearch: ElementRef 
  showsSearchesPanel: boolean = false
  isSearching: boolean = false
  ArrayData: any = []
  apiArrayData: any = []

  constructor() { 
    this.ArrayData = [
      'tohid',
      'tohid',
      'tohid',
      'tohid',
      'tohid',
      'tohid',
      'tohid',
      'tohid',
      'tohid',
      'tohid'
    ]
    this.apiArrayData = this.ArrayData
  }

  ngOnInit(): void {
    this.filesearch();
  }

  filesearch() {
    const search$ = fromEvent(this.fileInputSearch.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isSearching = true),
      switchMap((trem) => trem ? this.getFileName(trem) : of<any>(this.ArrayData)),
      tap(() => {
        this.isSearching = false;
        this.showsSearchesPanel = true;
      })
    )
    search$.subscribe(data => {
      this.isSearching = false;
      this.apiArrayData = data;
    })

  }
  getFileName(data: any): Observable<any> {
    return of(this.filterFileName(data))
  }
  filterFileName(data: any) {
    return this.ArrayData.filter((val: any) => val.name.toLowerCase().includes(data.toLowerCase()) == true)
  }
  setFileName(data: any) {
    this.apiArrayData = this.filterFileName({ data })
    this.fileInputSearch.nativeElement.value = data
    this.showsSearchesPanel = false;
  }

}
