
const { exec } = require('child_process');
const argv = require('yargs').argv
let { m = "info" } = argv

exec('git add .',(error)=>{
    if(error){
        console.error(`exec add error: ${error}`)
        return
    }
    console.log(`add`)
    exec(`git commit -m "${m}"`,(error)=>{
        if(error){
            console.error(`exec commit error: ${error}`)
            return
        }
        console.log(`commit "${m}"`)
        exec('git pull',(error,stdout)=>{
            if(error){
                console.error(`exec pull error: ${error}`)
                return
            }
            console.log(`pull`)
            exec('git push',(error,stdout)=>{
                if(error){
                    console.error(`exec push error: ${error}`)
                    return
                }
                console.log(`exec push success!`)
            })
        })
    })
})