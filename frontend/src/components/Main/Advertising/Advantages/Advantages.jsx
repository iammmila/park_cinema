import React from 'react'
import png from "../../../../pdfs/Document.png"; // path of my file

//general scss
import "./Advantages.scss"

function Advantages() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = png;
        link.download = "hihihi"; // filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='advantages_section'>
            <div className="container">
                <div className='wrapper_advantages'>
                    <div className='info_advantages'>
                        <h2>There are some indisputable advantages in the placement of an advertisement in our cinemas:</h2>
                        <ul>
                            <li>Precise targeting effect and high-quality contact.</li>
                            <li>In the atmosphere of entertainment, advertisement reception appears on an emotional level, and that means the increased memorability of a brand.</li>
                            <li>The selection of the cinema upon the needful criteria, as well as the precise selection of movie for the advertisement placement, can ideally coincide with the audience of the advertised product with the audience in the cinema hall.</li>
                            <li>The impact and spectacularity are completely incomparable with television. A bright and dynamic commercial on the big screen provokes an effect ten times as much than television broadcasting. The memorability of the commercial on the next day after watching the film is 50-60 percent and even more.</li>
                            <li>Cinemas are one of the best areas for marketing among the youth audience, with the most financially secured part of it.</li>
                            <li>There is an opportunity for complex advertisement: commercials before the movie starts, monitors in the lobby, posters, light boxes, 3D glasses, branding of the hall etc.</li>
                        </ul>
                        <button onClick={handleDownload}>
                            Download
                        </button>
                    </div>
                    <div className='neon_red'>
                        <img src="https://parkcinema.az/addons/shared_addons/themes/new/img/teklif/teklif-mini.jpg" alt="offer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages