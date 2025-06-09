import { useParams } from "react-router-dom"

function formatName(slug) {
    return slug
        .split("-")
        .map((sl)=> sl.charAt(0).toUpperCase() + sl.slice(1))
        .join(" ")
}


function MemberDetail(){
    const {memberName} = useParams()
    return(
        <div>
            <h1>
                Personal detail of {formatName(memberName)}
            </h1>
        </div>
    )
}

export default MemberDetail