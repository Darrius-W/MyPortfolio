import './NameHeader.css'

export default function NameHeader(){
    const handleReload = (e) =>{
        e.preventDefault();
        window.location.reload(true);
    };

    return(
        <span className='navLeft'>
            <div className='circle'></div>
            <div className="pause-button"></div>
            <a className="name-lnk navbar-brand" href="/" onClick={ handleReload }>Darrius White</a>
        </span>
    );
};