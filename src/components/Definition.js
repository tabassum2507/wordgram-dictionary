import { isWidthDown } from '@material-ui/core';
import React from 'react';
import './Definition.css'

const Definition = ( {word, category, meanings, LightMode }) => {
    return (
        <div className="meanings">
             {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "white", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
             )}



            { word === "" ? (
            <span className="subTitle">Start by typing a word in search</span>
            ) : ( meanings.map((mean) => 
                 mean.meanings.map((item) => 
                 item.definitions.map((def) => (
                     <div className='singleMean' style={{ backgroundColor : 
                        "#b2dfdb" , color : LightMode? "white": "black" }} >
                         <b>{ def.definition }</b>
                         <hr style= {{ backgroundColor : "black", width: "100%"}}></hr>
                         {def.example && (
                             <span>
                                <b>Example :</b> {def.example}
                            </span>
                                )}
                          {def.synonyms && (
                            <span>
                                <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                             </span>
                          )}
                     </div>
                 )))
             )
            )}
        </div>
    );
};

export default Definition
