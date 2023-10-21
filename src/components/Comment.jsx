import { StarIcon } from "./StarIcon"

export const Comment = ({ props }) => {

    const { stars = 5, name = 'Anonymous', img = '#', comment = 'comment' } = props;

    return (
        <div className="comment">
            <div className="header-comment">
                <img className="profile-pic" src={img} alt="" />
                <div>
                    <p className="name">{name}</p>
                    {
                        [
                            <StarIcon />,
                            <StarIcon />,
                            <StarIcon />,
                            <StarIcon />,
                            <StarIcon />,
                        ].fill(<StarIcon full />, 0, stars)
                    }
                </div>
            </div>
            <p>
                {comment}
            </p>
        </div>
    )
}