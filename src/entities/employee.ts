import { model, Schema } from 'mongoose'
import { CollectionName } from '../enums'

const schema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
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

export default model(CollectionName.EMPLOYEES, schema)