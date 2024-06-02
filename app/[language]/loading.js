const MainLoading = () => {
    return (
        <div className='w-[90vw] h-[70vh] flex justify-center items-center  text-3xl text-center'>
            {/* <h1 className='animate-spin text-orange-500 font-medium'>Loading....</h1> */}
            <i className="fa-solid fa-spinner animate-spin"></i>

        </div>
    );
};

export default MainLoading;