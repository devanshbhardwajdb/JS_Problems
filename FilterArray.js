// Remove those objects from array which are not "male"

const arr = [
    { name: "dev", gender: "male" },
    { name: "rajeev", gender: "gay" },
    { name: "satyam", gender: "female" },
    { name: "tanushree", gender: "female" },
    { name: "harshita", gender: "female" },
]

const filtered = arr.filter((el) => el.gender === "male")

console.log(filtered)