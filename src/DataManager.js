// import React, { Component } from "react"


export default Object.create(null,
    {
        getData:{
            value: () => {
                return fetch('  https://api.coinmarketcap.com/v2/ticker/')
                .then(res => res.json())
                .then((result => {console.log(result)
                })
        
    
             ) 
        }
}
    })