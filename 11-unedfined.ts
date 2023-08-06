(()=>{
    let myNull : null = null;
    let myUndefind: undefined = undefined;
    
    let myNumber : number | null = null;
    myNumber = 12;
    
    let myString: string | undefined = undefined;
    myString = "ass"

    function hi(name:string | null){
        let hello = "Hola";
        if(name){
            hello += "name"
        } else{
            hello += "nobody"
        }
        console.log(hello)
    }
    hi("NICOLAS")
    hi(null)
});