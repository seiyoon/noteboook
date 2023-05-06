import {useNavigate} from "react-router-dom";

export const Item = ({board_id, title, content, subject, week, date}) => {
    const navigate = useNavigate();

    return (
        <div className="itenMain" onClick={() => {
        navigate(`/board/${board_id}`)}
        }>
            <div className="itemText">
                <div className="itemWeek">{week}</div>
                <div className="itmeSubject">{subject}</div>
                <div className="itemTitle">{title}</div>
                <div className="itemDate">{date}</div>
            </div>
        </div>
    )
}