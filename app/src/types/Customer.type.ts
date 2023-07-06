export interface ICustomer {
  id: number;
  name: string;
  email: string;
  kind: string;
  country: string;
}

// export const dummyCustomerList: ICustomer[] = [
//   {
//     id: 1,
//     name: "Clarisa Kemmer",
//     email: "kemmer_clarisa@example.org",
//     subscriber_email: undefined,
//     kind: "standard",
//     country: "USA",
//     password: "8a6e0804-2bd0-4672",
//     log_entries: 1,
//     orders: 1,
//     life_value: 100.2
//   }
// ]