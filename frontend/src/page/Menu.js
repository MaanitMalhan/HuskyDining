import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Menu = () => {
    return (
        <div>
            <Header />
            <h1> Dining Hall Menus </h1>
           
            <ol>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Connecticut 
                </a>
            </ol>
           
            <ol>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                McMahon 
                </a>
            </ol>
            
            <ol>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                North 
                </a>
            </ol>
           
            <ol>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                South 
                </a>         
            </ol>
            
            <ol>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Northwest 
                </a>             
            </ol>
            
            <ol>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    
                 Putnam 
                </a>        
            </ol>
            
            <ol>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
 
                 Whitney 
                </a>             
            </ol>
            
            <ol>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
 
                 Gelfenbien 
            </a>            
            </ol>
            <Footer />
        </div>
    );
}

export default Menu;