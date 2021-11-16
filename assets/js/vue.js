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
            nome: 'Sofia',
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
            nome: 'Cecilia',
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
            nome: 'Anna',
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
            nome: 'Giacomo',
            avatar: '_6',
            visibile: true,
            messages: [
               {
                  date: '21/01/2020 17:54:00',
                  text: 'tutto ok',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               }
            ]
         },

         {
            nome: 'Pietro',
            avatar: '_7',
            visibile: true,
            messages: [
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               }
            ]
         },

         {
            nome: 'Sveva',
            avatar: '_8',
            visibile: true,
            messages: [
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'tutto ok',
                  status: 'inviato'
               }
            ]
         }

      ],

      activeIndex: 0

      

   },

   methods:{
      

      
   }


});