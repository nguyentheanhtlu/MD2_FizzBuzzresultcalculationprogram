export class FizzBuzzTranslate {
    num : number;
    constructor(num : number) {
        this.num = num;
    }
    trasLate() : string | undefined{
        if ( this.num > 0){
            if (this.num % 5 == 0 && this.num % 3 == 0){
                return 'FizzBuzz'
            }else if( this.num % 3 == 0){
                return 'Fizz';
            }
            else if (this.num % 5 == 0){
                return 'Buzz';
            }
            else {
                return `${this.num}`
            }


        }else{
            return 'Enter number > 0'
        }
    }


}