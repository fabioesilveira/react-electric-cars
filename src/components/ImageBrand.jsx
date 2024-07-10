
function ImageBrand({imgs}) {
    return (
        <>
            <img  src={imgs[0].img} className={imgs[0].css} />
            <img  src={imgs[1].img} className={imgs[1].css}/>

            <h2 className="chekout-cars-h2">CHECK THE CARS OUT</h2>
        </>
    )
}

export default ImageBrand;