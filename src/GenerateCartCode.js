function generateCode(length=10){
    const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let result=""
    for (let i=0; i<length;i++){
        const random=Math.floor(Math.random()*character.length)
        result+=character[random]
    }
    return result;


}
 export const value=generateCode()

