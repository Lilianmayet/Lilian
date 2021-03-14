import React from 'react'
import {TextInput} from 'react-native'

export default class About extends React.Component{

    constructor (props) {
        super(props);
    }


    render(){
        return(
           <TextInput

               underlineColorAndroid= 'transparent'

              style = {{height : 40 , borderColor : 'gray' , borderWidth : 3 }}

           />

        )


    }




};