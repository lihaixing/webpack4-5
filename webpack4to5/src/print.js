import {square,a} from './math'
import {square2,a2} from './math2'

export default ()=> {
    console.log('I get called from print.js');
}
// hello world
console.log(square(3));
console.log(a);

console.log(square2(2));
console.log(a2);