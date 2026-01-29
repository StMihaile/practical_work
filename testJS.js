/*import {myName, one as oneNumber} from './modules.js'

const myArr = [1,2,3,4,5];
console.log( myArr.reduce((acc, curr) => acc+curr, 0))


const myNewArr = ['Hello ', 'my ', 'name ', 'is ', 'Mihaile']

console.log( myNewArr.reduce((accum, current) => accum + current));

myName();

console.log(oneNumber);*/

/*class NumbersArray extends Array {
    sum(){
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArr = new NumbersArray(1,3,5,7,9)
console.log(myArr);
console.log(myArr.sum());

console.log(NumbersArray.prototype === myArr.__proto__)*/

//const myPromis =  new Promise ((resolve, reject) => {})


    /*console.log('Hello');
    fetch('https://jsonplaceholder.org/users')
      .then(response => response.json()
      )

      .then(json => console.log(json))
   
      .catch(error => console.log(error.message))*/

      /*const getDate = (url) =>
        new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
        })

        getDate('https://jsonplaceholder.org/users')
        .then (data => console.log(data))
        .catch(error => console.log(error.message))*/

        /*const asyncfn = async () =>  {
          throw new Error('hello error')
        }

        asyncfn()
        .then(date => console.log(date))
        .catch (error => console.log(error.message))*/


    const timerPromise = () => 
        new Promise((resolve, reject) => {
            setTimeout(()=>resolve(), 2000)
        })


    const asyncfn = async() => {
        console.log('start timer')
        await timerPromise()
        console.log('finish timer');
    }

    asyncfn()