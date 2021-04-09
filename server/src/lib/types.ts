import { Collection, ObjectId } from "mongodb";

export enum ListingType {
  Apartment = "APARTMENT",
  House = "HOUSE"
}

export interface BookingIndexMonth {
  [key: string]: boolean
}

export interface BookingIndexYear {
  [key: string]: BookingIndexMonth
}

export interface BookingsIndex {
  [key: string]: BookingIndexYear
}

export interface Listing {
  _id: ObjectId,
  title: string,
  description: string,
  image: string,
  host: string,
  type: ListingType,
  address: string,
  country: string,
  admin: string,
  city: string,
  bookings: ObjectId[],
  bookingsIndex: BookingsIndex,
  price: number,
  numOfGuests: number
}

export interface Booking {
  _id: ObjectId,
  listing: ObjectId,
  tenant: string,
  checkIn: string,
  checkOut: string
}

export interface User {
  _id: string,
  token: string,
  name: string,
  avatar: string,
  contact: string,
  walletId?: string,
  income: number,
  bookings: ObjectId[],
  listings: ObjectId[],

}

export interface Database {
  bookings: Collection<Booking>,
  listings: Collection<Listing>,
  users: Collection<User>
}



// ------------------
// >>>>>>>>>>>>>>>>>>>Exaple<<<<<<<<<<<<<<<<<<<<<<<<<
// interface IdentityObj<T = number> {
//   field: T;
// }

// const identity = <TData = number, TVariables = number>(arg: TData): TData => {
//   const obj: IdentityObj<TData> = {
//     field: arg,
//   };
//   return obj.field;
// };

// identity<number>(5);
// identity<string>("5");
