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
        .then(function (response){
            this.mail= response.data;
            console.log(this);
        })
    }
}).mount('#app')