import { Planet } from 'react-planet';
import React from 'react';

// dokumentacios fajlt atnezni
// prior: B
// https://github.com/innFactory/react-planet/blob/master/src/components/Satellite.tsx

const Planet1=()=>
{       return (
            <Planet
                centerContent={
                    <div
                    style={{
                        position: 'relative',
                        float: 'left',
                        margin: 20,
                        height: 180,
                        width: 180,
                        left: 400,
                        top: 200,
                        borderRadius: '50%',
                        // eslint-disable-next-line
                        backgroundImage: "url(" + "https://respage-static.s3.amazonaws.com/images/TowneProperties_LawrenceLanding_BubbleTalk.gif" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    />
                }
                open
                autoClose
            >
                <div
                    style={{
                    position: 'absolute',
                    height: 100,
                    width: 100,
                    left: 280,
                    top: 250,
                    // eslint-disable-next-line
                    backgroundImage: "url(" + "https://stereophonic.space/emoji/custom/ablobsmilehappy.gif" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                />
                <div
                    style={{
                    position: 'absolute',
                    height: 100,
                    width: 100,
                    left: 420,
                    top: 250,
                    // eslint-disable-next-line
                    backgroundImage: "url(" + "https://steamuserimages-a.akamaihd.net/ugc/939460955759074459/6AFE904E7BA1724EB0CE7EF9F237B75BC4893EDE/" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                />
            
            </Planet>
        );
    }
    

export default Planet1;