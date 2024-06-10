export class Users {
    id: string | null;
    name: string;
    lastName: string;
    address: string;
    email: string;
    password: string;
    isAdmin: boolean;
  
    /**
     *
     */
    constructor(
      id: string | null,
      name: string,
      lastName: string,
      address: string,
      email: string,
      password: string,
      isAdmin: boolean,

    ) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.address = address;
      this.email = email;
      this.password = password;
      this.isAdmin = isAdmin;

    }
  }
  