import Button from '../components/Elements/Button';
const ProductsPage = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow">
                <a href="#">
                    <img src="/public/images/shoes-1.jpg" alt="products" className="p-8 rounded-t-lg" />
                </a>
                <div className="px-5 pb-5">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-white">Sepatu Baru</h5>
                        <p className="text-white text-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis, ex illum exercitationem explicabo assumenda quia optio harum adipisci? Sequi ut voluptates nulla esse facere qui? Nulla cupiditate accusamus eius!</p>
                    </a>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">1.000.000</span>
                    <Button className></Button>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;