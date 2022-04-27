const Reader=require("./lib/Reader")

const explorers= Reader.readJsonFile("explorers.json")

console.log(explorers)