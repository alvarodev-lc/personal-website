import "./progressbar.min.css"


function ProgressBar(props) {
    // To set the progressbar text dynamically
    let percentage = props.progress;
    let background = props.background;
    let animation_delay = props.delay
    const fill_classname = `progressbar-fill-${percentage}`
    const keyframe_name = `fill-${percentage}`
    const css = `
    .${fill_classname} {
        width: ${percentage}%;
        height: 100%;
        background: ${background};
        border-radius: 4px;
        animation: ${keyframe_name} ${1 + parseInt(animation_delay)}s forwards;
    }

    @keyframes ${keyframe_name} {
        from { width: 0%; }
        to   { width: ${percentage}%; }
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
