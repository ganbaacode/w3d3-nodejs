const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   
   const question1 = ()=>{
        return new Promise((resolve, reject) => {
            readline.question('What is your name? ', name => {
            console.log(`Welcome ${name}`);
            resolve();
        });
        })
    }


    const question2 = ()=>{
        return new Promise((resolve, reject) => {
            readline.question('How old are you? ', age => {
                if(age<16){
                    console.log("you are not allowed to drive in IOWA");
                }else{
                    console.log("You’re allowed to get a drivers license in Iowa");
                }
                resolve();
            });
        })
    }   

    const main = async () => {
        await question1()
        await question2()
        readline.close()
    }

    main();