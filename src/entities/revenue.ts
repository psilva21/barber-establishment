import { model, Schema } from 'mongoose'
import { CollectionName } from '../enums'

const schema = new Schema({
    date: {
        type: Schema.Types.String,
        required: true,
    },
    type: {
        type: Schema.Types.String,
        required: true,
    },
    service: {
        type: [Schema.Types.ObjectId],
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

export default model(CollectionName.revenue, schema)