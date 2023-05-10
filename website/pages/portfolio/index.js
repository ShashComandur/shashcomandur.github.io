import Link from 'next/link'

function Options() {
    return (
        <>
            <h1 className="text-3xl underline"> Portfolios: Art & Code </h1>
            <h1 className="text-3xl">
                <Link href="portfolio/art"> Art </Link>
            </h1>
            <h1 className="text-3xl">
                <Link href="portfolio/code"> Code </Link>
            </h1>

            <h2 className="text-3xl">
                <Link href=".."> Back to Home </Link>
            </h2>
        </>
    )
}
  
export default Options
