const keys = document.getElementsByClassName("key");
const dataKeyMappings: Array<[string, string]> = [
    ["A", "65"],
    ["S", "83"],
    ["D", "68"],
    ["70", "F"],
    ["71", "G"],
    ["72", "H"],
    ["74", "J"],
    ["75", "K"],
    ["76", "L"]
]
const dataKeyMap = new Map(dataKeyMappings);

for (let x = 0; x <= keys.length; x += 1) {
    const key = keys.item(x);
    document.addEventListener("keypress", (e) => {
        const dataKey = dataKeyMap.get(e.key.toUpperCase())
        console.log(dataKey)
    })
}