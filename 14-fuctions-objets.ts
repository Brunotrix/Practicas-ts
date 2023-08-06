(()=>{
    const login = (data: {email: string, password: number})=>{
        console.log(data.email, data.password)
    }
    // login("Vale.@", "12123122")
    login({
        email: "Dúran@hotmail",
        password : 1543321
    });

    type sizes = "S" | "M" | "L" | "XL";

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