
export interface IBook {
    _id?: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    description: string;
    available: boolean;
}

export interface IBorrow {
    _id?: string;
    bookId: string;
    quantity: number;
    dueDate: Date;   
}