import readline from "readline/promises";
import {stdin, stdout} from "process";
import {readFile, writeFile} from "fs/promises";

const main= async () => {
    let choice;
    const cin = readline.createInterface({input:stdin, output:stdout});
    do{
        console.log("Welcome to Flipkart🫩");
        console.log("1.............Show Cart");
        console.log("2.............Add Product");
        console.log("3.............Remove Product");
        console.log("4.............Update Product");
        console.log("5.............Exit🛩️");
        choice = await cin.question("Enter your choice: ");
        switch(choice){
            case "1":
                console.log("Show Products");
                break;
            case "2":
                console.log("Product added");
                break;
            case "3":
                console.log("Remove Product");
                break;
            case "4":
                console.log("Update Product Quantity");
                break;
            case "5":
                console.log("Exit, See You Later🛩️");
                break;
            default:
                console.log("Invalid Choice, Please try again");
        }
    } while (choice != 5);
    cin.close();
};

main();

