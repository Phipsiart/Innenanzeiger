export default function InputField({id, placeholder, type}){
    return(
        <>
        <input  id={id} type={type} className="bg-gray-200 outline transition-all pl-2 pr-2 outline-1 outline-gray-200 rounded-lg focus:outline-2  focus:outline-blue-500  h-10" placeholder={placeholder}></input>
        </>
    )
}