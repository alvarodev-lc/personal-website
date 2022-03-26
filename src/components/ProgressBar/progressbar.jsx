import "./progressbar.css"

function ProgressBar(props) {
    // To set the progressbar text dynamically
    let percentage = props.progress;
    // Create necessary css to create the fill of the progressbar
    const css = `
    .progressbar-fill-${percentage} {
        width: ${percentage}%;
        height: 100%;
        background-color: pink;
    }
    `
    let fill_classname = `progressbar-fill-${percentage}`
    console.log(css)
    return(
        <div className="progressbar">
            <div className={fill_classname}>
                <span className="progress-text">{percentage}%</span>
            </div>
            <style>
                {css}
            </style>
        </div>
    )
}

export default ProgressBar
