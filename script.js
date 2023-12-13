const {createApp} = Vue

createApp({
    data(){
        return{
            mail : []
        }
    },
    methods : {

    },
    mounted(){
        axios.get('https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js')
        .then(response=>{
            this.mail.push(response.data.response.email);

            if (this.mail.lenght < 10){
                
            }
            
        })
    }
}).mount('#app')