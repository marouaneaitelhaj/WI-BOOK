import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { TBook } from "../types"
import axios from "axios"
import ReviewCard from "../components/ReviewCard"
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, styled } from "@mui/material"

export default function Book(props: { bookId: string | undefined }) {
    const [book, setBook] = useState<TBook>()
    useEffect(() => {
        axios.get("/books/" + props.bookId).then((response) => {
            setBook(response.data)
        })
    }, [])
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const pictures : string[] = [
        "https://static.wixstatic.com/media/2e2a49_da30973d55744cdd98ffd271be5c367c~mv2.png",
        "https://static.wixstatic.com/media/2e2a49_140ba1569d4a49ba8cdfac408ede5aa4~mv2.png",
        "https://static.wixstatic.com/media/2e2a49_31515e7b084f4c0ab6bc38877c46df16~mv2.png",
    ]
    function getRandomPict(id:number): string {
        const randomIndex = id % pictures.length;
        return pictures[randomIndex];
    }

    return (
        <div className="flex items-center flex-col m-10">
            <div className="bg-white flex  w-5/6 justify-around py-10">
                <div className="flex">
                    <div className="aspect-w-1 aspect-h-1 w-full">
                        <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel">
                            <img src={getRandomPict(book?.id || 1)} alt="Angled front view with bag zipped and handles upright." className=" w-[400px]  h-[600px] object-cover object-center sm:rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{book?.title}</h1>



                    <div className="mt-6">
                        <h3 className="">Genre:</h3>
                        <div className="space-y-6 text-base text-gray-700">
                            <p>{book?.genre}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="">Author:</h3>
                        <div className="space-y-6 text-base text-gray-700">
                            <p>{book?.author.firstName + " " + book?.author.lastName}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="">Description:</h3>
                        <div className="space-y-6 text-base text-gray-700">
                            <p>{book?.description}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="text-[#2C2C2C] border  border-[#E4DFC2] bg-[#E4DFC2] px-5 py-3 rounded-md hover:bg-white" onClick={handleClickOpen}>See Reviews</button>
                    </div>
                </div>
            </div>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                scroll="body"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Reviews
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    X
                </IconButton>
                <DialogContent dividers>
                    {book?.reviews.map((review) => (
                        <ReviewCard key={review.id} review={review}></ReviewCard>
                    ))}
                </DialogContent>
            </BootstrapDialog>

            {/* <div className="bg-white">
                <div>
                    <h2 className="sr-only">Customer Reviews</h2>
                    <div className="">
                        {book?.reviews.map((review) => (
                            <ReviewCard review={review}></ReviewCard>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}