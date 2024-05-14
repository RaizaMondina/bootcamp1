interface PromiseMessage {
    message: string
}

const loadingPromise = new Promise<PromiseMessage>(async (resolve, reject) => {
    //read file
    let loadingPercentage = 0
    const load = () => {
        loadingPercentage += 10;
        console.log(`${loadingPercentage} %`)
        if (loadingPercentage >= 100) {
            resolve({
                message: "done"
            });
        } else {
            setTimeout(load, 1000);
        }
    }
    load()
})

const handlePromise = (res: PromiseMessage)=> {
    console.log("REsult:" , res.message)
}
loadingPromise.then(handlePromise)