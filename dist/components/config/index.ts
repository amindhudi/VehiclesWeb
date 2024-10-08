export const PRODUCT_CATEGORIES =[
    {
        label:"UI Kits",
        value:"ui_kits" as const,
        featured:[
            {
                name:"Editor picks",
                href:"#",
                imageSrc:"/nav/ui-kits/mixed.jpg",
            },
            {
                name:"New Arrivals",
                href:"#",
                imageSrc:"/nav/ui-kits/blue.jpg",
            }
            ,
            {
                name:"Bestsellers",
                href:"#",
                imageSrc:"/nav/ui-kits/purple.jpg",
            }
        ]
    },
    {
        label:"Icons",
        value:"icons" as const,
        featured:[
            {
                name:"Favorite Icon Picks",
                href:"#",
                imageSrc:"/nav/icons/picks.jpg",
            },
            {
                name:"New Arrivals",
                href:"#",
                imageSrc:"/nav/icons/new.jpg",
            }
            ,
            {
                name:"Bestselling Icons",
                href:"#",
                imageSrc:"/nav/icons/bestsellers.jpg",
            }
        ]
    }
]

export const VEHICLE_CATEGORIES =[
    {
        label:"Car",
        value:"car" as const,
       
    },
    {
        label:"Jeep",
        value:"jeep" as const,
       
    }
    ,
    {
        label:"MotorCycle",
        value:"motor_cycle" as const,
       
    }
    ,
    {
        label:"Bus",
        value:"bus" as const,
       
    }
    ,
    {
        label:"Truck",
        value:"truck" as const,
       
    }
    ,
    {
        label:"Tractor",
        value:"tractor" as const,
       
    }
]

export const MAKERS =[
    {
        label:"Toyota",
        value:"toyota" as const,    
    },
    {
        label:"Honda",
        value:"honda" as const,  
    }
    ,
    {
        label:"Nissan",
        value:"nissan" as const,
      
    }
    ,
    {
        label:"Suzuki",
        value:"suzuki" as const,
      
    }
    ,
    {
        label:"Yamaha",
        value:"yamaha" as const,
      
    }
]