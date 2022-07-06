import React, { Component } from "react";
import './SearchPage.css';
import { dictionaryapi } from "../../Action/SearchAPI";
import List from "../List/List";


class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            result:[],
            error:false,
            errorMessage:''
        }
    }


    onChangeTextBox=(e)=>{
        this.setState({text:e.target.value,error:false})
    }

    onClickSearch=()=>{
        if(this.state.text!==''){
            dictionaryapi(this.state.text).then(res=>{
                this.setState({result:res,error:false})
            }).catch(err=>{
                this.setState({result:[],error:true,errorMessage:'No Definitions Found'})
                
            })
        }
    }

    onClickPlay=(data)=>{
        var source = document.getElementById('yourAudioTag')
        source.src=data[0].audio
        source.play();
    }

    onkeydown=(event)=>{
        // console.log("event=======>",event);
        if(event && event.keyCode==13 ){
            this.onClickSearch()
        }
    }

    render(){
        return(
            <div className='main-contariner'>
                <div className='search-container'>
                    <input className='searchbox' data-testid='input' type="text" placeholder='Type here...' value={this.state.text} onKeyDown={(e)=>{this.onkeydown(e)}} onChange={(e)=>{this.onChangeTextBox(e)}} />
                    <button data-testid='search' className='search-button' onClick={()=>{this.onClickSearch()}}>Search</button>
                </div>
                {this.state.result.length>0 &&  this.state.result.map((fact,index)=>{
                    return(
                        <div className='result-container'>
                            {index==0 &&
                            <div className='header'>
                                {fact.phonetics!==undefined && fact.phonetics!==null && fact.phonetics.length>0 && 
                                <span className='audio'>
                                    <img src={process.env.PUBLIC_URL + '/img/audio.jpg'} onClick={()=>{this.onClickPlay(fact.phonetics)}}/>
                                    <audio id='yourAudioTag' className='audio-img' />
                                </span>
                                }
                                <div className='title'>{fact.word}</div>
                            </div>}
                            <List listArr={fact.meanings.length>0?fact.meanings:[]}/>
                        </div>
                    )
                })
                }{this.state.result.length==0 && this.state.text!=='' && this.state.error &&
                    <div className='error-section'>{this.state.errorMessage}</div>
                }
            </div>
        )
    }

}

export default SearchPage;