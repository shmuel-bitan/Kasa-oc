import "./banniere.css";

function Banniere({image, texte}) {
    return(
        <div className="banniere">
            <img className="banniere-img" src={image} alt="Bannière"/>
            <div className="banniere-sombre"></div>
            <span className="banniere-txt">{texte}</span>
        </div>
    );
}

export default Banniere;