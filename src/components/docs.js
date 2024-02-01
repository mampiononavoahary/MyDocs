import React from 'react';

export default function Docs() {
   
    return (
        <div className='docs-main'>
            <nav className='nav'>
                <div className='Left'>
                    <img className='menu' src='assets/leftmenu.png' alt=''/>
                    <img className='logo' src='assets/Docs-icon.png' alt=''/>
                    <h1>Docs</h1>
                </div>
                <div className='Center'>
                    <form class="nosubmit">
                    <input className='inputSearch' type='text' placeholder='search'></input >
                    </form>
                </div>
                <div className='Right'>
                    <img className='rightmenu' src='assets/rightmenu.png' alt=''/>
                    <img className='user' src='assets/zo.jpg' alt=''/>
                </div>
            </nav>

        </div>
    )
}