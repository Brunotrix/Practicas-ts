(()=>{
    type sizes = "S" | "M" | "L" | "XL";
    function createProductToJson(
        title: string,
        createAT: Date, 
        stock: number,
        size: sizes,
        ){
            return{
                title,
                createAT,
                stock,
                size
            }
        }
        const producto1 = createProductToJson("P1", new Date(), 12, "XL")
        console.log(producto1.title);
        console.log(producto1.stock);

})();