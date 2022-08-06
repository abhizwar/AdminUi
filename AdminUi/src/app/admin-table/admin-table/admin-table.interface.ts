export interface AdminData {
  id: number;
  name: string;
  role: string;
  email: string;
}

export interface AdminTableData {
  id: number;
  name: string;
  role: string;
  email: string;
  isEdit: boolean;
  isChecked: boolean;
}
