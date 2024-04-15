import cron from 'cron'
import https from 'https'

const URL = "https://conversa-jt00.onrender.com"
const job = new cron.CronJob('*/14 * * * *', function(){
    https.get(URL, (res)=>{
        if(res.statusCode === 200){
            console.log("GET req sent kardi h CRON JOB se aur 200 OK wpis agya h ");

        }else{
            console.log("GET req failed with: ",res.statusCode);
        }
    }).on('error',(e)=>{
        console.error("erro while sending cron job periodic request: ",e);
    })
})

export default job;

