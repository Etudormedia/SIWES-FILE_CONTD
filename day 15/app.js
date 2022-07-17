// // // function multiply(x,y){
// // //     return  (x*y)
// // // }
// // // call stack
// // let multiply = (x,y) => x * y
// // let sqr = (x) => multiply(x)
// // // var minus = (x,y) => x-y
// // let isRightAngleTriangle = (x,y,z) => {
// //    return sqr(x) + sqr(y) == sqr(z)
// // }

// function tsk(){
//     console.log('na me go fess run ... ur mama')
//     sec();

// }
// function sec(){
//     console.log('oloribu u con put me for second')
// }

// tsk(sec);


//timer
// console.log ('fuck you');
// setTimeout(() =>{
//     console.log('you are a dick head');
// },10000)
// console.log('daniel is a chicken');

// var color = '#'

// for(let k = 0; k<6; k++){
//     color += letter[
//         (Math.floor(Math.random() * 16))
//     ]
// }
// return  color 
// }

// function bg(){
// var hex = getHex();
// document.getElementById('hex').innerHTML = hex;
// document.getElementsByTagName('body')[0].
// style.backgroundColor = hex; 
// }



// let delayedColorChange = (newColor, delay,doNext)=>{
//    setTimeout(()=>{
//      newColor='blue','red','purple'
//      for(i=0;i<3;i++){
//         return newColor
//      };
//      doNext(){
//         document.getElementsByTagName('body')[0].
//         style.backgroundColor = newColor; 
//      }
//      doNext = console.log(newColor)
//    }
//    ,2000
//    )
// }
// let delayedColorChange = (newColor, delay,doNext)=>{
       
//       newColor= function(){
//         delay= document.getElementsByTagName('body');
//          doNext = new Array(3)
//       }
//         function red(delay){
//             delay.style.backgroundColor = 'red','blue','purple' 
//          doNext[0] = setTimeout(function(){green (newColor);},1000)
    
//         clearTimeout(doNext[2]);
//        }}
    //   newColor= function(){
    //     delay= document.getElementsByTagName('body');
    //     var timer= new Array(3)
    //   }
    //     function red(delay){
    //         delay.style.backgroundColor = 'red'
    //      timers[0] = setTimeout(function(){green (newColor);},1000)
    
    //     clearTimeout(timer[2]);
    //    }}
    //   newColor= function(){
    //     delay= document.getElementsByTagName('body');
    //     var timer= new Array(3)
    //   }
    //     function red(delay){
    //         delay.style.backgroundColor = 'red'
    //      timers[0] = setTimeout(function(){green (newColor);},1000)
    
    //     clearTimeout(timer[2]);
    //    }}


let delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor  = newColor;
        doNext && doNext();
    }, 1000)
}
delayedColorChange('blue', 1000, () => {
    //document.body.style.background = newColor;
    delayedColorChange('grey', 1000, () =>{
        //document.style.backgroundColor = newColor;
        delayedColorChange('green', 1000, ()=>{
            //document.style.backgroundColor = newColor;
            delayedColorChange('pink', 1000, () =>{

            })
        })
    })
});
























