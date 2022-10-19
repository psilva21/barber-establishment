import { model, Schema } from 'mongoose'
import { CollectionName } from '../enums'

const schema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
})

schema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: (doc, converted) => {
        delete converted._id

        return converted
    }
});

export default model(CollectionName.PAYMENT_METHOD, schema)