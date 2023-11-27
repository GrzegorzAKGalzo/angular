export interface Person {
    firstName? : string;
    lastName?: string;
    age?:number;
    address: {
        city? :string;
        street?: string;
        postCode?: string;
    }
}

