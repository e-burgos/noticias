import React from 'react';

const Noticia = ({noticia}) => {
    
    // Extraer los datos 
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    // En caso de no existir una imagen 
    
    return ( 
        <div className="col s12 m6 l4">
            <div className="card Medium">
                {imagen}
                <div className="card-content">
                    <span class="card-title center grey-text text-darken-4">{title}</span>
                    <blockquote>
                        {description}
                    </blockquote>
                </div>
                <div className="card-action">
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="waves-effect waves-light btn center light-blue"
                        >
                        Ver Noticia Completa <i class="material-icons right"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;