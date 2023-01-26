import mongoose from 'mongoose';

export function getConnectionDB() {
    console.log('--> trying connect to mongodb')
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URI || '')
            .then(() => {
                console.log('--> Connected with mongodb');
            })
            .catch(() => {
                console.log('--> Unable to connect to mongodb')
            })
    } catch(error) {
        console.log('--> Error connecting to mongodb')
    }
}
