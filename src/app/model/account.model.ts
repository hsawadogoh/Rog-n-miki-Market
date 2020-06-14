
export class Account {
  constructor(
    public id?: number,
    public activated?: boolean,
    public authorities?: string[],
    public notes?: any[],
    public panniers?: any[],
    public email?: string,
    public firstName?: string,
    public langKey?: string,
    public lastName?: string,
    public telephone?: string,
    public typeCompte?: string,
    public login?: string,
    public imageUrl?: string
  ) {}
}
