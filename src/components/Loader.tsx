function Loader(){
    return (
        <div className="flex justify-center py-10">
            <div className="flex flex-col">
                <i className='text-7xl bx bx-loader bx-spin bx-flip-horizontal' ></i>
                <span className="text-sm text-gray-400 flex justify-center">Loading.....</span>
            </div>
        </div>
    )
}

export default Loader