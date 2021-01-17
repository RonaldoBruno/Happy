import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './styles.css';
import mapMarkerImg from '../../assets/images/mapMarker.svg'
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface IOrphanages {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<IOrphanages[]>([]);

    useEffect(() => {
        api.get('orphanages').then(res => {
            setOrphanages(res.data);
        })
    }, []);

    if (!orphanages) {
        return <p>Carregando...</p>
    }


    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>
                        Escolha um orfanato no mapa
                    </h2>
                    <p>
                        Muitas crianças estão esperando a sua visita :)
                    </p>
                </header>

                <footer>
                    <strong>Toledo</strong>
                    <strong>PR</strong>
                </footer>
            </aside>            

            <Map
                center={[-24.723655, -53.743312]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                {
                    orphanages.map(item => {
                        return (
                            <Marker
                                key={item.id}
                                icon={mapIcon}
                                position={[item.latitude, item.longitude]}>

                                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                    <Link to={`/orphanages/${item.id}`}>
                                        <FiArrowRight size={20} color="#FFF" />
                                    </Link>
                                    {item.name}
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </Map>


            <Link to="/createOrphanage" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}
export default OrphanagesMap;