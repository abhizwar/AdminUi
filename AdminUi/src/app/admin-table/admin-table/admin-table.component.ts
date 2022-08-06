import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  adminData: any = [];
  public current = 1;
  public items: any = [];
  public itemsToDisplay: any = [];
  originalData: any[] = [];
  public perPage = 10;
  public total = 0;

  constructor(private service: AdminServiceService) {}

  ngOnInit(): void {
    this.service.getAdminData().subscribe((res: any[]) => {
      this.adminData = res.map((element) => {
        return { ...element, isChecked: false, isEdit: false };
      });
      this.items = this.adminData;
      this.originalData = JSON.parse(JSON.stringify(this.items));
      this.itemsToDisplay = this.paginate(this.current, this.perPage);
      this.total = Math.ceil(this.items.length / this.perPage);
    });
  }

  /**
   * This method invokes when user clicks on any page in the pagination
   * @param page number
   */
  public onGoTo(page: number): void {
    this.current = page;
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  /**
   * This method invokes when user clicks on next page
   * @param page number
   */
  public onNext(page: number): void {
    this.current = page + 1;
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  /**
   * This method invokes when user clicks on previous page
   * @param page number
   */
  public onPrevious(page: number): void {
    this.current = page - 1;
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  /**
   * This method returns the array of data for the particular page
   * @param current number
   * @param perPage number
   * @returns string[]
   */
  public paginate(current: number, perPage: number): string[] {
    return [...this.items.slice((current - 1) * perPage).slice(0, perPage)];
  }

  /**
   * This method invokes when user selects/unselect the checkbox
   * @param isSelected boolean
   * @param index number
   */
  checkBoxSelected(isSelected: boolean, index: number) {
    this.items[index].isChecked = isSelected;
  }

  /**
   * This method invokes when user clicks on selectall checkbox
   * @param flag boolean
   */
  selectAll(flag: boolean) {
    this.items.map((element: any) => (element.isChecked = flag));
  }

  /**
   * This method delete whatever user has selected
   */
  deleteSelected() {
    this.items = this.items.filter((element: any) => {
      return element.isChecked === false;
    });
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  /**
   * Searches the data in the table and show it
   * @param dataToSearch string
   */
  searchAdmin(dataToSearch: string) {
    this.items = this.originalData.filter((element: any) => {
      return (
        element.role.includes(dataToSearch) ||
        element.email.includes(dataToSearch) ||
        element.name.includes(dataToSearch)
      );
    });
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  /**
   * It deletes the particular element
   * @param index number
   */
  deleteEntry(index: number) {
    this.items = this.items.filter((element: any, i: number) => {
      return i !== index;
    });
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  /**
   * discards the changes when user clicks on cancel
   * @param index number
   */
  discardChanges(index: number) {
    this.items[index].isEdit = false;
    this.items = [...this.originalData];
    this.itemsToDisplay = this.paginate(this.current, this.perPage);
  }

  /**
   * This method selects the value selected in the dropdown
   * @param data string
   * @param index number
   */
  dropDown(data: string, index: number) {
    this.items[index].role = data;
  }

  /**
   * This method saves the data
   * @param index number
   */
  saveData(index: number) {
    this.items[index].isEdit = false;
    this.originalData = JSON.parse(JSON.stringify(this.items));
  }
}
