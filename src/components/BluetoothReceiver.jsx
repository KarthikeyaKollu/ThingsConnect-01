import React, { useState, useEffect } from 'react';

export const BluetoothReceiver = () => {
    const [bleServer, setBleServer] = useState(null);
    const [bleState, setBleState] = useState('Disconnected');
    const [value1, setValue1] = useState('NaN');
    const [value2, setValue2] = useState('NaN');

    // Define BLE Device Specs
    const deviceName = 'ESP32';
    const bleService = '19b10000-e8f2-537e-4f6c-d104768a1214';
    const sensorCharacteristic = '19b10001-e8f2-537e-4f6c-d104768a1214';
    const secondCharacteristic = '19b10002-e8f2-537e-4f6c-d104768a1214';

    // Check if BLE is available in the browser
    const isWebBluetoothEnabled = () => {
        return Boolean(navigator.bluetooth);
    }

    // Connect to BLE Device and Enable Notifications
    const connectToDevice = () => {
        console.log('Initializing Bluetooth...');
        if (isWebBluetoothEnabled()) {
            navigator.bluetooth.requestDevice({
                filters: [{ name: deviceName }],
                optionalServices: [bleService]
            })
            .then(device => {
                console.log('Device Selected:', device.name);
                setBleState(`Connected to device ${device.name}`);
                device.addEventListener('gattservicedisconnected', onDisconnected);
                return device.gatt.connect();
            })
            .then(gattServer => {
                setBleServer(gattServer);
                console.log("Connected to GATT Server");
                return gattServer.getPrimaryService(bleService);
            })
            .then(service => {
                console.log("Service discovered:", service.uuid);
                return Promise.all([
                    service.getCharacteristic(sensorCharacteristic),
                    service.getCharacteristic(secondCharacteristic)
                ]);
            })
            .then(characteristics => {
                console.log("Characteristics discovered:", characteristics.map(c => c.uuid));
                characteristics.forEach(characteristic => {
                    characteristic.addEventListener('characteristicvaluechanged', handleCharacteristicChange);
                    characteristic.startNotifications();
                    console.log("Notifications Started for characteristic:", characteristic.uuid);
                });
            })
            .catch(error => {
                console.log('Error: ', error);
            });
        } else {
            console.log("Web Bluetooth API is not available in this browser!");
        }
    }

    // Handle disconnecting from the device
    const disconnectDevice = () => {
        console.log("Disconnect Device.");
        if (bleServer && bleServer.connected) {
            bleServer.disconnect()
            .then(() => {
                console.log("Device Disconnected");
                setBleState("Device Disconnected");
            })
            .catch(error => {
                console.log("An error occurred:", error);
            });
        } else {
            console.error("Bluetooth is not connected.");
        }
    }

    // Handle the disconnection event
    const onDisconnected = (event) => {
        console.log('Device Disconnected:', event.target.device.name);
        setBleState("Device disconnected");
    }

    // Handle characteristic value changes
    const handleCharacteristicChange = (event) => {
        const newValueReceived = new TextDecoder().decode(event.target.value);
        console.log("Characteristic value changed: ", newValueReceived);
        const characteristicUUID = event.target.uuid;
        if (characteristicUUID === sensorCharacteristic) {
            setValue1(newValueReceived);
        } else if (characteristicUUID === secondCharacteristic) {
            setValue2(newValueReceived);
        }
    }

    return (
        <div>
            <h1>ESP32 Web BLE Application</h1>
            <button onClick={connectToDevice}>Connect to BLE Device</button>
            <button onClick={disconnectDevice}>Disconnect BLE Device</button>
            <p>BLE state: <strong style={{color: '#d13a30'}}>{bleState}</strong></p>
            <h2>Fetched Value 1</h2>
            <p>{value1}</p>
            <h2>Fetched Value 2</h2>
            <p>{value2}</p>
        </div>
    );
}


