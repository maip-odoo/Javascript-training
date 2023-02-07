console.log("helllo")
const fetchPromiseData = () => {
    return new Promise((resolve, reject) => {
        setTimeout
    }
    );
};


let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("abc"); }, 3000);
      });

      myPromise.then(function(value) {
        console.log("working");
      });
 async function fun(){ 
 const f = await fetch("https://portal.tycoonstats.com/api/demo")
  console.log(await f.text())
 }
 fun();