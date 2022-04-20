import React from 'react'

let now = new Date().toLocaleDateString();
function Footer(){
    return(
        <>
            <footer>
                <p>Copyright @ Baidya {now}</p>
            </footer>
        </>
    )
}

export default Footer;