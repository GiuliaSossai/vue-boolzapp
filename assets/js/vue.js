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
                  date: '15/11/2021',
                  text: 'tutto ok?',
                  status: 'ricevuto'
               },
               {
                  date: '15/11/2021',
                  text: 'cosa fai?',
                  status: 'ricevuto'
               },
               {
                  date: '15/11/2021',
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
                  date: '15/11/2021',
                  text: 'ho fatto la torta',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'vieni?',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'arrivo tra una oretta!',
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
                  date: '15/11/2021',
                  text: 'domani ci vediamo?',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'non possooooo',
                  status: 'ricevuto'
               },
               {
                  date: '15/11/2021',
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
                  date: '15/11/2021',
                  text: 'tutto ok?',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'cosa fai?',
                  status: 'inviato'
               },
               {
                  date: '15/11/2021',
                  text: 'scrivo codice',
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
            nome: 'Giacomo',
            avatar: '_6',
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