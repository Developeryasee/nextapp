'use client';

export default function Home() {
    const openLinkInNewTab = ( url ) => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if ( newTab ) newTab.opener = null;
      }
    return(
        <>
        <h1>Welcome Home!</h1>

        <a href="https://nextapp-mu.vercel.app/authenticate">Click here</a>
        <button onClick={()=>{
            openLinkInNewTab("https://nextapp-mu.vercel.app/authenticate");

        }}>
        Press Here
        </button>
        </>
    )
}