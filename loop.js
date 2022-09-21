

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   var count = 0;
   
   const getNumber = ()=>{

   return readline.question("Please put any number:",num => {
            if(num=="stop"){
                readline.close();
                console.log(count);
            }else{
                count+=parseInt(num);
                getNumber();
            }

    })
}

getNumber();