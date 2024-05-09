import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  getLoan = (value: number): void => {
    this.deposit(value)
    console.log('Voce pegou um empréstimo')
  }
}
