export default function BigInput({headline, description, inputid, placeholder}){
    return(
        <>
        <div className="z-[9999] fixed w-full h-full top-0 left-0 right-0 bg-white">
         <h1 className="text-4xl text-center mt-20">{headline}</h1>
         <div className="flex justify-center">
            <p className="max-w-xs">
                {description}
            </p>
         </div>
        </div>
        </>
    )
}