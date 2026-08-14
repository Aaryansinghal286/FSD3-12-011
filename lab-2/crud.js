import readline from "readline/promises";
import {stdin, stdout} from "process";
import {readFile, writeFile} from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
};

const saveCart = async (myCart) => {
    await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addToCart = async (product) => {
    const myCart = await getCart();
    const isFound = myCart.find((item) => item.id === product.id);
    if (isFound) {
        isFound.qty += product.qty;
    } else {
        myCart.push(product);
    }
    await saveCart(myCart);
    console.log(`Product added/updated with id ${product.id} into cart`);
};

const showCart = async () => {
    const data = await getCart();
    console.table(data);
}

const main= async () => {
    let choice;
    const cin = readline.createInterface({input:stdin, output:stdout});
    do{
        console.log("Welcome to Flipkart🫩");
        console.log("1.............Show Cart");
        console.log("2.............Add Product");
        console.log("3.............Remove Product");
        console.log("4.............Update Product");
        console.log("5.............checkOut🛩️");
        choice = await cin.question("Enter your choice: ");
        switch(Number(choice)){
            case 1:
                console.log("Show Products");
                break;
            case 2:
                let data = await cin.question("Enter ID, name, price, qty: ");
                const [id, name, price, qty] = data.split(',').map((item) => item.trim());
                const product = {id: Number(id), name, price: Number(price), qty: Number(qty)};
                await addToCart(product);
                break;
            case 3:
                console.log("Remove Product");
                break;
            case 4:
                console.log("Update Product Quantity");
                break;
            case 5:
                console.log("Exit, See You Later🛩️");
                break;
            default:
                console.log("Invalid Choice, Please try again");
        }
    } while (choice != 5);
    cin.close();
};

main();

