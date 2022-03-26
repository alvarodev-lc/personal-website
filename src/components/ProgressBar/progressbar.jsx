import "./progressbar.min.css"

// TODO Make progressbar fill appear smoothly, from left to right

function ProgressBar(props) {
    // To set the progressbar text dynamically
    let percentage = props.progress;
    let background = props.background;
    // Create necessary css to create the fill of the progressbar
    let fill_classname = `progressbar-fill-${percentage}`
    const css = `
    .${fill_classname} {
        width: ${percentage}%;
        height: 100%;
        background: ${background};
        border-radius: 4px;
    }
    `
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
