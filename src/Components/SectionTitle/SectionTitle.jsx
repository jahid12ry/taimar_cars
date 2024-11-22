 

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mb-4 ">
           <div>
           <p className="text-blue-500 pt-28 mb-2">----{subHeading}----</p>
           <h1 className="text-4xl uppercase border-y-4 py-4 text-blue-500">{heading}</h1>
           </div>
            
        </div>
    );
};

export default SectionTitle;