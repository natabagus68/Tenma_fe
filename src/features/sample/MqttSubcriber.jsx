// yarn add mqtt prop-types
import React from 'react';
import { Connector, subscribe } from '../../common/utils/MQTT';


const MessageList = ({ data }) => {
    return (
        <React.Fragment>
            { JSON.stringify(data) }
        </React.Fragment>
    );
};

const Connected = subscribe({ topic: 'lg/scada/sensor' })(MessageList);

export const MqttSubcriber = () => {
    return (
        <div>
            <Connector
                mqttProps={ {
                    url: 'ws://iot.ragdalion.com:9001',
                    options: { protocol: 'ws' },
                } }
            >
                <Connected />
            </Connector>
        </div>
    );
};
