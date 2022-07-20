export interface Video {//define a data type
  createdAt?: string | Date;
  updatedAt?: string | Date;
  description: string;
  title: string;
  url: string;
  _id?: string;
}