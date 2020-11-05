export class Todo {
    constructor(
        public id: number,
        public name: string,
        public district: string,
        public city: string,
        public center: string,
        public date: string,
        public coupleTime: number,
        public aptTime: string,
        public street:string,
        public Hno:string

    ) { }
}

export class Calender {
    constructor(
        public id: number,
        public status: string,
        public percent :string
    ) { }
}
