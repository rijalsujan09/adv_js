{
    // callBack and Asyncronous

    console.log("Namestey Nepal")

    /*
    A callback is a function passed as an argument to another function
    This technique allows a function to call another function.
    A callback function  can run 
    */

    function myFirst(){
        console.log("I am first")
    }

    function mySecond(){
        console.log("I am Second")
    }

    function myThird(){
        console.log("I am Third")
    }

    myFirst();
    mySecond();
    myThird();


    const msg = function () {
        console.log("This message is a message!")
    }
    msg();
    setTimeout(msg, 3000)


let message;

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myH1").innerText = output;
}

function setMessage(text, callBack){
    message =text;
    callBack(message);
}

setMessage("Hi Mom..!", displayConsole);

}

//--------------------------------------------------------------------------------------------

{
    /* ------JavaScript Promise Object---------
    A JavaScript Promise object can  be,
    a promise is promise of code execution ,
    encapsulates the result of an asynchronous operation,
    1.pending
    2.Fulfilled
    3.Rejected
    */

    const promise = new Promise((resolve, reject) => {
        let fileLoaded  = true;
        if(fileLoaded){
            resolve("file loaded")
        }
        else{
            reject("file not lode")
        }
    });
    promise.then(value => console.log(value))
        .catch(error => console.error(error))



    const wait = new Promise(resolve => {
        setTimeout(resolve, 3000);
    });

    wait.then(() => console.log("Thanks for Waiting ..!"))

}