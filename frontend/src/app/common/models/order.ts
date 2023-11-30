import { LatLng } from "leaflet";
import { CartItem } from "./cartItem";

export class Order {
  id!: number;
  items!: CartItem[];
  totalPrice!: number;
  name!: string;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
  addressLatLng?: LatLng;
}