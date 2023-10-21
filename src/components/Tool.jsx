export const Tool = ({ props }) => {

    const { icon, title, description, color } = props;

    return (
        <div className="tool">

            <span className="icon-box" style={{ backgroundColor: color }}>
                {icon}
            </span>

            <div className="info">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}