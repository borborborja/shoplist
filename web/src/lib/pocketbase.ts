import PocketBase from 'pocketbase';

// In Docker self-hosted, it will be the same origin.
// For dev (React on 5173, Go on 8090), we might need to specify 8090.
const url = import.meta.env.PROD
    ? window.location.origin
    : 'http://127.0.0.1:8090';

export const pb = new PocketBase(url);
pb.autoCancellation(false);
