const SARONA_MENU = {
    foodMenu: [
        {
            title: "salad",
            items: [
                {title: 'green.title', subTitle: 'green.subTitle', price: '21'},
                {title: 'carrots.title', subTitle: 'carrots.subTitle', price: '19'},
                {title: 'eggplant.title', subTitle: 'eggplant.subTitle', price: '19'},
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '21'},
                {title: 'seaweed.title', subTitle: 'seaweed.subTitle', price: '21'}
            ]
        },
        {
            title: "gyoza",
            items: [
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '35'},
                {title: 'vegan.title', subTitle: 'vegan.subTitle', price: '30'},                
                {title: 'mix.title', subTitle: 'mix.subTitle', price: '33', extra: 'gyozaSixPack'}
            ]
        },
        {
            title: "bun",
            items: [
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '24'},
                {title: 'beef.title', subTitle: 'beef.subTitle', price: '26'},                
                {title: 'eggplant.title', subTitle: 'eggplant.subTitle', price: '23'},
                {title: 'squash.title', subTitle: 'squash.subTitle', price: '23'},
                {title: 'steamed.title', subTitle: 'steamed.subTitle', price: '53'}
            ]
        },
        {
            title: "between",
            items: [
                {title: 'wings.title', subTitle: 'wings.subTitle', price: '38'}                
            ]
        },
        {
            title: "ramen",
            items: [
                {title: 'gochu.title', subTitle: 'gochu.subTitle', price: '58/64'},
                {title: 'dandan.title', subTitle: 'dandan.subTitle', price: '62'},
                {title: 'chicken.title', subTitle: 'chicken.subTitle', price: '56'},
                {title: 'tofu.title', subTitle: 'tofu.subTitle', price: '52', extra:'addGyuza'}
            ]
        }
    ],
    drinksMenu: [
        {
            title: "cocktails",
            items: [
                {title: 'doozo.title', subTitle: 'doozo.subTitle', price: '24'},
                {title: 'samasu.title', subTitle: 'samasu.subTitle', price: '24'}                
            ]
        },
        {
            title: "beerAndSake",
            items: [
                {title: 'leo.title', price: '24'},
                {title: 'sakeGlass.title', price: '22'},
                {title: 'sakeDraft.title', price: '28'},
                {title: 'sakeOzeki.title', price: '32'}
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
export default SARONA_MENU;