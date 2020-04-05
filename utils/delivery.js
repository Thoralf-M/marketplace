const { channelRoot, createChannel, createMessage, parseMessage, mamAttach, mamFetch, mamFetchAll } = require('@iota/mam.js');
import { asciiToTrytes, trytesToAscii } from '@iota/converter'

import { composeAPI } from '@iota/core'
const api = composeAPI({ provider: "https://nodes.devnet.thetangle.org:443" });

// Setup the details for the channel.
const mode = 'restricted';
const sideKey = 'OMA';

const MWM = parseInt(process.env.MWM);

// Create a new channel using the details
// You could also load the state from persistence.

export const generateSeed = () => {
    if (window.crypto && window.crypto.getRandomValues) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
        let result = '';
        let values = new Uint32Array(81);
        window.crypto.getRandomValues(values);
        values.forEach(value => (result += charset[value % charset.length]));
        return result;
    } else throw new Error('Your browser is outdated and cant generate secure random numbers');
};

export const createDeliveryRequest = (
    data
) => {

    const promise = new Promise(async (resolve, reject) => {
        try {
            let shop_seed = generateSeed()

            // Create a new channel using the details
            // You could also load the state from persistence.
            // const channelState = createChannel(shop_seed, 2, mode, sideKey);
            const channelState = createChannel(shop_seed, 2, mode, sideKey);
            console.log("channelState", channelState)
            const initialRoot = channelRoot(channelState);
            console.log("initialRoot", initialRoot)

            // Create a MAM message using the channel state.
            // The returned mamMessage will contain address, root, nextRoot and payload.
            // The channel state is also updated, so you should persist it if you want
            // to add further messages in the same channel.
            

            // The payload should be attached to the tangle            
            console.log("data", data)
            console.log("JSON.stringify(data)", JSON.stringify(data))
            const trytesMessage = asciiToTrytes(JSON.stringify(data)) 


            console.log("trytesMessage", trytesMessage)
            const mamMessage = createMessage(channelState, trytesMessage);
        
            // Decode the message using the root and sideKey.
            // The decodedMessage will contain nextRoot and message.
            const decodedMessage = parseMessage(mamMessage.payload, mamMessage.root, sideKey);
            console.log("decodedMessage", decodedMessage)
            // If we want to attach the message to the tangle we first compose the API
            // And then attach the message, tagging it if required.
            // Attaching will return the actual transactions attached to the tangle if you need them.
            let test = await mamAttach(api, mamMessage, 3, MWM, "MY9MAM");
            console.log("test", test)
            return resolve(initialRoot);

        } catch (error) {
            console.log('createMAMChannel error', error);
            return reject(error);
        }
    });

    return promise;

};

export const createOrderChannel = (
    data
) => {

    const promise = new Promise(async (resolve, reject) => {
        try {
            let shop_seed = generateSeed()

            // Create a new channel using the details
            // You could also load the state from persistence.
            // const channelState = createChannel(shop_seed, 2, mode, sideKey);
            const channelState = createChannel(shop_seed, 2, mode, sideKey);
            console.log("channelState", channelState)
            const initialRoot = channelRoot(channelState);
            console.log("initialRoot", initialRoot)

            // Create a MAM message using the channel state.
            // The returned mamMessage will contain address, root, nextRoot and payload.
            // The channel state is also updated, so you should persist it if you want
            // to add further messages in the same channel.
            

            // The payload should be attached to the tangle            
            console.log("data", data)
            console.log("JSON.stringify(data)", JSON.stringify(data))
            const trytesMessage = asciiToTrytes(JSON.stringify(data)) 


            console.log("trytesMessage", trytesMessage)
            const mamMessage = createMessage(channelState, trytesMessage);
        
            // Decode the message using the root and sideKey.
            // The decodedMessage will contain nextRoot and message.
            const decodedMessage = parseMessage(mamMessage.payload, mamMessage.root, sideKey);
            console.log("decodedMessage", decodedMessage)
            // If we want to attach the message to the tangle we first compose the API
            // And then attach the message, tagging it if required.
            // Attaching will return the actual transactions attached to the tangle if you need them.
            let test = await mamAttach(api, mamMessage, 3, MWM, "MY9MAM");
            console.log("test", test)
            return resolve({root: initialRoot, seed: shop_seed});

        } catch (error) {
            console.log('createMAMChannel error', error);
            return reject(error);
        }
    });

    return promise;

};