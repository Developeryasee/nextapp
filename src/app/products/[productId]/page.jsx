export default function ProductDetail({params}) {
    const {productId} = params
    return(
        <div>   
            <h1>Detail about product {productId}</h1>
        </div>
    )
}