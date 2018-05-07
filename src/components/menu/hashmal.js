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
                        {title: 'green.title', subTitle: 'green.subTitle', price: ''},
                        {title: 'carrots.title', subTitle: 'carrots.subTitle', price: ''},
                        {title: 'eggplant.title', subTitle: 'eggplant.subTitle', price: ''},
                        {title: 'chicken.title', subTitle: 'chicken.subTitle', price: ''},
                        {title: 'seaweed.title', subTitle: 'seaweed.subTitle', price: ''}
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
                        {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '54'},
                        {title: 'beef.title', subTitle: 'beef.subTitle', price: '58'},           
                        {title: 'vegan.title', subTitle: 'vegan.subTitle', price: '54'},
                        {title: 'squash.title', subTitle: 'squash.subTitle', price: '52'},
                        {title: 'chutney.title', subTitle: 'chutney.subTitle', price: '56'},
                        {title: 'duck.title', subTitle: 'duck.subTitle', price: '58'}                
                    ]
                },
                {
                    title: "noodles",
                    items: [
                        {title: 'dandan.title', subTitle: 'dandan.subTitle', price: '64'},
                        {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '64'},                
                        {title: 'vegetarian.title', subTitle: 'vegetarian.subTitle', price: '64'}                
                    ]
                },
                {
                    title: "ramen",
                    items: [
                        {title: 'gochuBeef.title', subTitle: 'gochuBeef.subTitle', price: '68'},
                        {title: 'dandan.title', subTitle: 'dandan.subTitle', price: '68'},
                        {title: 'duck.title', subTitle: 'duck.subTitle', price: '68'},
                        {title: 'vegetarian.title', subTitle: 'vegetarian.subTitle', price: '60'},                        
                        {title: 'gochuChicken.title', subTitle: 'gochuChicken.subTitle', price: '62', extra: 'addGyuza'}                        
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
                    title: 'between',
                    items: [
                        {title: 'chickenGyoza.title', subTitle: 'chickenGyoza.subTitle', price: '35'},
                        {title: 'veganGyoza.title', subTitle: 'veganGyoza.subTitle', price: '30'},
                        {title: 'mixGyoza.title', subTitle: 'mixGyoza.subTitle', price: '33', extra: 'gyozaSixPack'},
                        {title: 'wings.title', subTitle: 'wings.subTitle', price: '38'},                
                        {title: 'tofu.title', subTitle: 'tofu.subTitle', price: '24'}
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
                {title: 'green.title', subTitle: 'green.subTitle', price: '21'},
                {title: 'carrots.title', subTitle: 'carrots.subTitle', price: '19'},
                {title: 'eggplant.title', subTitle: 'eggplant.subTitle', price: '19'},
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '21'},
                {title: 'seaweed.title', subTitle: 'seaweed.subTitle', price: '21'},
                {title: 'liver.title', subTitle: 'liver.subTitle', price: '28'}
            ]
        },
        {
            title: "gyoza",
            items: [
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '35'},
                {title: 'pork.title', subTitle: 'pork.subTitle', price: '35'},
                {title: 'vegan.title', subTitle: 'vegan.subTitle', price: '30'},                
                {title: 'mix.title', subTitle: 'mix.subTitle', price: '33', extra: 'gyozaSixPack'}
            ]
        },
        {
            title: "bun",
            items: [
                {title: 'duck.title', subTitle: 'duck.subTitle', price: '26'},
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '24'},
                {title: 'pork.title', subTitle: 'pork.subTitle', price: '26'},
                {title: 'beef.title', subTitle: 'beef.subTitle', price: '26'},                
                {title: 'vegan.title', subTitle: 'vegan.subTitle', price: '23'},
                {title: 'squash.title', subTitle: 'squash.subTitle', price: '23'},
                {title: 'chutney.title', subTitle: 'chutney.subTitle', price: '26'}
            ]
        },
        {
            title: "between",
            items: [
                {title: 'pork.title', subTitle: 'pork.subTitle', price: '36'},
                {title: 'wings.title', subTitle: 'wings.subTitle', price: '38'},                
                {title: 'tofu.title', subTitle: 'tofu.subTitle', price: '27'}
            ]
        },
        {
            title: "ramen",
            items: [
                {title: 'duck.title', subTitle: 'duck.subTitle', price: '66'},
                {title: 'dandan.title', subTitle: 'dandan.subTitle', price: '62'},
                {title: 'pork.title', subTitle: 'pork.subTitle', price: '62'},
                {title: 'vegetarian.title', subTitle: 'vegetarian.subTitle', price: '52'},
                {title: 'gochu.title', subTitle: 'gochu.subTitle', price: '58/64', extra:'addGyuza'}
            ]
        },
        {
            title: "noodles",
            items: [
                {title: 'dandan.title', subTitle: 'dandan.subTitle', price: '62'},
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '62'},                
                {title: 'vegetarian.title', subTitle: 'vegetarian.subTitle', price: '58'}                
            ]
        },
        {
            title: "kids",
            items: [
                {title: 'various.title', subTitle: 'various.subTitle', price: '28-34'}                
            ]
        },
        {
            title: "dessert",
            items: [
                {title: 'yuzu.title', subTitle: 'yuzu.subTitle', price: '21'}                
            ]
        }
    ],    
    drinksMenu: [
        {
            title: "cocktails",
            items: [
                {title: 'spritz.title', subTitle: 'spritz.subTitle', price: '34'},
                {title: 'sour.title', subTitle: 'sour.subTitle', price: '34'},
                {title: 'smoky.title', subTitle: 'smoky.subTitle', price: '34'}
            ]
        },
        {
            title: "sake",
            items: [                
                {title: 'karakuchi.title', price: '42'},
                {title: 'nigiwai.title', price: '42'},
                {title: 'unfiltered.title', price: '42'}
            ]
        },
        {
            title: "beer",
            items: [                
                {title: 'leo.title', price: '24'},
                {title: 'stella.title', price: '26'}                
            ]            
        },
        {
            title: "wine",
            priceTitle: 'priceTitle',
            items: [                
                {title: 'white.title', subTitle: 'white.subTitle', price: '34 | 64 | 115'},
                {title: 'red.title', subTitle: 'red.subTitle', price: '34 | 64 | 115'}
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