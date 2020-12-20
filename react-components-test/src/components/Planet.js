import { Planet } from 'react-planet';
import React from 'react';

const MyPlanet=()=> {
	return (<Planet
                    dragablePlanet
                    dragRadiusPlanet={20}
                    bounce
                    mass={4}
                    tension={300}
                    friction={15}
                            centerContent={
                                <div class="main"
                                    style={{
                                        
                                        height: 100,
                                        width: 100,
                                        borderRadius: '50%',
                                        backgroundColor: '#1da8a4',
                                    }}
                                />
                            }
                    open
                        orbitRadius={120}
                        rotation={30}
                            autoClose
                        >
                            <div class=""
                                style={{
                                    height: 70,
                                    width: 70,
                                    borderRadius: '50%',
                                    backgroundColor: '#9257ad',
                                }}
                            />
                            <div
                                style={{
                                    height: 70,
                                    width: 70,
                                    borderRadius: '50%',
                                    backgroundColor: '#9257ad',
                                }}
                            />
                        </Planet>
	);
}
export default MyPlanet;