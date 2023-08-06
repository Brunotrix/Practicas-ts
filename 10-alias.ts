(()=>{
    type UserID = string | number;
    let userid :UserID;

    //LITERAL TYPES
    type Sizes = "S"|"M"|"L"|"XL";
    let shirtSize : Sizes;
    shirtSize = "M";
    shirtSize = "L";
    shirtSize = "XL";

    function greeting(userid: UserID, size: Sizes){
        if (typeof userid === "string"){
            console.log
        }
    }
    greeting(11111, "S")


});