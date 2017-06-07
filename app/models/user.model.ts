import { Injectable } from '@angular/core';

@Injectable()
export class UserModel {
    public firstname: string;
    public lastname: string;
    public email: string;
    public age: number;
    public language: string;
}