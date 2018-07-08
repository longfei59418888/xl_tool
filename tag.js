
const { exec } = require('child_process');
const argv = require('yargs').argv
let { m = "info",t } = argv

exec(`git tag -a "${t}" -m "${m}"`,(error,stdout)=>{
    if(error){
        console.error(`exec tag error: ${error}`)
        return
    }
    exec("git push origin --tags",(error)=>{
        if(error){
            console.error(`exec push tag error: ${error}`)
            return
        }
        console.log(`push tag: ${t}`)
    })
})