

export default function reviewDetail({params}) {
    const {productId,reviewId}=params;
    return(
        <div>
                <h1>review of ID: {reviewId} of product: {productId}</h1>
        </div>
    )
}