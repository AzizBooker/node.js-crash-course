const url=require('url')

const myUrl=new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

//Serilized url
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (root domain) does include port number

console.log(myUrl.host)

//hostname  does not include port nunmber
console.log(myUrl.hostname)

//Pathname

console.log(myUrl.pathname);


//Serilzaed Query (parametrs)


//Params Object
console.log(myUrl.searchParams)

// Add Param

myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)

//Loop though Params

myUrl.searchParams.forEach((value,name)=>{
    console.log(`Value:${value} Name:${name}`)
})

