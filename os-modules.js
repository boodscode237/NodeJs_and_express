const os = require('os')


// infos about the current user
const user = os.userInfo()

console.log(user)


// Return the system uptime in seconds

console.log(`The system uptime is ${os.uptime()/60} minutes`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)

