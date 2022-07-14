const faqs = [
  {
    question: 'The set time has passed, but the invoice has not yet arrived, what should I do?',
    answer: 'With cash accounting, bookkeeping is simple: You dont record any transactions until money actually changes hands, Accounting Tools says. With accrual accounting, you record transactions as soon as you earn or owe money. If an invoice arrives before, or after, the goods youve paid for, recording the transaction properly requires a couple of extra accounting steps.',
  },
  {
    question: 'Can I change my Netflix account email and password after purchase?',
    answer: 'To update your Netflix email and password, start by going to Netflix and logging in. Next, go to the main menu by clicking the downward-facing triangle in the upper-right corner. Select Account to access your account overview page. Then, go to the Membership & Billing section, where you will find the option to reset your email address and/or password.',
  },
  {
    question: 'Can I add a phone number for password recovery?',
    answer: 'To make sure you can get back into your Google Account if you ever can’t sign in, add recovery information.',
  },
  {
    question: 'How soon will I receive the account information I ordered?',
    answer: 'The order process typically takes 3-5 business days. Youll receive an email once your order status changes to “Shipped” or if further action ',
  },
  {
    question: 'How to pay?',
    answer: 'Payment options we currently have: PayPal, Bitcoin.',
  },
];

const info=[
  {
    name: 'Netflix',
    description:'Netflix can be accessed via web browsers or via application software installed on smart TVs, set-top boxes connected to televisions, tablet computers, smartphones.',
    img:'../assets/images/ntflx.png',
    animation: '../assets/images/ntflxAnimation.gif',
    subtitle:'Watch movies without limits at a bargain price',
    plans:[
      {
        name:'Basic',
        items:[
          'Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:45,
        newprice:80,
      },
      {
        name:'Standart',
        items:[
          'Standart Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:60,
        newprice:110,
      },
      {
        name:'Premium',
        items:[
          'Premium Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:80,
        newprice:150,//year price
      },
    ]
  },

  {
    name: 'YouTube Premium',
    description:'The service provides ad-free access to content across the service, as well as access to premium YouTube',
    img:'../assets/images/ytb.png',
    animation: '../assets/images/ytbAnimation.gif',
    subtitle:'Select the subscription type for a period of 12 months:',
    plans:[
      {
        name:'Music',
        items:[
          'Listen to music without ads, in the background and offline',
        ],
        price:60,
      },
      {
        name:'Premium',
        items:[
          'YouTube and YouTube Music without ads, in the background and offline',
        ],
        price:80,
      },
    ]
  },
  {
    name: 'Spotify',
    description:'Spotify offers digital copyright restricted recorded music and podcasts, including more than 82 million songs, from record labels and media companies.',
    img:'../assets/images/sptf.png',
    animation: '../assets/images/sptfAnimation.gif',
    subtitle:'Select the subscription type for a period of 12 months:',
    plans:[
      {
        name:'Individual',
        items:[
          'Ad-free music listening','Play anywhere - even offline','On-demand playback' 
        ],
        price:47,
      },
      {
        name:'Duo',
        items:[
          '2 Premium accounts for a couple under one roof','Ad-free music listening, play offline, on-demand playback',
        ],
        price:57,
      },
      {
        name:'Family',
        items:[
          '6 Premium accounts for family members living under one roof','Block explicit music','Ad-free music listening, play offline, on-demand playback', 
        ],
        price:77,
      },
    ]
  },
  
];
export { faqs, info };
