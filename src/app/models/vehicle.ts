export class Vehicle {
  _id: string | null;
  make: string;
  model: string;
  kms: number;
  colour: string;
  featured: boolean;
  photoUrl: string;
  price: number;
  year: number;

  /**
   *
   */
  constructor(
    id: string,
    make: string,
    model: string,
    kms: number,
    colour: string,
    featured: boolean,
    photoUrl: string,
    price: number,
    year: number
  ) {
    this._id = id;
    this.make = make;
    this.model = model;
    this.kms = kms;
    this.colour = colour;
    this.featured = featured;
    this.photoUrl = photoUrl;
    this.price = price;
    this.year = year;
  }
}
