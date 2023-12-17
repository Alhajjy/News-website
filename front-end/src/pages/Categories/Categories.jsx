import { faCheck, faFire, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Categories() {
    const tags = [
        ["Russia", "Chaina", "Ekonomy", "War", "Summer", "Money", "homeless"],
        ["Russia", "Chaina", "Ekonomy", "War", "Summer", "Money", "homeless"],
        ["Russia", "Chaina", "Ekonomy", "War", "Summer", "Money", "homeless"],
    ];
    const repeat = () => {
        let all = [];
        for (let i = 0; i < tags.length; i++) {
            const el = [
                <div className="item main-btn unfollowed">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>{tags[0][i]}</span>
                </div>,
                <div className="item main-btn followed">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{tags[1][i]}</span>
                </div>,
                <div className="item main-btn famous">
                    <FontAwesomeIcon icon={faFire} />
                    <span>{tags[2][i]}</span>
                </div>,
            ];
            // const element = tags[i];
            all.push(el[0]);
            all.push(el[1]);
            all.push(el[2]);
        }
        return <div className="categories con">{all}</div>;
    };
    return repeat();
}
