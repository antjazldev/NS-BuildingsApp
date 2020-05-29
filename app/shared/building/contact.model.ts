
export class Contact {
    name?: string;
    phone?: string;
    phone_home?: string;
    email?: string;

    constructor(name?: string,phone?:string,phone_home?:string,email?:string) {
        this.name = name;
        this.phone = phone;
        this.phone_home = phone_home;
        this.email = email;
    }
}