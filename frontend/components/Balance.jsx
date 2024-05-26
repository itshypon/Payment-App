/* eslint-disable react/prop-types */

export function Balance({value}){
    return <div className="flex space-x-2 text-xl">
        <div>Your Balance : </div>
        <div>{value}</div>
    </div>
}