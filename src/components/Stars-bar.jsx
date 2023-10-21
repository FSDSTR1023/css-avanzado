import { StarIcon } from "./StarIcon"

export const StarsBar = ({ stars = '5', percent = '10', color = 'rgb(250, 204, 21)' }) => {

    // const { stars, percent } = props;
    // console.log(stars)
    // console.log(percent)

    return (
        <div className="wrap-bar">
            <span>
                {stars}
            </span>

            <StarIcon full />

            <span>
                <div className="bar-out">
                    <div className="bar-in" style={{ width: `calc(260px*(${percent})/100)` }}></div>
                </div>
            </span>
            <span>
                {(percent < 10) ? `0${percent}%` : `${percent}%`}
            </span>
        </div>
    )
}
// style={{ height: '1.5rem', width: '200px', backgroundColor: 'white' }}
//style={{ backgroundColor: 'yellow', height: '100%', width: `${percent}%` }}