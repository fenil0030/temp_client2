import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Profiles } from 'src/app/models/profiles';
import { ProfilesService } from 'src/app/service/profiles.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent {
  profiles?: Profiles[];
  displayedColumns: string[] = ['firstName', 'email', 'contactNo', 'currentCtc', 'expectedCtc', 'noticePeriod', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchValue: string = '';
  sortOrder: string = '';
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public offset = this.pageSize * 0;
  pagValue: any;

  constructor(private _profilesService: ProfilesService) { }
  ngOnInit() {
    this.profilesList();
  }

  //get all profiles details
  profilesList() {
    this._profilesService.getAll().subscribe({
      next: (data : any) => {
        this.dataSource.data = data.result.data;
        // this.dataSource.paginator = this.pagValue;
        this.totalSize = data.result.totalRecords;
        // setTimeout(() => {
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        // }, 800);
        // this.profiles = data;
      }, error: (e) => alert(e.statusText)
    })
  }

  ngAfterViewInit() {

  }


  editJob(_args: any) {
    // if (_args && _args.id > 0) {
    //   this.router.navigate(['/jobs/' + _args.id])
    // }
  }
  deleteJob(_args: any) {
    // if (_args && _args.id > 0) {
    //   this.confirmService.confirm({ message: `` })
    //     .subscribe(res => {
    //       if (res) {
    //         this._jobService.deleteJob(_args.id)
    //           .pipe(takeUntil(this._unsubscribeAll))
    //           .subscribe((obj: any) => {
    //             if (obj && Boolean(obj.meta["status"])) {
    //               this.snack.open(obj.meta["message"], 'OK', {
    //                 duration: 4000,
    //                 horizontalPosition: 'center',
    //                 verticalPosition: 'bottom',
    //               });
    //               this.getJobList();
    //             }
    //             this._changeDetectorRef.markForCheck();
    //           }, (err: any) => {
    //             this._changeDetectorRef.markForCheck();
    //           });
    //       }
    //     });
    // }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  handlePage(e: any) {
    this.pagValue = e;
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.offset = (this.currentPage) * this.pageSize;
    this.profilesList();
  }

  sortColumn($event: Sort) {
    if ($event) {
      this.sortOrder = $event.direction !== '' ? $event.active + '_' + $event.direction : '';
      this.profilesList();
    }
  }

  onTxtSearch(searchedVal: string) {
    if (searchedVal && searchedVal.trim().length >= 3) {
      this.searchValue = searchedVal;
      this.profilesList();
    } else if (searchedVal.trim().length == 0) {
      this.searchValue = '';
      this.profilesList();
    }

  }
}
