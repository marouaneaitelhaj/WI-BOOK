import { Book } from "../types";

export default function BookCard(props: { book: Book }) {
    return (
        <div
            key={props.book.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                    src='https://lh3.googleusercontent.com/-cw2dvp_QpqA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfknYJDz4qijATxyItY2c24MJmsd_Ag/photo.jpg?sz=46'
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                    <a href={props.book.title}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {props.book.title}
                    </a>
                </h3>
                <p className="text-sm text-gray-500">{props.book.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                    {/* <p className="text-sm italic text-gray-500">{props.book.options}</p> */}
                    {/* <p className="text-base font-medium text-gray-900">{props.book.price}</p> */}
                </div>
            </div>
        </div>
    )
}