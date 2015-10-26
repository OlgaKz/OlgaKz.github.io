function createSecretHolder(secret){
    return{
        getSecret: function(){
            return secret;
        },
        setSecret: function(newSecret){
        secret = newSecret;
        }
    }
}
var obj = createSecretHolder(5);
console.log(obj.getSecret()); // returns 5
console.log(obj.setSecret(2));
console.log(obj.getSecret()); // returns 2