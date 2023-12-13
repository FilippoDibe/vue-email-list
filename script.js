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
            this.mail= response.data.response.map(mailOgg => mailOgg.email);
            console.log(this);
        })
    }
}).mount('#app')