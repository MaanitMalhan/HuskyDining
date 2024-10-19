import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Menu = () => {
    return (
        <div>
            <Header />
            <div className='menuHeading'>
                <h1> Dining Hall Menus </h1>
            </div> 

            <div className='hallList'>
                <ol>
                    <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=03&locationName=Connecticut+Dining+Hall&naFlag=1" target="_blank" rel="noopener noreferrer">
                    CONNECTICUT 
                    
                    </a>
                </ol>
           
                <ol>
                    <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=05&locationName=McMahon+Dining+Hall&naFlag=1" target="_blank" rel="noopener noreferrer">
                    McMAHON 
                    </a>
                </ol>
            
                <ol>
                    <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=07&locationName=North+Campus+Dining+Hall&naFlag=1" target="_blank" rel="noopener noreferrer">
                    NORTH 
                    </a>
                </ol>
           
                <ol>
                    <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=16&locationName=South+Campus+Marketplace&naFlag=1" target="_blank" rel="noopener noreferrer">
                    SOUTH 
                    </a>         
                </ol>
                
                <ol>
                    <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=15&locationName=Northwest+Marketplace&naFlag=1" target="_blank" rel="noopener noreferrer">
                    NORTHWEST 
                    </a>             
                </ol>
                
                <ol>
                    <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=01&locationName=Whitney+Dining+Hall&naFlag=1" target="_blank" rel="noopener noreferrer">
                    WHITNEY
                    </a>        
                </ol>
                
                <ol>
                    <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=06&locationName=Putnam+Dining+Hall&naFlag=1" target="_blank" rel="noopener noreferrer">
                    PUTNAM
                    </a>             
                </ol>
                
                <ol>
                <a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=42&locationName=Gelfenbien+Commons,%20Halal+%26+Kosher&naFlag=1" target="_blank" rel="noopener noreferrer">
                    GLEFENBIEN
                </a>            
                </ol>
            </div>
            <h1>Resturants Around Campus</h1>
            <Footer />
        </div>
    );
};

export default Menu;