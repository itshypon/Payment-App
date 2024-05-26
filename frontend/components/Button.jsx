/* eslint-disable react/prop-types */

export function Button({label, onClick}){
    return <div className="pt-4 pb-2">
        <button onClick={onClick} className="w-full bg-black text-white text-sm text-center py-2 rounded-lg">{label}</button>
    </div>
}