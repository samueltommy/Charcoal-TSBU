export default function OurCertificate(){
    return(
        <>
            <div className="w-full mt-12">
                <div className="w-full py-10 flex max-xl:bg-[#FFD646] items-center justify-center flex-col gap-8 xl:flex-row ">
                    <div className="xl:py-10 bg-[#FFD646] flex flex-col w-[55vw] items-center xl:skew-x-[20deg] ml-[-3rem]">
                        <h1 className="h3 text-center xl:skew-x-[-20deg]">
                            Our Certificate
                        </h1>
                        <p className='mt-6 mb-10 md:w-6/12 w-12/12 text-grey-200 text-center xl:skew-x-[-20deg]'>
                            Our factories operate under official licenses,
                            in addition to certifications for factories and products
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        <div className="bg-white p-2 m-2 rounded">
                            <img className="max-w-[10rem]" src="./logo/carsurin_logo.png" alt="eror"/>
                        </div>
                        <div className="bg-white p-2 m-2 rounded">
                            <img className="max-w-[10rem]" src="./logo/Seal_of_the_Ministry_of_Finance_of_the_Republic_of_Indonesia.png" alt="eror"/>
                        </div>
                        <div className="bg-white p-2 m-2 rounded">
                            <img className="max-w-[10rem]" src="./logo/pengayoman.png" alt="eror"/>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
