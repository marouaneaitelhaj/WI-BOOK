import { TReview } from "../types";

export default function ReviewCard(props: { review: TReview }) {
    return (
        <div data-cy="review-card-container" className="flex space-x-4 text-sm text-gray-500 px-24">
            <div className="flex-none py-10" data-cy="image-container">
                <img data-cy="image" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-100" />
            </div>
            <div className="flex-1 py-10" data-cy="info-container">
                <h3 data-cy="fullName" className="font-medium text-gray-900">{props.review.fullName}</h3>
                <p data-cy="creationDate">{props.review.creationDate}</p>
                <p data-cy="stars" className="sr-only">5 out of 5 stars</p>

                <div data-cy="review-card-comment" className="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p data-cy="comment">
                        {props.review.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}