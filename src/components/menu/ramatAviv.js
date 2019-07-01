import businessSalad from '../../assets/icons/salad.svg';
import businessMain from '../../assets/icons/main.svg';
import businessTea from '../../assets/icons/tea.svg';

const RAMAT_AVIV_MENU = {    
    businessMenu: [
        {
            title: "businessSaladChoice",
            extraTitle: "",
            icon: businessSalad,
            groups: [
                {         
                    title: "",           
                    items: [                        
                        {title: 'chicken_salad_ra.title', subTitle: 'chicken_salad_ra.subTitle', price: ''},
                        {title: 'eggplant_salad_ra.title', subTitle: 'eggplant_salad_ra.subTitle', price: ''},
                        {title: 'seaweed_salad_ra.title', subTitle: 'seaweed_salad_ra.subTitle', price: ''},
                        {title: 'beet_salad_ra.title', subTitle: 'beet_salad_ra.subTitle', price: ''},                 
                    ]
                }
            ]            
        },
        {
            title: "main",
            extraTitle: "business58",
            icon: businessMain,
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [
                        {title: 'vegetarian_ramen_ra.title', subTitle: 'vegetarian_ramen_ra.subTitle', price: ''},
                        {title: 'gochu_ramen_ra.title', subTitle: 'gochu_ramen_ra.subTitle', price: ''},         
                        {title: 'tofu__wok_ra.title', subTitle: 'tofu__wok_ra.subTitle', price: ''},
                        {title: 'chicken_wok_ra.title', subTitle: 'chicken_wok_ra.subTitle', price: ''},
                        {title: 'rice_wok_ra.title', subTitle: 'rice_wok_ra.subTitle', price: ''},                                        
                    ]
                },     
                {
                    title: "bunMeal",
                    extraTitle: '',
                    items: [
                        {title: 'chicken.title', subTitle: 'chicken.subTitle', price: ''},
                        {title: 'beef.title', subTitle: 'beef.subTitle', price: ''},         
                        {title: 'dalorit.title', subTitle: 'dalorit.subTitle', price: ''},
                        {title: 'crispy.title', subTitle: 'crispy.subTitle', price: ''},
                        {title: 'burger.title', subTitle: 'burger.subTitle', price: ''},                                        
                        {title: 'steak.title', subTitle: 'steak.subTitle', price: ''},                                        
                    ]
                },                
            ]            
        },
        {
            title: "main",
            extraTitle: "business68",
            icon: businessMain,
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [
                        {title: 'hiroSalad.title', subTitle: 'hiroSalad.subTitle', price: ''},
                        {title: 'gochuBeef_ramen.title', subTitle: 'gochuBeef_ramen.subTitle', price: ''},         
                        {title: 'dandan_ramen.title', subTitle: 'dandan_ramen.subTitle', price: ''},
                        {title: 'dandan_wok.title', subTitle: 'dandan_wok.subTitle', price: ''},
                        {title: 'udon_wok.title', subTitle: 'udon_wok.subTitle', price: ''},                                        
                    ]
                },                
            ]            
        },
        {
            title: "afternoonDrink",            
            groups: [
                {                    
                    items: [
                        {title: 'beekSake.title', price: '18'}                 
                    ]
                }
            ]            
        },        
    ],
    dinnerMenu: [
        {
            title: "saladNormal",
            extraTitle: "",            
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [                        
                        {title: 'chicken_salad_ra.title', subTitle: 'chicken_salad_ra.subTitle', price: '49/28'},
                        {title: 'eggplant_salad_ra.title', subTitle: 'eggplant_salad_ra.subTitle', price: '23'},
                        {title: 'seaweed_salad_ra.title', subTitle: 'seaweed_salad_ra.subTitle', price: '26'},
                        {title: 'beet_salad_ra.title', subTitle: 'beet_salad_ra.subTitle', price: '26'},                 
                        {title: 'hiroSalad.title', subTitle: 'hiroSalad.subTitle', price: '69'},
                    ]
                },                
            ]            
        },
        {
            title: "gyoza",
            extraTitle: "",            
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [                        
                        {title: 'gyoza_ra.chicken.title', subTitle: 'gyoza_ra.chicken.subTitle', price: '42/58'},
                        {title: 'gyoza_ra.spinach.title', subTitle: 'gyoza_ra.spinach.subTitle', price: '39/55'}
                    ]
                },                
            ]                       
        },  
        {
            title: "steamBun",
            extraTitle: "",            
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [                        
                        {title: 'steamBun.chicken.title', subTitle: 'steamBun.chicken.subTitle', price: '28'},
                        {title: 'steamBun.beef.title', subTitle: 'steamBun.beef.subTitle', price: '29'},
                        {title: 'steamBun.squash.title', subTitle: 'steamBun.squash.subTitle', price: '25'},
                        {title: 'steamBun.crispy.title', subTitle: 'steamBun.crispy.subTitle', price: '32'},
                        {title: 'steamBun.burger.title', subTitle: 'steamBun.burger.subTitle', price: '34'},
                        {title: 'steamBun.steak.title', subTitle: 'steamBun.steak.subTitle', price: '36'}
                    ]
                },                
            ]                       
        }, 
        {
            title: "ramen",
            extraTitle: "",            
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [                        
                        {title: 'gochu_ramen_ra.title', subTitle: 'gochu_ramen_ra.subTitle', price: '60/68'},
                        {title: 'dandan_ramen_ra.title', subTitle: 'dandan_ramen_ra.subTitle', price: '64'},
                        {title: 'vegetarian_ramen_ra.title', subTitle: 'vegetarian_ramen_ra.subTitle', price: '54'}               
                    ]
                },                
            ]                       
        },             
        {
            title: "wok",
            extraTitle: "",            
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [                        
                        {title: 'dandan_wok.title', subTitle: 'dandan_wok.subTitle', price: '68'},
                        {title: 'vegi_wok.title', subTitle: 'vegi_wok.subTitle', price: '64'},
                        {title: 'chicken_wok.title', subTitle: 'chicken_wok.subTitle', price: '66'},
                        {title: 'rice_wok.title', subTitle: 'rice_wok.subTitle', price: '74'},
                        {title: 'udon_wok.title', subTitle: 'udon_wok.subTitle', price: '78/74'}
                    ]
                },                
            ]                      
        },
        {
            title: "kids",
            extraTitle: "",            
            groups: [
                {
                    title: "",
                    extraTitle: '',
                    items: [                        
                        {title: 'bunCrispy.title', subTitle: 'bunCrispy.subTitle', price: '24'},
                        {title: 'childNoodle.title', subTitle: 'childNoodle.subTitle', price: '35'}                        
                    ]
                },                
            ]                       
        }       
    ],    
}

export default RAMAT_AVIV_MENU;