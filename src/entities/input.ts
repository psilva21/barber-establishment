import { model, Schema } from 'mongoose'
import { CollectionName } from '../enums'

const schema = new Schema({
    registrationDate: {
        type: Schema.Types.String,
        required: true,
    },
    yieldType: {
        type: Schema.Types.String,
        required: true,
    },
    description: {
        type: Schema.Types.String,
        required: true,
    },
    value: {
        type: Schema.Types.Number,
        required: true,
    },
    payment: {
        type: Schema.Types.String,
        required: true,
    },
    responsible: {
        type: Schema.Types.String,
        required: true,
    }
})

export default model(CollectionName.yield, schema)