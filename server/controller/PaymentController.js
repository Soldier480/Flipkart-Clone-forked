import https from 'https'
import paytmChecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantKey } from '../index.js';

export const addPaymentGateway = async (request, response) => {
    // api call
    let paytmCheckSum = await paytmChecksum.generateSignature(paytmParams, paytmMerchantKey);
    try {
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        }; //  to validate
        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}