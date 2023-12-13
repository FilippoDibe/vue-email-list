const { createApp } = Vue;

createApp({
    data() {
        return {
            mail: [""]
        };
    },
    methods: {
        genMail() {
            const singleEmailPromise = axios.get('https://flynn.boolean.careers/exercises/api/random/mail');
            
            singleEmailPromise
                .then(response => {
                    this.mail.push(response.data.response.email);

                    if (this.mail.length < 10) {
                        this.genMail();
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        allMails() {
            const emailRequests = Array.from({ length: 10 }, () => axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));

            AttendMail.all(emailRequests)
                .then(responses => {
                    this.mail = responses.map(response => response.data.response.email);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    },
    mounted() {
        this.genMail();
    }
}).mount('#app');
