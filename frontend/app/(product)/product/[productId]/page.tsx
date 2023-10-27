import Header from "./components/Header"
import {ImageGallery} from "./components/Gallery"
import {getProductByProductId} from  "@/lib/product"


export default async function ViewProfile ({ params }: { params: { productId: number } }) {
    
    const pro = await getProductByProductId(params.productId)
    console.log(pro)

    return (
    <div className="container mx-auto max-w-screen-xl grow px-0 pb-2 pt-8 sm:px-5">
    <Header 
    title={pro.ime}
    subtitle="Ptuj"
    date={pro.createdAt}
    />
    <ImageGallery images={pro.slike}/>
    
    </div>);
}

