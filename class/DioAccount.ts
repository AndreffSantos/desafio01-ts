export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => this.name

  getAccountNumber = (): number => this.accountNumber

  deposit = (value: number): void => {
    if (this.status) {
      this.balance += value
      console.log(`Voce depositou ${value}`)
    }
  }

  withdraw = (value: number): void => {
    if (this.status && this.balance >= value) {
      this.balance -= value
      console.log(`Voce sacou ${value}`)
    } else {
      console.log('Você não tem saldo suficiente')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }
}
