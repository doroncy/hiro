import businessSalad from '../../assets/icons/salad.svg';
import businessMain from '../../assets/icons/main.svg';
import businessTea from '../../assets/icons/tea.svg';

const HASHMAL_MENU = {    
    businessMenu: [
        {
            title: "appetizer",
            extraTitle: "choose",
            icon: businessSalad,
            groups: [
                {
                    title: 'salad',
                    items: [
                        {title: 'carrots_s.title', subTitle: 'carrots_s.subTitle', price: ''},
                        {title: 'chicken_s.title', subTitle: 'chicken_s.subTitle', price: ''},
                        {title: 'eggplant_s.title', subTitle: 'eggplant_s.subTitle', price: ''},
                        {title: 'seaweed_s.title', subTitle: 'seaweed_s.subTitle', price: ''},
                        {title: 'beet_s.title', subTitle: 'beet_s.subTitle', price: ''},                 
                    ]
                }
            ]            
        },
        {
            title: "main",
            extraTitle: "choose",
            icon: businessMain,
            groups: [
                {
                    title: 'bun',
                    extraTitle: 'bun2pcs',
                    items: [                        
                        {title: 'chicken_s.title', subTitle: 'chicken_s.subTitle', price: '64'},
                        {title: 'chutney_s.title', subTitle: 'chutney_s.subTitle', price: '66'},           
                        {title: 'beef_s.title', subTitle: 'beef_s.subTitle', price: '68'},
                        {title: 'duck_s.title', subTitle: 'duck_s.subTitle', price: '68'},                
                        {title: 'belly_s.title', subTitle: 'belly_s.subTitle', price: '68'},                
                        {title: 'eggplant_s.title', subTitle: 'eggplant_s.subTitle', price: '59'},
                        {title: 'squash_s.title', subTitle: 'squash_s.subTitle', price: '59'},                        
                    ]
                },
                {
                    title: "wok",
                    items: [
                        {title: 'dandan.title', subTitle: 'dandan.subTitle', price: '76'},
                        {title: 'tofu.title', subTitle: 'tofu.subTitle', price: '72'},
                        {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '74'},                                        
                    ]
                },
                {
                    title: "ramen",
                    items: [
                        {title: 'duck_s.title', subTitle: 'duck_s.subTitle', price: '79'},
                        {title: 'gochu_s.title', subTitle: 'gochu_s.subTitle', price: '72/78'},
                        {title: 'pork_s.title', subTitle: 'pork_s.subTitle', price: '78'},                        
                        {title: 'tofu_s.title', subTitle: 'tofu_s.subTitle', price: '69'},
                        {title: 'dandan_s.title', subTitle: 'dandan_s.subTitle', price: '78'},                        
                    ]
                }
            ]            
        },
        {
            title: "teaTitle",
            icon: businessTea,
            groups: [
                {                    
                    items: [
                        {title: 'tea.yuzu'}                 
                    ]
                }
            ]            
        },
        {
            title: "extra",            
            groups: [
                {
                    title: 'gyoza',
                    items: [
                        {title: 'chicken_s.title', subTitle: 'chicken_s.subTitle', price: '58/42'},
                        {title: 'pork_s.title', subTitle: 'pork_s.subTitle', price: '59/44'},
                        {title: 'vegan_s.title', subTitle: 'vegan_s.subTitle', price: '55/39', extra: 'gyozaSixPack_s'},                        
                    ]
                },  
                {
                    title: 'dessert',
                    items: [
                        {title: 'yuzu.title', subTitle: 'yuzu.subTitle', price: '21'}                        
                    ]
                },
                {
                    title: 'kids',
                    items: [
                        {title: 'various.title', subTitle: 'various.subTitle', price: '28-34'}                        
                    ]
                }              
            ]            
        },
    ],
    dinnerMenu: [
        {
            title: "salad",
            items: [
                {title: 'green_s.title', subTitle: 'green_s.subTitle', price: '28'},
                {title: 'carrots_s.title', subTitle: 'carrots_s.subTitle', price: '19'},
                {title: 'chicken_s.title', subTitle: 'chicken_s.subTitle', price: '28'},
                {title: 'beet_s.title', subTitle: 'beet_s.subTitle', price: '26'},
                {title: 'eggplant_s.title', subTitle: 'eggplant_s.subTitle', price: '23'},                
                {title: 'seaweed_s.title', subTitle: 'seaweed_s.subTitle', price: '26'},
                {title: 'hiro_s.title', subTitle: 'hiro_s.subTitle', price: '69/66'}
            ]
        },
        {
            title: "gyoza",
            items: [
                {title: 'chicken_s.title', subTitle: 'chicken_s.subTitle', price: '58/42'},
                {title: 'pork_s.title', subTitle: 'pork_s.subTitle', price: '59/44'},
                {title: 'vegan_s.title', subTitle: 'vegan_s.subTitle', price: '55/39', extra: 'gyozaSixPack_s'}                
            ]
        },
        {
            title: "bun",
            items: [
                {title: 'chicken_s.title', subTitle: 'chicken_s.subTitle', price: '27'},
                {title: 'chutney_s.title', subTitle: 'chutney_s.subTitle', price: '28'},
                {title: 'beef_s.title', subTitle: 'beef_s.subTitle', price: '29'},                
                {title: 'duck_s.title', subTitle: 'duck_s.subTitle', price: '29'},                
                {title: 'belly_s.title', subTitle: 'belly_s.subTitle', price: '29'},
                {title: 'eggplant_s.title', subTitle: 'eggplant_s.subTitle', price: '25'},
                {title: 'squash.title', subTitle: 'squash.subTitle', price: '25'}                                                
            ]
        },
        {
            title: "grill",
            items: [
                {title: 'corn.title', subTitle: 'corn.subTitle', price: '36'},
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '79'},                
                {title: 'butcher.title', subTitle: 'butcher.subTitle', price: '89'},
                {title: 'takutzna.title', subTitle: 'takutzna.subTitle', price: '76'},
                {title: 'vegetarian.title', subTitle: 'vegetarian.subTitle', price: '69'}                
            ]
        },
        {
            title: "wok",
            items: [
                {title: 'dandan.title', subTitle: 'dandan.subTitle', price: '66'},
                {title: 'tofu.title', subTitle: 'tofu.subTitle', price: '62'},
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '64'},
                {title: 'pork.title', subTitle: 'pork.subTitle', price: '79'},
            ]
        },
        {
            title: "ramen",
            items: [
                {title: 'duck_s.title', subTitle: 'duck_s.subTitle', price: '69'},
                {title: 'gochu_s.title', subTitle: 'gochu_s.subTitle', price: '68/60'},
                {title: 'pork_s.title', subTitle: 'pork_s.subTitle', price: '66'},                                
                {title: 'tofu_s.title', subTitle: 'tofu_s.subTitle', price: '54'},
                {title: 'dandan_s.title', subTitle: 'dandan_s.subTitle', price: '64', extra:'addGyuza'},
            ]
        }
    ],    
    drinksMenu: [
        {
            title: "cocktails",
            items: [
                {title: 'spritz.title', subTitle: 'spritz.subTitle', price: '39'},
                {title: 'sour.title', subTitle: 'sour.subTitle', price: '39'},
                {title: 'smoky.title', subTitle: 'smoky.subTitle', price: '39'}
            ]
        },
        {
            title: "sake",
            items: [                
                {title: 'karakuchi.title', price: '42'},
                {title: 'nigiwai.title', price: '42'},
                {title: 'snow.title', price: '39'}
            ]
        },
        {
            title: "beer",
            items: [                
                {title: 'leo.title', price: '26'},
                {title: 'stella.title', price: '28'}                
            ]            
        },
        {
            title: "wine",
            priceTitle: 'priceTitle',
            items: [                
                {title: 'white.title', subTitle: 'white.subTitle', price: '32 | 122'},
                {title: 'red.title', subTitle: 'red.subTitle', price: '34 | 115'},
                {title: 'rose.title', subTitle: 'rose.subTitle', price: '34 | 115'}
            ]
        },
        {
            title: "soft",
            items: [
                {title: 'cola.title', price: '12'},
                {title: 'colaZero.title', price: '12'},
                {title: 'water.title', price: '12'},
                {title: 'sparkling.title', price: '10'},
            ]
        },
        {
            title: "hot",
            items: [
                {title: 'green.title', price: '10'}
            ]
        }
    ] 
}

export default HASHMAL_MENU;