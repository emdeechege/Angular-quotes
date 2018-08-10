export class Quote {

public showQuote: boolean;

  constructor(
    public id: number,
    public author: string,
    public quote: string,
    public addedDate: Date)
    {
        this.showQuote = false
      }
}
