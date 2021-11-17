const app = new Vue  ({
   el: '#app',

   data:{
      user: {
         nome: 'Gaia',
         avatar: '_io',
         visibile: true
      },

      contacts: [
         {
            nome: 'Michele',
            avatar: '_1',
            visibile: true,
            messages: [
               {
                  date: '10/01/2020 15:30:55',
                  text: 'tutto ok?',
                  status: 'ricevuto'
               },
               {
                  date: '10/01/2020 15:50:00',
                  text: 'cosa fai?',
                  status: 'ricevuto'
               },
               {
                  date: '10/01/2020 16:15:22',
                  text: 'scrivo codice',
                  status: 'inviato'
               }
            ]
         },

         {
            nome: 'Mauro',
            avatar: '_2',
            visibile: true,
            messages: [
               {
                  date: '28/03/2020 10:10:40',
                  text: 'la Marianna va in campagna',
                  status: 'ricevuto'
               },
               {
                  date: '28/03/2020 10:20:10',
                  text: 'scusa?',
                  status: 'inviato'
               },
               {
                  date: '28/03/2020 16:15:22',
                  text: 'scusa ho sbagliato chat!',
                  status: 'ricevuto'
               }
            ]
         },

         {
            nome: 'Giacomo',
            avatar: '_3',
            visibile: true,
            messages: [
               {
                  date: '28/03/2020 10:10:40',
                  text: 'domani ci vediamo?',
                  status: 'inviato'
               },
               {
                  date: '28/03/2020 10:20:10',
                  text: 'non possooooo',
                  status: 'ricevuto'
               },
               {
                  date: '28/03/2020 16:15:22',
                  text: 'ho già un impegno',
                  status: 'ricevuto'
               }
            ]
         },

         {
            nome: 'Mario',
            avatar: '_4',
            visibile: true,
            messages: [
               {
                  date: '10/01/2020 15:30:55',
                  text: 'andiamo al cinema domani?',
                  status: 'inviato'
               },
               {
                  date: '10/01/2020 15:50:00',
                  text: 'certooooo',
                  status: 'ricevuto'
               },
               {
                  date: '10/01/2020 16:50:00',
                  text: 'cosa andiamo a vedere?',
                  status: 'ricevuto'
               }
            ]
         },

         {
            nome: 'Paolo',
            avatar: '_5',
            visibile: true,
            messages: [
               {
                  date: '21/01/2020 17:50:00',
                  text: 'mangiamo la pizza stasera?',
                  status: 'ricevuto'
               },
               {
                  date: '21/01/2020 17:54:00',
                  text: 'ovvio che siiiiiiii',
                  status: 'inviato'
               }
            ]
         },

         {
            nome: 'Cecilia',
            avatar: '_6',
            visibile: true,
            messages: [
               {
                  date: '10/10/2020 09:11:10',
                  text: 'tutto ok?',
                  status: 'inviato'
               },
               {
                  date: '11/10/2020 09:30:10',
                  text: 'scusa ero in montagna e il cell non prendeva',
                  status: 'ricevuto'
               },
               {
                  date: '11/10/2020 09:31:10',
                  text: 'weekend bellissimo!',
                  status: 'ricevuto'
               }
            ]
         },

         {
            nome: 'Pietro',
            avatar: '_7',
            visibile: true,
            messages: [
               {
                  date: '31/10/2021 21:21:21',
                  text: 'state arrivando???',
                  status: 'inviato'
               },
               {
                  date: '31/10/2021 21:41:21',
                  text: 'la macchina non partiva!! arriviamo!',
                  status: 'ricevuto'
               }
            ]
         },

         {
            nome: 'Fabio',
            avatar: '_8',
            visibile: true,
            messages: [
               {
                  date: '25/12/2021 10:41:21',
                  text: 'auguriiiii',
                  status: 'inviato'
               },
               {
                  date: '25/12/2021 10:56:00',
                  text: 'grazie! anche a voi!!',
                  status: 'ricevuto'
               },
               {
                  date: '25/12/2021 11:41:00',
                  text: 'stiamo facendo il pupazzo di neve!!',
                  status: 'inviato'
               },
               {
                  date: '25/12/2021 12:11:00',
                  text: 'che fortunati che avete la neve!!',
                  status: 'ricevuto'
               },
               {
                  date: '25/12/2021 11:41:00',
                  text: 'qui non nevicherà mai',
                  status: 'ricevuto'
               },
               {
                  date: '25/12/2021 11:41:00',
                  text: 'potete venirci a trovare!!',
                  status: 'inviato'
               },
               {
                  date: '25/12/2021 11:41:00',
                  text: 'la casa è piccola ma in qualche modo si farà',
                  status: 'inviato'
               },
               {
                  date: '25/12/2021 11:41:00',
                  text: 'abbiamo sempre posto per amici mici',
                  status: 'inviato'
               },
               {
                  date: '25/12/2021 11:41:00',
                  text: 'dici davvero???',
                  status: 'ricevuto'
               },
               {
                  date: '25/12/2021 11:41:00',
                  text: 'ne parliamo un attimo tra poco e poi ti so dire, grazieeeeeee',
                  status: 'ricevuto'
               }
            ]
         }

      ],

      activeIndex: 0,

      nuovoTesto: '',

      inputValue: ''

   },

   methods:{
      getLastMsg(index){
         let lastMsg = this.contacts[index].messages[this.contacts[index].messages.length -1].text;
         if(lastMsg.length > 10){
            lastMsg = lastMsg.slice(0, 10)+"...";
         }
         return lastMsg;
      },

      getLastDate(index){
         let lastDate = this.contacts[index].messages[this.contacts[index].messages.length -1].date;
         return lastDate;
      },

      getTimeNow(){
         const d = new Date();
         const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

         return time;
      },

      getDateNow(){
         const dateObj = new Date();
         const month = dateObj.getUTCMonth() + 1;
         const day = dateObj.getUTCDate();
         const year = dateObj.getUTCFullYear();

         return newdate = day + "/" + month + "/" + year;
      },

      inserisciMessaggio(){
         //devo inserire la stringa di testo nell'array messages che a sua volta fa parte dell'array contacts
         //prima creo nuovo oggetto
         const newMsg = {
            date: this.getDateNow() + " " + this.getTimeNow(),
            text: this.nuovoTesto,
            status: 'inviato'
         }
         console.log('nuovo messaggio', newMsg);
         this.contacts[this.activeIndex].messages.push(newMsg);

         this.nuovoTesto = '';

         //dopo 1 secondo ricevo messaggio di risposta:
         setTimeout(() => {

            const answerMsg = {
               date: this.getDateNow() + " " + this.getTimeNow(),
               text: 'va bene!!',
               status: 'ricevuto'
            }

            this.contacts[this.activeIndex].messages.push(answerMsg);
         }, 1000);
      },

      typeLetter(){
         console.log('stai scrivendo');
         /**
          * devo controllare che le lettere che scrivo siano contenute o meno trai i nomi dei contatti
          * faccio ciclo su contacts
          * se contact.name non contiene le lettere non lo devo far vedere (visibile è false)
          * quando l'input torna vuoto devo mettere tutti i contatti visibili
          */

         let inputValue = '';

         for (let contact of this.contacts){
            if(!contact.nome.toLowerCase().includes(this.inputValue.toLowerCase())){
               contact.visibile = false;
            }
            console.log('testo input', this.inputValue);

            if(this.inputValue === ''){
               contact.visibile = true;
            }
            
         }  
      },

      openMenu(){
         console.log('hai cliccato lo chevron');
         //quando clicco sull'icona menu-box deve diventare active
         // menu = document.querySelector('.menu-box');
         // menu.classList.add('active');

      }
      
      
   }


});