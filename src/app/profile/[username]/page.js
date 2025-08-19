import React from 'react'

const users = {

    "jenil": {
        name: "jenill",
        cource: "B.tech cse"
    },
    "arjun": {
        name: "Arjun",
        cource: "B.tech cse"
    },
    "jagjeet": {
        name: "jagjeet",
        cource: "B.tech cse"
    }
}


const page = ({ params }) => {


    const { username } = params;
    const profile = users[username];
    return (
        <>
            <h1 style={{ color: "#ffffff", fontSize: "1.8rem" ,fontWeight:"bold" }}>  Profile Page : {profile.name}</h1>



            <div style={{ marginTop: "20px" }}>Cource :{profile.cource}</div>
        </>
    )
}

export default page
