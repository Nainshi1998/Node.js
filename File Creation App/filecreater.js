
import readline from "readline";
import fs from "fs";
import { log } from "console";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation = () =>{
    rl.question(' Enter your filename: ', (filename) => {
        rl.question("Enter the content for your file: " , (content) =>{
            fs.writeFile(`${filename}.txt`, content, (err) =>{
                if (err) {
                    console.log(`Error writing the file`);  
                }else{
                    console.log(`File "${filename}.txt" created successfully! `);

                }
                rl.close()
            })
        })
    })
}

fileCreation();