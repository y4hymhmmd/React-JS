import Button from "../Elements/Button";

const CardProduct = (PropTypes) => {
    const { children } = PropTypes;
    return (
        <div className="flex flex-col justify-between w-full max-w-xs mx-3 my-2 bg-gray-800 border-gray-700 rounded-lg shadow">
            {children}
        </div>
    );
};

const Header = (PropTypes) => {
    const { image } = PropTypes;
    return (
        <a href="#">
            <img src={image} alt="products" className="object-cover w-full p-8 rounded-t-lg h-60" />
        </a>
    )
}

const Body = (PropTypes) => {
    const { children, name } = PropTypes;
    return (
        <div className="h-full px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)} ...</h5>
                <p className="text-white text-s">{children.substring(0, 100)} ...</p>
            </a>
        </div>
    );
};

const Footer = (PropTypes) => {
    const { price, handleAddToCart, id } = PropTypes;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
            <Button classname="bg-blue-600" onClick={ () => handleAddToCart(id)}>Add to cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
