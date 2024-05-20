export class Vehicle {
_id: string;
make: string;
model: string;
kms: string;
photoUrl: string;

/**
 *
 */
constructor(
    id: string,
    make: string,
    model: string,
    kms: string,
    photoUrl: string,
) {
    this._id = id;
    this.make = make;
    this.model = model;
    this.kms = kms;
    this.photoUrl = photoUrl;
}





}
