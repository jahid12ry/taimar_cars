import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero md:h-[400px] h-64 md:ml-[470px] ml-32 w-24 ">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content  text-neutral-content text-center">
                        <div className="max-w-md ">
                            <h1 className="-mb-12 text-xl font-bold uppercase">{title}</h1>
                        </div>
                    </div>
                </div>
            </Parallax>


        </div>

    );
};

export default Cover;