const app = new Vue  ({
   el: '#app',

   data:{
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

      activeIndex: 0

      

   },

   methods:{
      

      
   }


});