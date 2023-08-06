(()=>{
    type sizes = "S" | "M" | "L" | "XL";
    type Product = {
        title: string,
        createAT: Date, 
        stock: number,
        size?: sizes,
    }
    const products: any[] = [];

    const addProduct = (data:{
        title: string,
        createAT: Date, 
        stock: number,
        size?: sizes,
    }) => {
        products.push(data);
    }
    addProduct({
        title: "PRO1",
        createAT: new Date(2008,1,3),
        stock: 12
    })
    console.log(products)
})();