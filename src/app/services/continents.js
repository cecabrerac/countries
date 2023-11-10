function unique(data,key){
return [
    ...new Map(
        data.map(x=>[key(x),x]).values()
    )
]
}

console.log(JSON.stringify(unique(users, it=>it.name)))