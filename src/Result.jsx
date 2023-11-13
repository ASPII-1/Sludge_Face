export default function Result({ index1, index2, index3 }) {
    let match = index1 === index2 && index1 === index3 ? true : false;
    let stylee = match ? 'green' : 'red';
    return (
        <>
            {match ? <h2 style={{ color: stylee, fontSize: 60, paddingBottom: -40 }}>Congratulation</h2> : null}
            <h2 style={{ color: stylee, fontSize: 60 }}>{match ? "You Win" : "You Lose"}</h2>
        </>
    )

}