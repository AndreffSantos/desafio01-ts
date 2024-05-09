import { DioAccount } from "./DioAccount";

export class BenefitAccount extends DioAccount {
    benefitDeposit = (value: number): void => {
        this.deposit(value + 10)
        console.log(`O valor: ${value + 10} foi depositado`)
    }
}