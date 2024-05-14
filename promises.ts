interface PromiseMessage {
    message: string
}

const myPromise = new Promise<PromiseMessage>(async (resolve, reject) => {
    //read file
    console.log("Doing my laundry")
    setTimeout(()=> {
        resolve({
            message: "done"
        });
    }, 5000);
})

const handlePromise = (res: PromiseMessage)=> {
    console.log("REsult:" , res.message)
}
myPromise.then(handlePromise)