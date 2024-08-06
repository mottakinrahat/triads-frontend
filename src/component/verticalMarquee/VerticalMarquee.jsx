const VerticalMarquee = ({ marqueeNumber }) => {
    return (
      <div className='absolute w-full h-full animate-marquee'>
        <div className='w-full'>
          {Array(32).fill().map((_, index) => (
            <img 
              key={index} 
              className='w-full h-auto object-contain' 
              src="/images/striaosLogo.png" 
              alt="Striaos Logo" 
            />
          ))}
        </div>
        <div className='w-full'>
          {Array(32).fill().map((_, index) => (
            <img 
              key={index} 
              className='w-full h-auto object-contain' 
              src="/images/striaosLogo.png" 
              alt="Striaos Logo" 
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default VerticalMarquee;
  