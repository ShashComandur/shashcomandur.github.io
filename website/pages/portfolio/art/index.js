import Link from 'next/link';

// path to art folder, used in creating links
const artDir = "/portfolio/art/";

// helper method to format the name of a series for display from its respective folder name
// e.g. "example-series-name" => "Example Series Name"
function formatSeriesName (series) {
    series.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const words = series.split("-");
    return words.map((word) => { return word[0].toUpperCase() + word.substring(1) }).join(" ");
}

function AllSeries(props) {
    return (
        <>

            <h1 className="text-3xl underline"> Shows all art series </h1>

            <ul>
                {props.filenames.map((filenames) => (
                    <li> 
                        <h1>
                            <Link href={artDir+filenames}> {formatSeriesName(filenames)} </Link> 
                        </h1>
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl">
                <Link href="/portfolio"> Back to Portfolio </Link>
            </h2>
        </>
    )
  }
  
export default AllSeries

// get static filepaths of all directories in art folder — each folder represents a different series
export async function getServerSideProps() {
    const fs = require("fs");
    const artDir = "public/portfolio/art/";
    const data = fs.readdirSync(artDir, { withFileTypes: true }).filter((item) => item.isDirectory()).map((item) => item.name);
    console.log(data)
    return {
        props: {
            filenames: data,
        }
    }
}