const redis = require('./redisConfiguration')
const { promisify } = require("util");
redis.set("key", {tete: 'hola'})


async function get (){
  let  result  = await redis.get("key")
  console.log(result)
  return result 
}


get()



