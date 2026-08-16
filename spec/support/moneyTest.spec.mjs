import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
    it('convert cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cents', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
})

// console.log('test suite: formatCurrency')

// console.log('convert cents into dollars');

// if(formatCurrency(2095) === '20.95'){
//     console.log('passed');
// }else{
//     console.log('failed')
// }

// console.log('works with zero');

// if(formatCurrency(0) === '0.00'){
//     console.log('passed');
// }else  {
//     console.log('failed');
// }

// console.log('rounds up to the nearest cent');

// if(formatCurrency(2000.5) === '20.01'){
//     console.log('passed');
    
// }else{
//     console.log('failed');
    
// }

// console.log('rounds up to nearest cents');

// if(formatCurrency(2000.4) === '20.00'){
//     console.log('passed');
    
// }else{
//     console.log('failed');
    
// }