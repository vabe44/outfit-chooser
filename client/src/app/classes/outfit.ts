export class Outfit {
    id: number;
    name: string;
    shirt: {
        id: number,
        color: string,
        colorcode: string
    };
    pants: {
        id: number,
        color: string,
        colorcode: string
    }
    shoes: {
        id: number,
        color: string,
        colorcode: string
    };
}
