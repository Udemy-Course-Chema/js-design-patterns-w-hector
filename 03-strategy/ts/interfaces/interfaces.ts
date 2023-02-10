export interface Strategy{
    login(user:string, password: string): boolean;
    
}