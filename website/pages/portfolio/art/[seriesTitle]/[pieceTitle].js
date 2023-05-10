import Image from 'next/image';
import { useRouter } from 'next/router'

function ArtDetails() {
    const router = useRouter()
    const { seriesTitle, pieceTitle } = router.query
    const pathTemplate = "/portfolio/art/"
    let imagePath = pathTemplate.concat(seriesTitle, "/", pieceTitle, ".png")
    console.log(imagePath)

    return (
        <>
            {/* <h1 className="text-3xl underline"> Art Details - this shows the details of a piece: {pieceTitle} in {seriesTitle} </h1> */}

            <h1> {imagePath} </h1>

            <Image
                src={imagePath}
                width={500}
                height={500}
                alt=""
            />

        </>
    )
}



export default ArtDetails