import { useEffect, useRef, useState } from 'react';
import './Skills.css'; // Import the CSS file


const logos = [
    "291716_github_logo_social network_social_icon.png",
    "317755_badge_html_html5_achievement_award_icon.png",
    "317756_badge_css_css3_achievement_award_icon.png",
    "1174949_js_react js_logo_react_react native_icon.png",
    "1175544_firebase_google_icon.png",
    "1829980_brand_logo_network_social_swift_icon.png",
    "2993682_brand_brands_linux_logo_logos_icon.png",
    "4373190_docker_logo_logos_icon.png",
    "4373217_java_logo_logos_icon.png",
    "7089161_google_maps_icon.png",
    "8546986_node_icon.png",
    "8546990_stripe_icon.png",
    "8666254_aws_icon.png",
    "9035061_logo_javascript_icon.png",
    "9040382_filetype_html_icon.png",
    "9055848_bxl_django_icon.png",
    "9080475_brand_kotlin_icon.png",
    "11120662_fi_brands_typescript_icon.png",
    "python-logo-only.png",
    "raspberry-pi.256x256.png",
]

const downButton = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-arrow-down-square" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
    </svg>

export function Skills() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Get mouse position relative to the canvas
        const rect = canvas.getBoundingClientRect();
        const xMovement = (rect.width / 2 - (e.clientX - rect.left)) / 3;
        const yMovement = (rect.height / 2 - (e.clientY - rect.top)) / 3;

        setPosition({ x: xMovement, y: yMovement });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener('mousemove', handleMouseMove);
        return () => canvas.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        console.log(position)
    }, [position])


    return (
        <div className="skills-container">
            <div className="skills-title">
                <div>SKILLS</div>
                <div>{downButton}</div>
            </div>
        <div ref={canvasRef} className="logo-grid" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={`icons/${logo}`}
                    className={`logo`}
                    alt="logo"
                />
            ))}
        </div>
        </div>
    );
}