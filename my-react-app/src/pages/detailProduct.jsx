import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data);
        });
    }, [id]);
    console.log(product);
    return (
        <div className="flex items-center justify-center min-h-screen w-[100]">
            {Object.keys(product).length > 0  &&(
            <div className="flex max-w-xl font-sans">
                <div className="relative flex-none w-48">
                    <img src={product.image} alt={product.title} className="absolute inset-0 object-cover w-full h-full" loading="lazy" />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {product.title}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            ${product.price}
                        </div>
                        <div className="flex-none w-full mt-2 text-sm font-medium text-slate-700">
                        {product.rating.rate}/5 ({product.rating.count})
                        </div>
                    </div>
                    <div className="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">
                        <div className="flex space-x-2 text-sm">
                            {product.description}
                        </div>
                    </div>
                    <div className="flex mb-6 space-x-4 text-sm font-medium">
                        <div className="flex flex-auto space-x-4">
                            <button className="h-10 px-6 font-semibold text-white bg-black rounded-md" type="submit">
                                Buy now
                            </button>
                            <button className="h-10 px-6 font-semibold border rounded-md border-slate-200 text-slate-900" type="button">
                                Add to bag
                            </button>
                        </div>
                        <button className="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </form>
            </div>
            )};
        </div>
        
    );
};

export default DetailProductPage