import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

// path to art folder, used for image sources
const artDir = "/portfolio/art/";

function SeriesDetails(props) {
    const router = useRouter()
    const seriesTitle = router.query.seriesTitle

    return (
        <>
            <h1 className="text-3xl underline"> Art Details - this shows the details of a series: {seriesTitle} </h1>
            <ul>
                {props.filenames.map((filenames) => (
                    <li> 
                        <h1> { filenames } </h1>
                        <Image
                            src={artDir+seriesTitle+"/"+filenames}
                            width={500}
                            height={500}
                        />
                    </li>
                ))}
            </ul>
            <h1 className="text-3xl underline"> 
                <Link href="/portfolio/art"> ↵ Back to Art </Link>
            </h1>
        </>
    )
}

export default SeriesDetails

// get static filepaths of images in series folder
export async function getServerSideProps(context) {
    const fs = require("fs")
    const artDir = "public/portfolio/art/"
    const seriesTitle = context.params.seriesTitle
    const data = fs.readdirSync(artDir+seriesTitle)

    console.log(data)

    return {
        props: {
            filenames: data,
        }
    }
}