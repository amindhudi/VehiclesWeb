
import { MAKERS, PRODUCT_CATEGORIES, VEHICLE_CATEGORIES } from "../../components/config";
import { Access, CollectionConfig } from "payload/types";
import { BeforeChangeHook, AfterChangeHook } from "payload/dist/collections/config/types";
import { Product, User } from "../../payload-types";
import { stripe } from "../../lib/stripe";

const addUser : BeforeChangeHook<Product>= async ({req, data})=>{
const user = req.user
return {...data, user:user.id}
}
const syncUser : AfterChangeHook<Product>= async ({
    req,
     doc})=>{
const fullUser = await req.payload.findByID({
    collection:'users',
    id:req.user.id
})
if(fullUser && typeof fullUser==='object'){
    const {vehicles}=fullUser

    const allIDs =[
        ...(vehicles?.map((vehicle)=> typeof vehicle==='object' ? vehicle.id:vehicle) || []),
    ]

    const createdProductIDs = allIDs.filter(
     (id, index) => allIDs.indexOf(id) === index
    )

    const dataToUpdate = [...createdProductIDs, doc.id]

    await req.payload.update({
        collection:'users',
        id: fullUser.id,
        data:{
            vehicles:dataToUpdate
        }
    })



    



}
}

const isAdminOrHasAccess =():Access =>({req:{user:_user}})=>{
    const user =_user as User | undefined
    if(!user) return false
    if(user.role ==='admin') return true

    const userProductIDs =(user.vehicles || []).reduce<Array<string>>((acc, vehicle)=>{
        if(!vehicle) return acc
        if(typeof vehicle === "string"){
            acc.push(vehicle)
        }
        else{
            acc.push(vehicle.id)
        }
        return acc
    }, [])

    return {
        id:{
            in:userProductIDs
        }
    }
    
}

export const Vehicles:CollectionConfig={
    slug:'vehicles',
    admin:{
        useAsTitle:'name'
    }, 
    access:{
    read:isAdminOrHasAccess(),
    update:isAdminOrHasAccess(),
    delete:isAdminOrHasAccess(),
    },
    hooks:{
        afterChange:[syncUser],
    beforeChange:[
        addUser, async (args)=>{
// if(args.operation ==='create'){
//     const data = args.data as Product
//     const createProduct = await stripe.products.create({
//         name:data.name,
//         default_price_data:{
//             currency:'USD',
//             unit_amount:Math.round(data.price * 100),
//         }
//     })

//     const updated : Product = {
//         ...data,
//         stripeId: createProduct.id,
//         priceId:createProduct.default_price as string
//     }
//     return updated
// } else if(args.operation ==='update'){
//     const data = args.data as Product
//     const updatedProduct = await stripe.products.update(data.stripeId!, {
//         name:data.name,
//        default_price:data.priceId!,
//     })

//     const updated : Product = {
//         ...data,
//         stripeId: updatedProduct.id,
//         priceId:updatedProduct.default_price as string
//     }
//     return updated
// }
        }
    ]
    },
    fields:[
        {
            name:"user",
            type:"relationship",
            relationTo:"users",
            required:true,
            hasMany:false,
            admin:{
                condition:() => false
                  }

        },
        {
            name:"name",
            label:"Name",
            type:"text",
            required:true
        },
        {
            name:"description",
            label:"Product details",
            type:"textarea",
        },
        {
            name:"category",
            label:"Category",
            type:"select",
            options:VEHICLE_CATEGORIES.map(
                ({label, value})=> ({label, value})
            ),
            required:true
        },
        {
            name:"maker",
            label:"Maker",
            type:"select",
            options:MAKERS.map(
                ({label, value})=> ({label, value})
            ),
            required:true
        },
        {
            name:"price",
            label:"Price",
            type:"number",
            // min:0,
            // max:1000
            required:true
        },
        {
            name:"model",
            label:"Model",
            type:"number",
            // min:0,
            // max:1000
            required:true
        },
       
        // {
        //     name:"product_files",
        //     label:"Product File(s)",
        //     type:"relationship",
        //     required:true,
        //     relationTo:"product_files",
        //     hasMany:false
        // },
        {
            name:"approvedForSale",
            label:"Product Status",
            type:"select",
            defaultValue:"pending",
            access:{
             create:({req})=> req.user.role==='admin',
             read:({req})=> req.user.role==='admin',
             update:({req})=> req.user.role==='admin',         
            },
            options:[
                {
                    label:"Pending verification",
                    value:"pending"
                },
                {
                    label:"Approved",
                    value:"approved"
                },
                {
                    label:"Denied",
                    value:"denied"
                },
            ]
        },
        // {
        //     name:"priceId", 
        //     access:{
        //         create:()=> false,
        //         read:()=> false,
        //         update:()=> false
        //     }, 
        //     type:"text",
        //     admin:{
        //         hidden:true,
        //     }
        // },
        // {
        //     name:"stripeId", 
        //     access:{
        //         create:()=> false,
        //         read:()=> false,
        //         update:()=> false
        //     }, 
        //     type:"text",
        //     admin:{
        //         hidden:true,
        //     }
        // },
        {
            name:"isFeatured",
            label:"Featured",
            type:"checkbox",
            // min:0,
            // max:1000
            //required:true
        },
        {
            name:"images",
            type:"array",
            label:"Vehicle images",
            minRows:1,
            maxRows:4,
            required:true,
            labels:{
                singular:"Image",
                plural:"Images"
            },
            fields:[
                {
                    name:"image",
                    type:"upload",
                    relationTo:"media",
                    required:true
                }
            ]
        }
    ]
}