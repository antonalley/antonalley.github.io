import "./Personal.css"

const ImageCard = ({ src, alt, description }) => (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <img src={src} alt={alt} style={{ maxWidth: '50%', width: 'auto', maxHeight:'40vh', height: 'auto' }} />
      <p>{description}</p>
    </div>
  );


export default function Personal({instructions}){
    return (
        <div className={`personal ${instructions}`}>
            <div className="personal-list">
            <h2>About Me</h2>
            <ImageCard
                src="images/meg_anton.jpg"
                alt="Wedding"
                description="I got married to Meg in January 2024 and we love our little family!"
            />
            <ImageCard
                src="images/alleyfamily-4.jpg"
                alt="Chicago"
                description="I grew up in the suburbs of Chicago with my family! I always enjoyed running, playing sports, and being outdoors!"
            />
            {/* <div>
                <h3>About Us</h3>
                <p>Short description about your family and background.</p>
            </div> */}
            </div>
        </div>
    )
}